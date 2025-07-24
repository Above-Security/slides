import React, { useState, useEffect } from 'react';
import { posthogIdentify, posthogEvent, posthogSet } from '../utils/posthog';
import { validateEmail, getStoredEmail, storeEmail, generateUserId } from '../utils/emailGating';
import { Logo } from './LogoWatermark';
import './EmailGate.css';

const EmailGate = ({ children, onEmailSubmitted }) => {
    const [email, setEmail] = useState('');
    const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        // Check if user has already provided email
        const storedEmail = getStoredEmail();
        if (storedEmail) {
            setIsEmailSubmitted(true);
            setEmail(storedEmail);

            // Re-identify user in PostHog with stored email
            posthogIdentify(storedEmail, {
                email: storedEmail,
                email_domain: storedEmail.split('@')[1]
            });
            posthogEvent('email_gate_bypassed_stored');

            if (onEmailSubmitted) {
                onEmailSubmitted(storedEmail);
            }
        }
        setIsInitialLoad(false);
    }, [onEmailSubmitted]);

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // Validate email
            const validation = validateEmail(email);
            if (!validation.isValid) {
                setError(validation.error);
                setIsLoading(false);
                posthogEvent('email_validation_failed', { reason: validation.error });
                return;
            }

            // Store email locally
            storeEmail(email);

            const emailDomain = email.split('@')[1];

            // Identify user in PostHog
            posthogIdentify(email, {
                email: email,
                email_domain: emailDomain,
                email_submission_timestamp: new Date().toISOString(),
                is_business_email: validation.isBusinessEmail
            });

            // Track successful email submission
            posthogEvent('email_gate_submitted', {
                domain: emailDomain,
                isBusinessEmail: validation.isBusinessEmail
            });

            setIsEmailSubmitted(true);

            if (onEmailSubmitted) {
                onEmailSubmitted(email);
            }

        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
            posthogEvent('email_gate_error', { error: err.message });
            console.error('Email submission error:', err);
        }

        setIsLoading(false);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (error) setError(''); // Clear error on input change
    };

    // Show loading state on initial load
    if (isInitialLoad) {
        return (
            <div className="email-gate-container">
                <div className="email-gate-loading">
                    <div className="loading-spinner"></div>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    // If email already submitted, render the main content
    if (isEmailSubmitted) {
        return children;
    }

    // Render email collection form
    return (
        <div className="email-gate-container">
            <div className="email-gate-overlay">
                <div className="email-gate-content">
                    <div className="email-gate-header">
                        <div className="company-logo">
                            <Logo />
                        </div>
                        <h1 className="email-gate-title">Above Security</h1>
                        <h2 className="email-gate-subtitle">Runtime Insider Protection Presentation</h2>
                    </div>

                    <div className="email-gate-body">
                        <p className="email-gate-description">
                            Get exclusive access to our comprehensive Runtime Insider Protection presentation.
                            Enter your business email to view detailed insights on modern threat detection,
                            incident response, and Above Security's innovative approach to runtime protection.
                        </p>

                        <form onSubmit={handleEmailSubmit} className="email-gate-form">
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    Email Address
                                </label>
                                <div className="input-container">
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        className={`form-input ${error ? 'error' : ''}`}
                                        placeholder="you@company.com"
                                        required
                                        disabled={isLoading}
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    {isLoading && <div className="input-spinner"></div>}
                                </div>
                                {error && (
                                    <p className="error-message" role="alert">
                                        {error}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="submit-button"
                                disabled={isLoading || !email.trim()}
                            >
                                {isLoading ? (
                                    <>
                                        <div className="button-spinner"></div>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <svg className="button-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Access Presentation
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="email-gate-footer">
                            <p className="privacy-notice">
                                We respect your privacy and follow GitHub's data protection standards.
                                Your email will only be used for relevant business communications about Above Security.
                                <br />
                                <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="privacy-link">
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailGate;
