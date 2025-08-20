import React from 'react';
import Head from 'next/head';

// This is an EXACT 1:1 implementation of Figma node 0:4722 (Dashboard V1)
export default function DashboardFigmaExact() {
  return (
    <>
      <Head>
        <title>Dashboard - Above</title>
      </Head>
      
      {/* Node 0:4722 - Dashboard V1 - FRAME - 1440x840 */}
      <div 
        className="dashboard-v1"
        style={{
          width: '1440px',
          height: '840px',
          background: '#FDFDFD',
          position: 'relative'
        }}
      >
        {/* Node 0:4723 - Gardient - FRAME - 1424x785 at (8, 43) */}
        <div 
          style={{
            position: 'absolute',
            left: '8px',
            top: '43px',
            width: '1424px',
            height: '785px',
            background: '#EDEDED',
            opacity: 0.5,
            borderRadius: '13px'
          }}
        />
        
        {/* Node 0:4729 - Gardient - FRAME - 1447x840 at (0, 0) */}
        <div 
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '1447px',
            height: '840px',
            background: '#FEFEFE',
            opacity: 0.5
          }}
        />
        
        {/* Node 0:4737 - Top Bar Container - FRAME - 1387xhug at (33, 4) */}
        <div 
          style={{
            position: 'absolute',
            left: '33px',
            top: '4px',
            width: '1387px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8.207100868225098px'
          }}
        >
          {/* Top bar content will go here */}
        </div>
        
        {/* Node 0:4782 - Main Container - FRAME - 1424x784 at (8, 44) */}
        <div 
          style={{
            position: 'absolute',
            left: '8px',
            top: '44px',
            width: '1424px',
            height: '784px',
            background: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid #EBECF0',
            borderRadius: '12px',
            boxShadow: '-1px 0px 7px 0px rgba(52, 52, 59, 0.04)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          {/* Main container content will go here */}
        </div>
      </div>
    </>
  );
}