import { useEffect, useState, useRef } from 'react';
import { usePostHog } from './usePostHog';

export function useScrollTracking() {
  const { capture } = usePostHog();
  const [scrollDepth, setScrollDepth] = useState(0);
  const scrollMilestones = useRef(new Set());
  const startTime = useRef(Date.now());

  useEffect(() => {
    let ticking = false;
    const milestones = [25, 50, 75, 90, 100];

    const calculateScrollPercentage = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const trackLength = documentHeight - windowHeight;
      const percentage = Math.floor((scrollTop / trackLength) * 100);
      return Math.min(100, Math.max(0, percentage));
    };

    const updateScrollDepth = () => {
      const currentScrollPercentage = calculateScrollPercentage();
      setScrollDepth(currentScrollPercentage);

      // Track milestones
      milestones.forEach(milestone => {
        if (currentScrollPercentage >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone);
          const timeOnPage = Math.floor((Date.now() - startTime.current) / 1000);
          
          capture('scroll_milestone_reached', {
            milestone: `${milestone}%`,
            scroll_depth: milestone,
            time_on_page_seconds: timeOnPage,
            page_url: window.location.href,
            page_title: document.title,
            viewport_height: window.innerHeight,
            document_height: document.documentElement.scrollHeight
          });
        }
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDepth);
        ticking = true;
      }
    };

    // Track initial scroll position
    updateScrollDepth();

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Track max scroll depth on page leave
    const handlePageLeave = () => {
      const maxDepth = Math.max(...Array.from(scrollMilestones.current), 0);
      const timeOnPage = Math.floor((Date.now() - startTime.current) / 1000);
      
      capture('page_scroll_summary', {
        max_scroll_depth: maxDepth,
        time_on_page_seconds: timeOnPage,
        page_url: window.location.href,
        page_title: document.title,
        milestones_reached: Array.from(scrollMilestones.current).sort((a, b) => a - b)
      });
    };

    window.addEventListener('beforeunload', handlePageLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handlePageLeave);
    };
  }, [capture]);

  return { scrollDepth };
}