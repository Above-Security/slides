import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const DebugRouter = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [debugInfo, setDebugInfo] = useState({});

  useEffect(() => {
    const info = {
      // React Router information
      reactRouter: {
        pathname: location.pathname,
        search: location.search,
        hash: location.hash,
        state: location.state,
        params: params
      },
      // Browser information
      browser: {
        url: window.location.href,
        origin: window.location.origin,
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
        protocol: window.location.protocol,
        host: window.location.host
      },
      // Router type detection
      routerType: {
        hasHashInUrl: window.location.hash.length > 0,
        hashStartsWithSlash: window.location.hash.startsWith('#/'),
        isHashRouter: window.location.hash.includes('/')
      },
      // Timestamp
      timestamp: new Date().toISOString()
    };
    
    setDebugInfo(info);
    console.log('🐛 [DebugRouter] Complete debug info:', info);
  }, [location, params]);

  const testNavigation = (path) => {
    console.log(`🧪 [DebugRouter] Testing navigation to: ${path}`);
    navigate(path);
  };

  return (
    <div style={{
      padding: '20px',
      fontFamily: 'monospace',
      fontSize: '14px',
      backgroundColor: '#1a1a1a',
      color: '#00ff88',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#ffffff' }}>🐛 Router Debug Dashboard</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Navigation Tests</h2>
        <button onClick={() => testNavigation('/home')} style={{ margin: '5px', padding: '10px' }}>
          Go to /home
        </button>
        <button onClick={() => testNavigation('/slide/1')} style={{ margin: '5px', padding: '10px' }}>
          Go to /slide/1
        </button>
        <button onClick={() => testNavigation('/slide/5')} style={{ margin: '5px', padding: '10px' }}>
          Go to /slide/5
        </button>
        <button onClick={() => testNavigation('/')} style={{ margin: '5px', padding: '10px' }}>
          Go to /
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <h2>React Router State</h2>
          <pre style={{ backgroundColor: '#2a2a2a', padding: '10px', overflow: 'auto' }}>
            {JSON.stringify(debugInfo.reactRouter, null, 2)}
          </pre>
        </div>

        <div>
          <h2>Browser State</h2>
          <pre style={{ backgroundColor: '#2a2a2a', padding: '10px', overflow: 'auto' }}>
            {JSON.stringify(debugInfo.browser, null, 2)}
          </pre>
        </div>

        <div>
          <h2>Router Type Detection</h2>
          <pre style={{ backgroundColor: '#2a2a2a', padding: '10px', overflow: 'auto' }}>
            {JSON.stringify(debugInfo.routerType, null, 2)}
          </pre>
        </div>

        <div>
          <h2>URL Analysis</h2>
          <div style={{ backgroundColor: '#2a2a2a', padding: '10px' }}>
            <p><strong>Current URL:</strong> {debugInfo.browser?.url}</p>
            <p><strong>Expected Pattern (HashRouter):</strong> http://domain/#/route</p>
            <p><strong>Expected Pattern (BrowserRouter):</strong> http://domain/route</p>
            <p><strong>GitHub Pages Pattern:</strong> https://domain/slides/route → #/route</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h2>Router Architecture Analysis</h2>
        <div style={{ backgroundColor: '#2a2a2a', padding: '15px' }}>
          <h3>Current Setup:</h3>
          <ul>
            <li>✅ HashRouter configured in main.jsx</li>
            <li>✅ Routes defined in App.jsx</li>
            <li>✅ Custom domain: abovesec.com</li>
            <li>⚠️ GitHub Pages 404.html redirect needed</li>
          </ul>
          
          <h3>URL Flow Analysis:</h3>
          <ol>
            <li><strong>User visits:</strong> https://abovesec.com/slides/1</li>
            <li><strong>GitHub Pages:</strong> Serves 404.html (route doesn't exist as file)</li>
            <li><strong>404.html script:</strong> Redirects to https://abovesec.com/#/slides/1</li>
            <li><strong>HashRouter:</strong> Reads hash and routes to component</li>
            <li><strong>App.jsx Routes:</strong> Matches hash path to component</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DebugRouter;
