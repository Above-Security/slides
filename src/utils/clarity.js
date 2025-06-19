// Microsoft Clarity initialization utility using the npm package
import Clarity from '@microsoft/clarity';

export const initializeClarity = () => {
  // Initialize Microsoft Clarity with the project ID
  const clarityProjectId = 's1vq4848wx';
  
  try {
    Clarity.init(clarityProjectId);
    console.log('Microsoft Clarity initialized successfully with project ID:', clarityProjectId);
  } catch (error) {
    console.error('Failed to initialize Microsoft Clarity:', error);
  }
};

// Clarity API wrapper functions for custom events and tracking
export const clarityEvent = (eventName, data = {}) => {
  try {
    Clarity.event(eventName);
  } catch (error) {
    console.warn('Clarity event failed:', error);
  }
};

export const clarityIdentify = (customerId, customSessionId, customPageId, friendlyName) => {
  try {
    Clarity.identify(customerId, customSessionId, customPageId, friendlyName);
  } catch (error) {
    console.warn('Clarity identify failed:', error);
  }
};

export const claritySet = (key, value) => {
  try {
    Clarity.setTag(key, value);
  } catch (error) {
    console.warn('Clarity set failed:', error);
  }
};

// Additional utility functions
export const clarityConsent = (consent = true) => {
  try {
    Clarity.consent(consent);
    console.log('Microsoft Clarity consent granted');
  } catch (error) {
    console.warn('Clarity consent failed:', error);
  }
};

export const clarityUpgrade = (reason) => {
  try {
    Clarity.upgrade(reason);
    console.log('Microsoft Clarity session upgraded:', reason);
  } catch (error) {
    console.warn('Clarity upgrade failed:', error);
  }
};
