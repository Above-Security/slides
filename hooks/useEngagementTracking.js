import { useEffect, useRef } from 'react';
import { usePostHog } from './usePostHog';

export function useEngagementTracking() {
  const { capture } = usePostHog();
  const startTime = useRef(Date.now());
  const isActive = useRef(true);
  const inactivityTimer = useRef(null);
  const activeTime = useRef(0);
  const lastActiveTime = useRef(Date.now());
  const interactions = useRef(0);

  useEffect(() => {
    // Track page engagement start
    capture('page_engagement_started', {
      page_url: window.location.href,
      page_title: document.title,
      referrer: document.referrer,
      timestamp: new Date().toISOString()
    });

    // Track user interactions
    const trackInteraction = () => {
      interactions.current++;
      
      if (!isActive.current) {
        isActive.current = true;
        lastActiveTime.current = Date.now();
      }

      // Reset inactivity timer
      clearTimeout(inactivityTimer.current);
      inactivityTimer.current = setTimeout(() => {
        if (isActive.current) {
          activeTime.current += Date.now() - lastActiveTime.current;
          isActive.current = false;
        }
      }, 30000); // Consider inactive after 30 seconds
    };

    // Track various engagement signals
    const events = ['click', 'scroll', 'keypress', 'mousemove', 'touchstart'];
    events.forEach(event => {
      window.addEventListener(event, trackInteraction, { passive: true });
    });

    // Track visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (isActive.current) {
          activeTime.current += Date.now() - lastActiveTime.current;
          isActive.current = false;
        }
        
        capture('page_hidden', {
          active_time_seconds: Math.floor(activeTime.current / 1000),
          total_time_seconds: Math.floor((Date.now() - startTime.current) / 1000),
          page_url: window.location.href
        });
      } else {
        lastActiveTime.current = Date.now();
        isActive.current = true;
        
        capture('page_visible', {
          page_url: window.location.href
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Track rage clicks
    let clickCount = 0;
    let clickTimer = null;
    const handleRageClick = (e) => {
      clickCount++;
      
      if (clickCount >= 3) {
        capture('rage_click_detected', {
          click_count: clickCount,
          target_element: e.target.tagName,
          target_text: e.target.textContent?.substring(0, 100),
          page_url: window.location.href,
          coordinates: { x: e.clientX, y: e.clientY }
        });
      }

      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, 1000);
    };

    window.addEventListener('click', handleRageClick);

    // Track page unload with engagement summary
    const handleUnload = () => {
      if (isActive.current) {
        activeTime.current += Date.now() - lastActiveTime.current;
      }

      const totalTime = Date.now() - startTime.current;
      const engagementRate = (activeTime.current / totalTime) * 100;

      capture('page_engagement_ended', {
        total_time_seconds: Math.floor(totalTime / 1000),
        active_time_seconds: Math.floor(activeTime.current / 1000),
        engagement_rate: Math.round(engagementRate),
        interaction_count: interactions.current,
        page_url: window.location.href,
        page_title: document.title
      });
    };

    window.addEventListener('beforeunload', handleUnload);
    window.addEventListener('pagehide', handleUnload);

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, trackInteraction);
      });
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('click', handleRageClick);
      window.removeEventListener('beforeunload', handleUnload);
      window.removeEventListener('pagehide', handleUnload);
      clearTimeout(inactivityTimer.current);
    };
  }, [capture]);

  return {
    trackCustomEngagement: (eventName, properties = {}) => {
      interactions.current++;
      capture(eventName, {
        ...properties,
        current_active_time: Math.floor(activeTime.current / 1000),
        current_total_time: Math.floor((Date.now() - startTime.current) / 1000),
        interaction_count: interactions.current
      });
    }
  };
}