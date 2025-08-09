import { usePostHog } from '../../hooks/usePostHog';

// Track demo requests and lead generation
export function useDemoTracking() {
  const { capture, identify, setPersonProperties } = usePostHog();

  const trackDemoRequest = (email, companyInfo = {}) => {
    capture('demo_requested', {
      email,
      company_name: companyInfo.companyName,
      company_size: companyInfo.companySize,
      industry: companyInfo.industry,
      role: companyInfo.role,
      use_case: companyInfo.useCase,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      utm_source: new URLSearchParams(window.location.search).get('utm_source'),
      utm_medium: new URLSearchParams(window.location.search).get('utm_medium'),
      utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign')
    });

    // Identify the user for future tracking
    if (email) {
      identify(email, {
        email,
        ...companyInfo,
        demo_requested_at: new Date().toISOString()
      });
    }
  };

  const trackDemoScheduled = (email, scheduledDate, meetingType) => {
    capture('demo_scheduled', {
      email,
      scheduled_date: scheduledDate,
      meeting_type: meetingType,
      days_until_demo: Math.ceil((new Date(scheduledDate) - new Date()) / (1000 * 60 * 60 * 24)),
      timestamp: new Date().toISOString()
    });

    setPersonProperties({
      demo_scheduled_date: scheduledDate,
      demo_status: 'scheduled'
    });
  };

  const trackDemoCompleted = (email, outcome, notes) => {
    capture('demo_completed', {
      email,
      outcome, // 'interested', 'not_interested', 'needs_follow_up'
      notes,
      timestamp: new Date().toISOString()
    });

    setPersonProperties({
      demo_status: 'completed',
      demo_outcome: outcome
    });
  };

  return {
    trackDemoRequest,
    trackDemoScheduled,
    trackDemoCompleted
  };
}

// Track feature interest and product exploration
export function useFeatureTracking() {
  const { capture } = usePostHog();

  const trackFeatureInterest = (featureName, interactionType) => {
    capture('feature_interest', {
      feature_name: featureName,
      interaction_type: interactionType, // 'hover', 'click', 'expand', 'video_play'
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_section: document.querySelector(`[data-feature="${featureName}"]`)?.closest('section')?.id
    });
  };

  const trackUseCaseView = (useCase, viewDuration) => {
    capture('use_case_viewed', {
      use_case: useCase,
      view_duration_seconds: Math.floor(viewDuration / 1000),
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  };

  const trackPricingInteraction = (pricingTier, action) => {
    capture('pricing_interaction', {
      pricing_tier: pricingTier,
      action, // 'view', 'hover', 'click_learn_more', 'click_get_started'
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  };

  const trackDocumentationAccess = (docType, docTitle) => {
    capture('documentation_accessed', {
      doc_type: docType, // 'api', 'guide', 'tutorial', 'whitepaper'
      doc_title: docTitle,
      timestamp: new Date().toISOString(),
      referrer_page: document.referrer
    });
  };

  return {
    trackFeatureInterest,
    trackUseCaseView,
    trackPricingInteraction,
    trackDocumentationAccess
  };
}

// Track conversion funnel events
export function useConversionTracking() {
  const { capture, setPersonProperties } = usePostHog();

  const trackFunnelStep = (step, stepName, metadata = {}) => {
    capture('funnel_step', {
      step_number: step,
      step_name: stepName,
      ...metadata,
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  };

  const trackSignupStarted = (method) => {
    capture('signup_started', {
      signup_method: method, // 'email', 'google', 'github', 'sso'
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });

    trackFunnelStep(1, 'signup_started', { method });
  };

  const trackSignupCompleted = (userId, method, userInfo = {}) => {
    capture('signup_completed', {
      user_id: userId,
      signup_method: method,
      ...userInfo,
      timestamp: new Date().toISOString()
    });

    setPersonProperties({
      signup_date: new Date().toISOString(),
      signup_method: method,
      ...userInfo
    });

    trackFunnelStep(2, 'signup_completed', { user_id: userId });
  };

  const trackTrialStarted = (userId, trialPlan) => {
    capture('trial_started', {
      user_id: userId,
      trial_plan: trialPlan,
      trial_duration_days: 14,
      timestamp: new Date().toISOString()
    });

    setPersonProperties({
      trial_start_date: new Date().toISOString(),
      trial_plan: trialPlan,
      customer_status: 'trial'
    });

    trackFunnelStep(3, 'trial_started', { trial_plan: trialPlan });
  };

  const trackSubscriptionStarted = (userId, plan, billingPeriod, amount) => {
    capture('subscription_started', {
      user_id: userId,
      plan,
      billing_period: billingPeriod, // 'monthly', 'annual'
      amount,
      timestamp: new Date().toISOString()
    });

    setPersonProperties({
      subscription_plan: plan,
      billing_period: billingPeriod,
      customer_status: 'paid',
      subscription_start_date: new Date().toISOString()
    });

    trackFunnelStep(4, 'subscription_started', { plan, amount });
  };

  return {
    trackFunnelStep,
    trackSignupStarted,
    trackSignupCompleted,
    trackTrialStarted,
    trackSubscriptionStarted
  };
}

// Track content engagement
export function useContentTracking() {
  const { capture } = usePostHog();

  const trackBlogPostView = (postTitle, postCategory, author, readTime) => {
    capture('blog_post_viewed', {
      post_title: postTitle,
      post_category: postCategory,
      author,
      estimated_read_time_minutes: readTime,
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  };

  const trackResourceDownload = (resourceType, resourceTitle, fileFormat) => {
    capture('resource_downloaded', {
      resource_type: resourceType, // 'whitepaper', 'case_study', 'ebook', 'template'
      resource_title: resourceTitle,
      file_format: fileFormat,
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  };

  const trackWebinarRegistration = (webinarTitle, webinarDate, email) => {
    capture('webinar_registered', {
      webinar_title: webinarTitle,
      webinar_date: webinarDate,
      email,
      days_until_webinar: Math.ceil((new Date(webinarDate) - new Date()) / (1000 * 60 * 60 * 24)),
      timestamp: new Date().toISOString()
    });
  };

  const trackCaseStudyEngagement = (caseStudyTitle, company, engagement) => {
    capture('case_study_engagement', {
      case_study_title: caseStudyTitle,
      featured_company: company,
      engagement_type: engagement, // 'view', 'download', 'share'
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  };

  return {
    trackBlogPostView,
    trackResourceDownload,
    trackWebinarRegistration,
    trackCaseStudyEngagement
  };
}

// Track competitor comparison and evaluation
export function useCompetitorTracking() {
  const { capture } = usePostHog();

  const trackComparisonView = (competitors, comparisonType) => {
    capture('competitor_comparison_viewed', {
      competitors_compared: competitors,
      comparison_type: comparisonType, // 'features', 'pricing', 'full'
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  };

  const trackAlternativeSearch = (searchTerm, resultsCount) => {
    capture('alternative_search', {
      search_term: searchTerm,
      results_count: resultsCount,
      timestamp: new Date().toISOString()
    });
  };

  return {
    trackComparisonView,
    trackAlternativeSearch
  };
}