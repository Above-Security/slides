import { useEffect } from 'react';
import { usePostHog } from '../../hooks/usePostHog';

export function LinkTracker({ href, children, eventName = 'link_clicked', ...props }) {
  const { capture } = usePostHog();

  const handleClick = (e) => {
    capture(eventName, {
      link_url: href,
      link_text: typeof children === 'string' ? children : '',
      link_type: href?.startsWith('http') ? 'external' : 'internal',
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_title: document.title
    });

    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <a href={href} {...props} onClick={handleClick}>
      {children}
    </a>
  );
}

export function ButtonTracker({ children, eventName = 'button_clicked', eventProperties = {}, ...props }) {
  const { capture } = usePostHog();

  const handleClick = (e) => {
    capture(eventName, {
      button_text: typeof children === 'string' ? children : '',
      button_id: props.id || null,
      button_class: props.className || null,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_title: document.title,
      ...eventProperties
    });

    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
}

export function FormTracker({ children, formName, onSubmit, ...props }) {
  const { capture } = usePostHog();
  const formStartTime = useRef(null);

  useEffect(() => {
    formStartTime.current = Date.now();
    
    capture('form_started', {
      form_name: formName,
      page_url: window.location.href,
      page_title: document.title
    });
  }, [formName, capture]);

  const handleSubmit = (e) => {
    const fillTime = formStartTime.current ? Date.now() - formStartTime.current : null;
    
    capture('form_submitted', {
      form_name: formName,
      fill_time_ms: fillTime,
      fill_time_seconds: fillTime ? Math.floor(fillTime / 1000) : null,
      page_url: window.location.href,
      page_title: document.title,
      timestamp: new Date().toISOString()
    });

    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form {...props} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export function VideoTracker({ src, title, ...props }) {
  const { capture } = usePostHog();
  const videoRef = useRef(null);
  const watchStartTime = useRef(null);
  const totalWatchTime = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      watchStartTime.current = Date.now();
      capture('video_played', {
        video_src: src,
        video_title: title,
        video_duration: video.duration,
        current_time: video.currentTime,
        page_url: window.location.href
      });
    };

    const handlePause = () => {
      if (watchStartTime.current) {
        totalWatchTime.current += Date.now() - watchStartTime.current;
        watchStartTime.current = null;
      }
      
      capture('video_paused', {
        video_src: src,
        video_title: title,
        current_time: video.currentTime,
        percent_watched: (video.currentTime / video.duration) * 100,
        total_watch_time_seconds: Math.floor(totalWatchTime.current / 1000)
      });
    };

    const handleEnded = () => {
      if (watchStartTime.current) {
        totalWatchTime.current += Date.now() - watchStartTime.current;
      }
      
      capture('video_completed', {
        video_src: src,
        video_title: title,
        video_duration: video.duration,
        total_watch_time_seconds: Math.floor(totalWatchTime.current / 1000),
        page_url: window.location.href
      });
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [src, title, capture]);

  return <video ref={videoRef} src={src} {...props} />;
}

import { useRef } from 'react';

export function SectionVisibilityTracker({ sectionName, children, threshold = 0.5 }) {
  const { capture } = usePostHog();
  const sectionRef = useRef(null);
  const hasBeenVisible = useRef(false);
  const visibilityStartTime = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasBeenVisible.current) {
            hasBeenVisible.current = true;
            visibilityStartTime.current = Date.now();
            
            capture('section_viewed', {
              section_name: sectionName,
              page_url: window.location.href,
              page_title: document.title,
              viewport_height: window.innerHeight,
              section_height: entry.target.offsetHeight
            });
          } else if (!entry.isIntersecting && visibilityStartTime.current) {
            const viewTime = Date.now() - visibilityStartTime.current;
            
            capture('section_exit', {
              section_name: sectionName,
              view_time_seconds: Math.floor(viewTime / 1000),
              page_url: window.location.href
            });
            
            visibilityStartTime.current = null;
          }
        });
      },
      { threshold }
    );

    const element = sectionRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionName, threshold, capture]);

  return (
    <div ref={sectionRef}>
      {children}
    </div>
  );
}