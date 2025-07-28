import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { Logo } from './LogoWatermark';
import { initializePostHog, posthogEvent, posthogSet } from '../utils/posthog';
import './HomePage.css';

const FloatingSphere = () => {
    const sphereRef = useRef();
    
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={sphereRef} args={[1, 32, 32]} position={[0, 0, 0]}>
                <MeshDistortMaterial
                    color="#5fed83"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.1}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

// Particle System Component
const ParticleField = () => {
    const [particles, setParticles] = useState([]);
    
    useEffect(() => {
        const newParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 2,
            duration: 3 + Math.random() * 2,
        }));
        setParticles(newParticles);
    }, []);
    
    return (
        <div className="particle-field">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="particle"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: [particle.x, particle.x + (Math.random() - 0.5) * 100],
                        y: [particle.y, particle.y + (Math.random() - 0.5) * 100],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

// Interactive Mouse Spotlight
const MouseSpotlight = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    
    return (
        <motion.div
            className="mouse-spotlight"
            animate={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(95, 237, 131, 0.1) 0%, transparent 50%)`,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 30 }}
        />
    );
};

// Morphing Text Component
const MorphingText = ({ texts, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 3000);
        
        return () => clearInterval(interval);
    }, [texts.length]);
    
    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={currentIndex}
                className={className}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {texts[currentIndex]}
            </motion.span>
        </AnimatePresence>
    );
};

const HomePage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const containerRef = useRef(null);
    
    // Smooth spring animations for mouse following
    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });
    
    // Transform mouse position to rotation
    const rotateX = useTransform(springY, [-0.5, 0.5], [7.5, -7.5]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-7.5, 7.5]);

    useEffect(() => {
        // Initialize PostHog when the homepage loads
        initializePostHog();

        // Track homepage view
        posthogEvent('homepage_view');
        posthogSet({ page_type: 'homepage' });
        posthogSet({ user_journey: 'homepage_landing' });

        // Track homepage engagement timing
        const startTime = Date.now();
        
        // Set loaded state for animations
        setIsLoaded(true);

        // Track how long users stay on homepage
        const trackEngagementTime = () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000);
            posthogEvent('homepage_engagement_time', { time_spent_seconds: timeSpent });
            posthogSet({ homepage_time_spent: timeSpent.toString() });
            console.log(`User spent ${timeSpent} seconds on homepage`);
        };

        // Track when user leaves or closes tab
        const handleBeforeUnload = () => {
            trackEngagementTime();
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        console.log('Homepage loaded with PostHog tracking');

        // Cleanup
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            trackEngagementTime();
        };
    }, []);
    
    // Mouse move handler for 3D effects
    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleEmailClick = () => {
        posthogEvent('email_contact_clicked');
        posthogSet({ user_action: 'email_contact' });
        posthogSet({ cta_clicked: 'get_early_access' });
        console.log('Email contact tracked');
    };

    const handleLogoClick = () => {
        try {
            posthogEvent('logo_clicked');
            posthogSet({ user_action: 'logo_interaction' });
            console.log('Logo interaction tracked');
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    };

    return (
        <>
            {/* Document Head Metadata - React 19 native support */}
            <title>Above - Coming Soon | Revolutionary Security Technology</title>
            <meta name="description" content="Above is building revolutionary security technology backed by tier 1 investors. Coming soon." />
            <meta name="keywords" content="Above, security, technology, tier 1 investors, coming soon, innovation" />
            <meta name="author" content="Above Security" />
            <meta name="robots" content="index, follow" />

            {/* Viewport and Mobile */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#00872b" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="Above" />

            {/* Favicons */}
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Open Graph / Social Media */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://abovesec.com/" />
            <meta property="og:title" content="Above - Coming Soon | Revolutionary Security Technology" />
            <meta property="og:description" content="Above is building revolutionary security technology backed by tier 1 investors. Coming soon." />
            <meta property="og:image" content="https://abovesec.com/og-image.png" />
            <meta property="og:site_name" content="Above" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content="https://abovesec.com/" />
            <meta name="twitter:title" content="Above - Coming Soon | Revolutionary Security Technology" />
            <meta name="twitter:description" content="Above is building revolutionary security technology backed by tier 1 investors. Coming soon." />
            <meta name="twitter:image" content="https://abovesec.com/og-image.png" />

            {/* Canonical URL */}
            <link rel="canonical" href="https://abovesec.com/" />

            <div className="homepage-container" data-testid="home-page" ref={containerRef} onMouseMove={handleMouseMove}>
                {/* 3D Hero Card with Mouse Tracking */}
                <motion.div 
                    className="hero-section"
                    style={{
                        rotateX: rotateX,
                        rotateY: rotateY,
                    }}
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="hero-content">
                        <header className="hero-header">
                            <motion.div 
                                className="company-logo" 
                                onClick={handleLogoClick}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                            >
                                <Logo />
                            </motion.div>
                            <motion.h1 
                                className="brand-title"
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                <span className="brand-name">Above</span>
                            </motion.h1>
                        </header>

                        <div className="hero-main">
                            <div className="hero-message">
                                <motion.h2 
                                    className="hero-headline"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                >
                                    <MorphingText 
                                        texts={[
                                            "Insider Protection.",
                                            "Runtime Visibility.",
                                            "Browser-Based Detection.",
                                            "Real-time Monitoring.",
                                        ]}
                                        className="morphing-line"
                                    />
                                    <br />
                                    <span className="hero-emphasis">Where It Actually Happens.</span>
                                </motion.h2>
                                
                                <motion.p 
                                    className="hero-description"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                >
                                    Revolutionary security technology backed by tier 1 investors. 
                                    We're building the future of insider threat protection 
                                    where organizations need it most.
                                </motion.p>
                            </div>

                            <motion.div 
                                className="hero-actions"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                            >
                                <motion.a
                                    href="mailto:aviv@abovesec.com"
                                    className="primary-cta"
                                    onClick={handleEmailClick}
                                    whileHover={{ 
                                        scale: 1.05,
                                        boxShadow: "0 20px 60px rgba(0, 135, 43, 0.4)",
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <motion.svg 
                                        className="cta-icon" 
                                        width="20" 
                                        height="20" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        whileHover={{ rotate: 15 }}
                                    >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </motion.svg>
                                    Get Early Access
                                </motion.a>
                                <motion.div 
                                    className="coming-soon-badge"
                                    animate={{ 
                                        scale: [1, 1.05, 1],
                                        boxShadow: [
                                            "0 4px 16px rgba(0, 0, 0, 0.05)",
                                            "0 8px 32px rgba(0, 135, 43, 0.15)",
                                            "0 4px 16px rgba(0, 0, 0, 0.05)"
                                        ]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <span className="badge-text">Coming Soon</span>
                                    <div className="badge-pulse"></div>
                                </motion.div>
                            </motion.div>
                        </div>

                        <footer className="hero-footer">
                            <motion.div 
                                className="social-proof"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.1, duration: 0.8 }}
                            >
                                <p className="proof-text">
                                    Backed by tier 1 investors • Built by world-class security experts
                                </p>
                            </motion.div>
                        </footer>
                    </div>
                </motion.div>

                {/* 3D Effects Canvas */}
                {isLoaded && (
                    <div className="canvas-container">
                        <Canvas
                            camera={{ position: [0, 0, 5], fov: 50 }}
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        >
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[10, 10, 5]} intensity={1} />
                            <React.Suspense fallback={null}>
                                <FloatingSphere />
                            </React.Suspense>
                            <OrbitControls enableZoom={false} />
                        </Canvas>
                    </div>
                )}

                {/* Particle and Mouse Effects */}
                <ParticleField />
                <MouseSpotlight />
            </div>
        </>
    );
};

export default HomePage;
