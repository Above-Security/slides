import '../styles/globals.css';
import PostHogProvider from '../components/PostHogProvider';
import { useScrollTracking } from '../hooks/useScrollTracking';
import { useEngagementTracking } from '../hooks/useEngagementTracking';

function AppWithTracking({ Component, pageProps }) {
  // Initialize scroll and engagement tracking
  useScrollTracking();
  useEngagementTracking();

  return <Component {...pageProps} />;
}

export default function MyApp({ Component, pageProps }) {
  return (
    <PostHogProvider>
      <AppWithTracking Component={Component} pageProps={pageProps} />
    </PostHogProvider>
  );
}
