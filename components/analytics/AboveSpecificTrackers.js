import { usePostHog } from '../../hooks/usePostHog';
import { useEffect, useRef } from 'react';

// Track specific Above Security product interactions
export function useAboveProductTracking() {
  const { capture } = usePostHog();

  const trackTimelineInteraction = (timelineType, action, details = {}) => {
    capture('timeline_interaction', {
      timeline_type: timelineType, // 'organization', 'insider'
      action, // 'view', 'expand', 'scroll', 'hover'
      ...details,
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  };

  const trackNudgeViewed = (nudgeType, nudgeMessage, context) => {
    capture('nudge_viewed', {
      nudge_type: nudgeType, // 'role_change', 'cross_role_access', 'data_staging', 'oauth_consent', 'shadow_saas'
      nudge_message: nudgeMessage,
      context, // 'timeline', 'toast', 'modal'
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  };

  const trackSecurityFeatureInterest = (feature, interactionType) => {
    capture('security_feature_interest', {
      feature_name: feature, // 'hr_integration', 'crm_monitoring', 'oauth_tracking', 'shadow_it_detection'
      interaction_type: interactionType, // 'learn_more', 'demo_request', 'documentation_view'
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  };

  const trackUseCaseEngagement = (useCase, engagementLevel) => {
    capture('use_case_engagement', {
      use_case: useCase, // 'insider_threat', 'data_loss_prevention', 'compliance', 'zero_trust'
      engagement_level: engagementLevel, // 'initial_view', 'deep_dive', 'demo_interest'
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  };

  const trackDashboardInteraction = (dashboardSection, action) => {
    capture('dashboard_interaction', {
      dashboard_section: dashboardSection, // 'unified_view', 'risk_metrics', 'activity_feed', 'alerts'
      action, // 'view', 'filter', 'export', 'drill_down'
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  };

  const trackIntegrationInterest = (integration, action) => {
    capture('integration_interest', {
      integration_name: integration, // 'slack', 'salesforce', 'workday', 'okta', 'google_workspace'
      action, // 'view_details', 'request_demo', 'documentation', 'pricing_inquiry'
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  };

  const trackComplianceFeature = (complianceType, interaction) => {
    capture('compliance_feature_viewed', {
      compliance_type: complianceType, // 'gdpr', 'ccpa', 'sox', 'hipaa', 'iso27001'
      interaction, // 'requirements_view', 'implementation_guide', 'audit_trail'
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  };

  return {
    trackTimelineInteraction,
    trackNudgeViewed,
    trackSecurityFeatureInterest,
    trackUseCaseEngagement,
    trackDashboardInteraction,
    trackIntegrationInterest,
    trackComplianceFeature
  };
}

// Track ROI and value proposition interactions
export function useValueTracking() {
  const { capture } = usePostHog();

  const trackROICalculator = (inputs, calculatedSavings) => {
    capture('roi_calculator_used', {
      company_size: inputs.companySize,
      industry: inputs.industry,
      current_incidents_per_year: inputs.incidentsPerYear,
      average_incident_cost: inputs.averageIncidentCost,
      calculated_annual_savings: calculatedSavings,
      roi_percentage: (calculatedSavings / inputs.annualCost) * 100,
      timestamp: new Date().toISOString()
    });
  };

  const trackCostComparison = (competitorName, ourPrice, competitorPrice) => {
    capture('cost_comparison_viewed', {
      competitor: competitorName,
      our_price: ourPrice,
      competitor_price: competitorPrice,
      savings_percentage: ((competitorPrice - ourPrice) / competitorPrice) * 100,
      timestamp: new Date().toISOString()
    });
  };

  const trackValuePropEngagement = (valueProp, engagementType) => {
    capture('value_proposition_engagement', {
      value_prop: valueProp, // 'prevent_data_loss', 'reduce_incidents', 'compliance_automation', 'employee_protection'
      engagement_type: engagementType, // 'view', 'expand', 'case_study', 'testimonial'
      timestamp: new Date().toISOString()
    });
  };

  return {
    trackROICalculator,
    trackCostComparison,
    trackValuePropEngagement
  };
}

// Track visitor intent and qualification
export function useVisitorQualification() {
  const { capture, setPersonProperties } = usePostHog();
  const sessionStartTime = useRef(Date.now());
  const pagesViewed = useRef(new Set());

  useEffect(() => {
    // Track pages viewed in session
    const currentPage = window.location.pathname;
    pagesViewed.current.add(currentPage);
  }, []);

  const qualifyVisitor = () => {
    const sessionDuration = (Date.now() - sessionStartTime.current) / 1000;
    const pageCount = pagesViewed.current.size;
    
    let visitorScore = 0;
    let visitorIntent = 'browsing';
    
    // Score based on behavior
    if (pageCount >= 3) visitorScore += 20;
    if (sessionDuration >= 120) visitorScore += 20;
    if (pagesViewed.current.has('/pricing')) visitorScore += 30;
    if (pagesViewed.current.has('/demo')) visitorScore += 40;
    if (pagesViewed.current.has('/docs')) visitorScore += 15;
    
    // Determine intent
    if (visitorScore >= 70) {
      visitorIntent = 'high_intent';
    } else if (visitorScore >= 40) {
      visitorIntent = 'medium_intent';
    } else {
      visitorIntent = 'low_intent';
    }
    
    capture('visitor_qualified', {
      visitor_score: visitorScore,
      visitor_intent: visitorIntent,
      pages_viewed: Array.from(pagesViewed.current),
      page_count: pageCount,
      session_duration_seconds: Math.floor(sessionDuration),
      timestamp: new Date().toISOString()
    });
    
    setPersonProperties({
      visitor_score: visitorScore,
      visitor_intent: visitorIntent,
      last_qualification_date: new Date().toISOString()
    });
    
    return { score: visitorScore, intent: visitorIntent };
  };

  const trackBuyingSignal = (signalType, strength) => {
    capture('buying_signal_detected', {
      signal_type: signalType, // 'pricing_view', 'competitor_comparison', 'feature_deep_dive', 'contact_sales'
      signal_strength: strength, // 'weak', 'medium', 'strong'
      current_intent: qualifyVisitor().intent,
      timestamp: new Date().toISOString()
    });
  };

  return {
    qualifyVisitor,
    trackBuyingSignal
  };
}

// Track email gate and lead capture
export function useEmailGateTracking() {
  const { capture, identify } = usePostHog();

  const trackEmailGateView = (gateContext) => {
    capture('email_gate_viewed', {
      gate_context: gateContext, // 'initial_visit', 'content_access', 'demo_request'
      timestamp: new Date().toISOString(),
      page_url: window.location.href
    });
  };

  const trackEmailSubmission = (email, context, additionalData = {}) => {
    capture('email_submitted', {
      email_provided: !!email,
      submission_context: context,
      ...additionalData,
      timestamp: new Date().toISOString()
    });

    if (email) {
      identify(email, {
        email,
        email_submitted_at: new Date().toISOString(),
        submission_context: context,
        ...additionalData
      });
    }
  };

  const trackEmailValidation = (isValid, validationMethod) => {
    capture('email_validation', {
      is_valid: isValid,
      validation_method: validationMethod, // 'syntax', 'domain', 'full'
      timestamp: new Date().toISOString()
    });
  };

  const trackEmailGateBypass = (bypassMethod) => {
    capture('email_gate_bypassed', {
      bypass_method: bypassMethod, // 'close', 'navigation', 'timeout'
      timestamp: new Date().toISOString()
    });
  };

  return {
    trackEmailGateView,
    trackEmailSubmission,
    trackEmailValidation,
    trackEmailGateBypass
  };
}