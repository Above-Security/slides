import React, { useState, useMemo } from 'react';
import './InsiderThreatMatrix.css';

// Import the insider threat matrix data
import insiderThreatData from '../data/insider-threat-matrix.json';

const InsiderThreatMatrix = () => {
  const [currentView, setCurrentView] = useState('dashboard'); // dashboard, matrix, detail
  const [selectedThreat, setSelectedThreat] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Above Security capability mapping for each threat matrix ID
  const aboveCoverageMap = {
    // MOTIVE - Direct behavioral detection and intent analysis
    'MT022': { // Boundary Testing
      level: 'direct',
      explanation: 'Above detects boundary testing through behavioral pattern analysis, identifying when users gradually escalate policy violations or test security controls.',
      capabilities: ['Behavioral Baseline Deviation', 'Policy Violation Tracking', 'Escalation Pattern Detection']
    },
    'MT012': { // Coercion
      level: 'partial',
      explanation: 'Above can detect unusual behavioral changes that may indicate coercion, such as access patterns inconsistent with normal behavior.',
      capabilities: ['Behavioral Anomaly Detection', 'Session Pattern Analysis']
    },
    'MT021': { // Conflicts of Interest
      level: 'direct',
      explanation: 'Above identifies role misalignment and inappropriate access patterns that suggest conflicts of interest through cross-application behavior correlation.',
      capabilities: ['Role Misalignment Detection', 'Cross-App Correlation', 'Intent-Based Analysis']
    },
    'MT018': { // Curiosity
      level: 'direct',
      explanation: 'Above detects curiosity-driven exploration through navigation pattern analysis and access to areas outside normal role scope.',
      capabilities: ['Navigation Pattern Analysis', 'Role-Based Access Monitoring', 'Exploration Behavior Detection']
    },
    'MT017': { // Espionage
      level: 'direct',
      explanation: 'Above excels at detecting espionage through systematic data access patterns, competitive intelligence gathering, and cross-application correlation.',
      capabilities: ['Systematic Access Detection', 'Competitive Intelligence Patterns', 'Data Exfiltration Indicators']
    },
    'MT009': { // Fear of Reprisals
      level: 'partial',
      explanation: 'Above can detect defensive data collection and unusual backup behaviors that may indicate fear of reprisals.',
      capabilities: ['Defensive Data Collection', 'Backup Behavior Analysis']
    },
    'MT011': { // Hubris
      level: 'direct',
      explanation: 'Above detects hubris-motivated attacks through control circumvention attempts and privilege escalation patterns.',
      capabilities: ['Control Circumvention Detection', 'Privilege Testing Analysis', 'Security Challenge Behavior']
    },
    'MT016': { // Human Error
      level: 'partial',
      explanation: 'Above can differentiate between intentional and accidental actions through intent analysis and behavioral context.',
      capabilities: ['Intent Analysis', 'Accident vs. Intention Classification']
    },
    'MT020': { // Ideology
      level: 'direct',
      explanation: 'Above detects ideological motivations through systematic targeting of specific data types and mission-driven access patterns.',
      capabilities: ['Mission-Driven Pattern Detection', 'Systematic Targeting Analysis', 'Ideological Behavior Markers']
    },
    'MT001': { // Joiner
      level: 'partial',
      explanation: 'Above can detect new employee behavioral anomalies and unusually sophisticated knowledge for tenure.',
      capabilities: ['New Employee Baseline', 'Tenure-Inconsistent Behavior']
    },
    'MT008': { // Lack of Awareness
      level: 'direct',
      explanation: 'Above provides real-time user guidance and can distinguish between lack of awareness and intentional violations.',
      capabilities: ['Real-Time User Guidance', 'Awareness vs. Intent Classification', 'Educational Intervention']
    },
    'MT003': { // Leaver
      level: 'direct',
      explanation: 'Above detects departing employee data hoarding, increased access frequency, and backup behaviors before departure.',
      capabilities: ['Departure Behavioral Indicators', 'Data Hoarding Detection', 'Pre-Departure Activity Spikes']
    },
    'MT013': { // Misapprehension or Delusion
      level: 'partial',
      explanation: 'Above can detect delusional behavior patterns through reality-inconsistent access patterns and irrational data targeting.',
      capabilities: ['Reality-Inconsistent Patterns', 'Irrational Targeting Detection']
    },
    'MT002': { // Mover
      level: 'direct',
      explanation: 'Above tracks role transitions and detects inappropriate access to previous role data or premature access to new role areas.',
      capabilities: ['Role Transition Monitoring', 'Previous Role Access Detection', 'Premature Access Alerts']
    },
    'MT005': { // Personal Gain
      level: 'direct',
      explanation: 'Above identifies personal gain motivations through competitive intelligence gathering and valuable data targeting patterns.',
      capabilities: ['Competitive Intelligence Detection', 'Valuable Data Targeting', 'Personal Benefit Analysis']
    },
    'MT004': { // Political or Philosophical Beliefs
      level: 'direct',
      explanation: 'Above detects politically motivated data access through targeted information gathering and belief-driven behavior patterns.',
      capabilities: ['Political Targeting Detection', 'Belief-Driven Patterns', 'Activist Behavior Analysis']
    },
    'MT015': { // Recklessness
      level: 'direct',
      explanation: 'Above identifies reckless behavior through careless data handling, security control disregard, and risk-taking patterns.',
      capabilities: ['Reckless Behavior Indicators', 'Security Disregard Patterns', 'Risk-Taking Analysis']
    },
    'MT007': { // Resentment
      level: 'direct',
      explanation: 'Above detects resentment through vindictive access patterns, destructive behaviors, and revenge-motivated data targeting.',
      capabilities: ['Vindictive Pattern Detection', 'Revenge Motivation Analysis', 'Destructive Behavior Indicators']
    },
    'MT019': { // Rogue Nationalism
      level: 'direct',
      explanation: 'Above identifies rogue nationalist behavior through nation-state benefiting data access and patriotic motivation indicators.',
      capabilities: ['Nation-State Benefit Analysis', 'Patriotic Motivation Detection', 'Rogue Activity Patterns']
    },
    'MT010': { // Self Sabotage
      level: 'direct',
      explanation: 'Above detects self-sabotage through deliberately suspicious behaviors and patterns designed to trigger detection.',
      capabilities: ['Deliberate Suspicion Patterns', 'Self-Incrimination Detection', 'Attention-Seeking Behaviors']
    },
    'MT006': { // Third Party Collusion Motivated by Personal Gain
      level: 'direct',
      explanation: 'Above identifies third-party collusion through external coordination patterns and financially motivated data targeting.',
      capabilities: ['External Coordination Detection', 'Financial Motivation Analysis', 'Collusion Pattern Recognition']
    },

    // MEANS - Focus on runtime detection of access mechanisms
    'ME026': { // Ability to Modify Cloud Resources
      level: 'partial',
      explanation: 'Above can detect unusual cloud resource modifications through browser-based administrative interface monitoring.',
      capabilities: ['Admin Interface Monitoring', 'Cloud Configuration Changes']
    },
    'ME024': { // Access
      level: 'direct',
      explanation: 'Above provides comprehensive session-level access monitoring, tracking exactly what users access and how they interact with it.',
      capabilities: ['Session-Level Access Tracking', 'Interaction Monitoring', 'Access Pattern Analysis']
    },
    'ME018': { // Aiding and Abetting
      level: 'direct',
      explanation: 'Above detects collaborative suspicious activities and coordination between multiple users through cross-user behavior correlation.',
      capabilities: ['Cross-User Correlation', 'Collaborative Activity Detection', 'Coordination Pattern Analysis']
    },
    'ME001': { // Asset Control
      level: 'partial',
      explanation: 'Above can monitor asset access through browser-based asset management systems and detect unusual asset-related activities.',
      capabilities: ['Asset Management System Monitoring', 'Asset Access Tracking']
    },
    'ME004': { // Bluetooth
      level: 'none',
      explanation: 'Bluetooth file transfers are outside Above\'s browser-based scope.',
      capabilities: []
    },
    'ME022': { // Bring Your Own Device (BYOD)
      level: 'partial',
      explanation: 'Above can detect BYOD usage through browser fingerprinting and device behavior analysis.',
      capabilities: ['Device Fingerprinting', 'BYOD Behavior Analysis', 'Unmanaged Device Detection']
    },
    'ME012': { // Clipboard
      level: 'direct',
      explanation: 'Above monitors clipboard usage for sensitive data copying and tracks copy-paste patterns that indicate data exfiltration.',
      capabilities: ['Clipboard Monitoring', 'Copy-Paste Pattern Analysis', 'Sensitive Data Copying Detection']
    },
    'ME009': { // FTP Servers
      level: 'partial',
      explanation: 'Above can detect browser-based FTP access and unusual file transfer activities through web interfaces.',
      capabilities: ['Web-Based FTP Monitoring', 'File Transfer Detection']
    },
    'ME003': { // Installed Software
      level: 'none',
      explanation: 'Local software installation is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'ME013': { // Media Capture
      level: 'direct',
      explanation: 'Above detects screen capture, recording activities, and other media capture attempts through browser behavior monitoring.',
      capabilities: ['Screen Capture Detection', 'Recording Activity Monitoring', 'Media Capture Prevention']
    },
    'ME008': { // Network Attached Storage
      level: 'partial',
      explanation: 'Above can monitor access to network storage through browser-based interfaces and detect unusual storage access patterns.',
      capabilities: ['Network Storage Access Monitoring', 'Storage Interface Tracking']
    },
    'ME017': { // Physical Disk Access
      level: 'none',
      explanation: 'Physical disk access is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'ME025': { // Placement
      level: 'direct',
      explanation: 'Above can detect when users place themselves in positions to access sensitive information through role-seeking behaviors.',
      capabilities: ['Position-Seeking Detection', 'Strategic Placement Analysis', 'Access Position Monitoring']
    },
    'ME014': { // Printing
      level: 'direct',
      explanation: 'Above detects printing activities through browser-based print commands and monitors suspicious printing patterns.',
      capabilities: ['Print Command Monitoring', 'Printing Pattern Analysis', 'Suspicious Print Detection']
    },
    'ME007': { // Privileged Access
      level: 'direct',
      explanation: 'Above monitors privileged access usage, privilege escalation attempts, and inappropriate privilege utilization.',
      capabilities: ['Privilege Usage Monitoring', 'Escalation Detection', 'Privilege Abuse Prevention']
    },
    'ME005': { // Removable Media
      level: 'none',
      explanation: 'Physical removable media usage is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'ME011': { // Screenshots
      level: 'direct',
      explanation: 'Above detects screenshot attempts and other screen capture activities that may indicate data exfiltration.',
      capabilities: ['Screenshot Detection', 'Screen Capture Prevention', 'Visual Data Exfiltration Monitoring']
    },
    'ME023': { // Sensitivity Label Leakage
      level: 'direct',
      explanation: 'Above monitors data classification labels and detects when sensitive data is accessed or handled inappropriately.',
      capabilities: ['Sensitivity Label Monitoring', 'Classification Violation Detection', 'Data Handling Analysis']
    },
    'ME015': { // SMB File Sharing
      level: 'partial',
      explanation: 'Above can detect browser-based file sharing activities and monitor unusual sharing patterns.',
      capabilities: ['File Sharing Monitoring', 'Sharing Pattern Analysis']
    },
    'ME010': { // SSH Servers
      level: 'partial',
      explanation: 'Above can monitor browser-based SSH clients and detect unusual remote access patterns.',
      capabilities: ['Browser SSH Monitoring', 'Remote Access Pattern Detection']
    },
    'ME016': { // System Startup Firmware Access
      level: 'none',
      explanation: 'Firmware-level access is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'ME002': { // Unrestricted Software Installation
      level: 'none',
      explanation: 'Local software installation monitoring is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'ME021': { // Unrevoked Access
      level: 'direct',
      explanation: 'Above detects when former employees or role-changed users continue accessing systems they should no longer have access to.',
      capabilities: ['Stale Access Detection', 'Role Change Monitoring', 'Access Revocation Verification']
    },
    'ME006': { // Web Access
      level: 'direct',
      explanation: 'Above excels at web access monitoring, tracking all browser-based activities and detecting suspicious web usage.',
      capabilities: ['Comprehensive Web Monitoring', 'Browser Activity Tracking', 'Web Usage Analysis']
    },

    // PREPARATION - Detecting preparatory activities through behavioral analysis
    'PR017': { // Archive Data
      level: 'direct',
      explanation: 'Above detects unusual data archiving activities and bulk data organization that may indicate preparation for exfiltration.',
      capabilities: ['Archive Activity Monitoring', 'Bulk Organization Detection', 'Data Preparation Analysis']
    },
    'PR011': { // Boot Order Manipulation
      level: 'none',
      explanation: 'System-level boot manipulation is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'PR007': { // CCTV Enumeration
      level: 'partial',
      explanation: 'Above can detect browser-based CCTV system access and monitoring system enumeration.',
      capabilities: ['CCTV System Access Monitoring', 'Security System Enumeration']
    },
    'PR018': { // Circumventing Security Controls
      level: 'direct',
      explanation: 'Above detects attempts to circumvent browser-based security controls and identifies control bypass patterns.',
      capabilities: ['Control Bypass Detection', 'Security Circumvention Analysis', 'Control Testing Monitoring']
    },
    'PR020': { // Data Obfuscation
      level: 'direct',
      explanation: 'Above detects data obfuscation attempts, encoding activities, and other efforts to hide data preparation.',
      capabilities: ['Obfuscation Detection', 'Encoding Activity Monitoring', 'Data Hiding Analysis']
    },
    'PR016': { // Data Staging
      level: 'direct',
      explanation: 'Above excels at detecting data staging activities, identifying when users collect and organize data for exfiltration.',
      capabilities: ['Data Collection Monitoring', 'Staging Area Detection', 'Bulk Data Organization']
    },
    'PR002': { // Device Mounting
      level: 'none',
      explanation: 'Physical device mounting is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'PR015': { // Email Collection
      level: 'direct',
      explanation: 'Above detects unusual email collection patterns, bulk email downloads, and suspicious email organization.',
      capabilities: ['Email Collection Detection', 'Bulk Download Monitoring', 'Email Pattern Analysis']
    },
    'PR014': { // External Media Formatting
      level: 'none',
      explanation: 'Physical media formatting is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'PR025': { // File Download
      level: 'direct',
      explanation: 'Above monitors file download activities, detects bulk downloads, and identifies suspicious download patterns.',
      capabilities: ['Download Monitoring', 'Bulk Download Detection', 'Download Pattern Analysis']
    },
    'PR004': { // File Exploration
      level: 'direct',
      explanation: 'Above tracks file system exploration, directory browsing patterns, and identifies reconnaissance activities.',
      capabilities: ['File Exploration Tracking', 'Directory Browsing Monitoring', 'Reconnaissance Detection']
    },
    'PR027': { // Impersonation
      level: 'direct',
      explanation: 'Above detects impersonation attempts through behavioral mismatches and identity verification analysis.',
      capabilities: ['Behavioral Mismatch Detection', 'Identity Verification', 'Impersonation Analysis']
    },
    'PR024': { // Increase Privileges
      level: 'direct',
      explanation: 'Above monitors privilege escalation attempts and detects unusual privilege-seeking behaviors.',
      capabilities: ['Privilege Escalation Monitoring', 'Privilege Request Analysis', 'Access Expansion Detection']
    },
    'PR005': { // IT Ticketing System Exploration
      level: 'direct',
      explanation: 'Above monitors IT system exploration, detects reconnaissance of support systems, and identifies system probing.',
      capabilities: ['IT System Exploration', 'Support System Monitoring', 'System Reconnaissance Detection']
    },
    'PR021': { // Network Scanning
      level: 'partial',
      explanation: 'Above can detect browser-based network scanning tools and unusual network discovery activities.',
      capabilities: ['Browser Network Tools', 'Network Discovery Monitoring']
    },
    'PR012': { // Physical Disk Removal
      level: 'none',
      explanation: 'Physical disk removal is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'PR009': { // Physical Exploration
      level: 'none',
      explanation: 'Physical exploration activities are outside Above\'s browser-based scope.',
      capabilities: []
    },
    'PR008': { // Physical Item Smuggling
      level: 'none',
      explanation: 'Physical smuggling activities are outside Above\'s browser-based scope.',
      capabilities: []
    },
    'PR019': { // Private / Incognito Browsing
      level: 'direct',
      explanation: 'Above detects private browsing usage and monitors incognito session activities for suspicious behavior.',
      capabilities: ['Private Browsing Detection', 'Incognito Session Monitoring', 'Privacy Mode Analysis']
    },
    'PR001': { // Read Windows Registry
      level: 'none',
      explanation: 'Direct registry access is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'PR026': { // Remote Desktop (RDP)
      level: 'partial',
      explanation: 'Above can detect browser-based RDP clients and monitor remote access patterns.',
      capabilities: ['Browser RDP Monitoring', 'Remote Access Detection']
    },
    'PR006': { // Security Software Enumeration
      level: 'partial',
      explanation: 'Above can detect attempts to enumerate browser-based security tools and identify security probing.',
      capabilities: ['Security Tool Enumeration', 'Security Probing Detection']
    },
    'PR022': { // Social Engineering (Outbound)
      level: 'direct',
      explanation: 'Above detects outbound social engineering attempts through communication pattern analysis and suspicious outreach.',
      capabilities: ['Communication Pattern Analysis', 'Suspicious Outreach Detection', 'Social Engineering Monitoring']
    },
    'PR003': { // Software Installation
      level: 'partial',
      explanation: 'Above can detect browser extension installations and web-based software deployment.',
      capabilities: ['Browser Extension Monitoring', 'Web Software Detection']
    },
    'PR010': { // Software or Access Request
      level: 'direct',
      explanation: 'Above monitors software and access requests, detecting unusual request patterns and privilege-seeking behaviors.',
      capabilities: ['Request Pattern Monitoring', 'Access Request Analysis', 'Privilege Seeking Detection']
    },
    'PR023': { // Suspicious Web Browsing
      level: 'direct',
      explanation: 'Above excels at detecting suspicious web browsing, monitoring unusual sites, and identifying malicious web activities.',
      capabilities: ['Web Browsing Monitoring', 'Suspicious Site Detection', 'Malicious Web Activity Analysis']
    },
    'PR013': { // Testing Ability to Print
      level: 'direct',
      explanation: 'Above detects print testing activities and monitors unusual printing preparation behaviors.',
      capabilities: ['Print Testing Detection', 'Printing Preparation Monitoring', 'Print Capability Analysis']
    },

    // INFRINGEMENT - Core detection of actual harmful actions
    'IF022': { // Data Loss
      level: 'direct',
      explanation: 'Above detects data loss events through comprehensive data interaction monitoring and loss pattern analysis.',
      capabilities: ['Data Loss Detection', 'Loss Pattern Analysis', 'Data Interaction Monitoring']
    },
    'IF013': { // Disruption of Business Operations
      level: 'direct',
      explanation: 'Above identifies disruptive behaviors through operational impact analysis and business process interference detection.',
      capabilities: ['Operational Impact Analysis', 'Business Process Monitoring', 'Disruption Detection']
    },
    'IF017': { // Excessive Personal Use
      level: 'direct',
      explanation: 'Above monitors personal use patterns and detects when personal activities exceed policy thresholds.',
      capabilities: ['Personal Use Monitoring', 'Policy Threshold Analysis', 'Usage Pattern Detection']
    },
    'IF010': { // Exfiltration via Email
      level: 'direct',
      explanation: 'Above detects email-based exfiltration through email composition monitoring and attachment analysis.',
      capabilities: ['Email Exfiltration Detection', 'Attachment Monitoring', 'Email Pattern Analysis']
    },
    'IF003': { // Exfiltration via Media Capture
      level: 'direct',
      explanation: 'Above detects media capture exfiltration through screen recording and screenshot monitoring.',
      capabilities: ['Media Capture Detection', 'Screen Recording Monitoring', 'Visual Exfiltration Analysis']
    },
    'IF005': { // Exfiltration via Messaging Applications
      level: 'direct',
      explanation: 'Above monitors messaging applications for data exfiltration through chat and file sharing analysis.',
      capabilities: ['Messaging App Monitoring', 'Chat Analysis', 'Message-Based Exfiltration Detection']
    },
    'IF004': { // Exfiltration via Other Network Medium
      level: 'partial',
      explanation: 'Above can detect browser-based network exfiltration methods through web upload monitoring.',
      capabilities: ['Web Upload Monitoring', 'Network Exfiltration Detection']
    },
    'IF002': { // Exfiltration via Physical Medium
      level: 'none',
      explanation: 'Physical medium exfiltration is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'IF001': { // Exfiltration via Web Service
      level: 'direct',
      explanation: 'Above excels at detecting web service exfiltration through upload monitoring and cloud service analysis.',
      capabilities: ['Web Service Exfiltration Detection', 'Upload Monitoring', 'Cloud Service Analysis']
    },
    'IF021': { // Harassment and Discrimination
      level: 'direct',
      explanation: 'Above detects harassment through communication pattern analysis and discriminatory behavior monitoring.',
      capabilities: ['Communication Analysis', 'Harassment Detection', 'Discriminatory Behavior Monitoring']
    },
    'IF008': { // Inappropriate Web Browsing
      level: 'direct',
      explanation: 'Above monitors web browsing activities and detects inappropriate content access and policy violations.',
      capabilities: ['Web Browsing Monitoring', 'Content Analysis', 'Policy Violation Detection']
    },
    'IF009': { // Installing Unapproved Software
      level: 'partial',
      explanation: 'Above can detect browser extension installations and web-based software deployment.',
      capabilities: ['Browser Extension Monitoring', 'Web Software Detection']
    },
    'IF016': { // Misappropriation of Funds
      level: 'direct',
      explanation: 'Above detects financial misappropriation through financial system monitoring and transaction analysis.',
      capabilities: ['Financial System Monitoring', 'Transaction Analysis', 'Financial Misuse Detection']
    },
    'IF019': { // Non-Corporate Device
      level: 'partial',
      explanation: 'Above detects non-corporate device usage through device fingerprinting and access pattern analysis.',
      capabilities: ['Device Fingerprinting', 'Non-Corporate Device Detection', 'Access Pattern Analysis']
    },
    'IF011': { // Providing Access to a Unauthorized Third Party
      level: 'direct',
      explanation: 'Above detects unauthorized access sharing through session sharing analysis and third-party access patterns.',
      capabilities: ['Session Sharing Detection', 'Third-Party Access Analysis', 'Unauthorized Sharing Monitoring']
    },
    'IF012': { // Public Statements Resulting in Brand Damage
      level: 'partial',
      explanation: 'Above can detect preparation of public statements through content creation monitoring and social media activity.',
      capabilities: ['Content Creation Monitoring', 'Social Media Activity Detection']
    },
    'IF023': { // Regulatory Non-Compliance
      level: 'direct',
      explanation: 'Above detects regulatory violations through compliance monitoring and policy adherence analysis.',
      capabilities: ['Compliance Monitoring', 'Regulatory Violation Detection', 'Policy Adherence Analysis']
    },
    'IF018': { // Sharing on AI Chatbot Platforms
      level: 'direct',
      explanation: 'Above monitors AI chatbot interactions and detects sensitive data sharing with AI platforms.',
      capabilities: ['AI Platform Monitoring', 'Chatbot Interaction Analysis', 'AI Data Sharing Detection']
    },
    'IF015': { // Theft
      level: 'direct',
      explanation: 'Above detects theft through data access pattern analysis and unauthorized acquisition monitoring.',
      capabilities: ['Theft Pattern Detection', 'Unauthorized Acquisition Monitoring', 'Asset Access Analysis']
    },
    'IF014': { // Unauthorized Changes to IT Systems
      level: 'partial',
      explanation: 'Above can detect browser-based system changes and unauthorized configuration modifications.',
      capabilities: ['Browser-Based Change Monitoring', 'Configuration Change Detection']
    },
    'IF006': { // Unauthorized Printing of Documents
      level: 'direct',
      explanation: 'Above monitors printing activities and detects unauthorized document printing through print command analysis.',
      capabilities: ['Print Monitoring', 'Unauthorized Printing Detection', 'Document Print Analysis']
    },
    'IF020': { // Unauthorized VPN Client
      level: 'partial',
      explanation: 'Above can detect browser-based VPN usage and unusual network routing patterns.',
      capabilities: ['Browser VPN Detection', 'Network Routing Analysis']
    },
    'IF007': { // Unlawfully Accessing Copyrighted Material
      level: 'direct',
      explanation: 'Above detects unauthorized access to copyrighted content through content analysis and access monitoring.',
      capabilities: ['Copyright Violation Detection', 'Content Access Monitoring', 'Unauthorized Content Analysis']
    },

    // ANTI-FORENSICS - Limited coverage due to browser scope
    'AF004': { // Clear Browser Artifacts
      level: 'direct',
      explanation: 'Above can detect browser artifact clearing and privacy tool usage that may indicate anti-forensics activity.',
      capabilities: ['Browser Artifact Monitoring', 'Privacy Tool Detection', 'Clearing Activity Analysis']
    },
    'AF001': { // Clear Command History
      level: 'none',
      explanation: 'Command history clearing is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'AF002': { // Clear Operating System Logs
      level: 'none',
      explanation: 'OS log clearing is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'AF019': { // Decrease Privileges
      level: 'direct',
      explanation: 'Above detects privilege reduction activities that may be used to avoid detection after malicious activities.',
      capabilities: ['Privilege Reduction Monitoring', 'Post-Activity Cleanup Detection']
    },
    'AF013': { // Delete User Account
      level: 'partial',
      explanation: 'Above can detect browser-based account deletion attempts and user management activities.',
      capabilities: ['Account Deletion Detection', 'User Management Monitoring']
    },
    'AF020': { // Deletion of Volume Shadow Copy
      level: 'none',
      explanation: 'System-level shadow copy deletion is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'AF006': { // Disk Wiping
      level: 'none',
      explanation: 'Physical disk wiping is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'AF015': { // File Deletion
      level: 'partial',
      explanation: 'Above can detect browser-based file deletion activities and cloud storage deletions.',
      capabilities: ['Browser File Deletion', 'Cloud Storage Deletion Monitoring']
    },
    'AF005': { // File Encryption
      level: 'partial',
      explanation: 'Above can detect browser-based encryption activities and file obfuscation attempts.',
      capabilities: ['Browser Encryption Detection', 'File Obfuscation Monitoring']
    },
    'AF012': { // Hide Artifacts
      level: 'partial',
      explanation: 'Above can detect attempts to hide browser-based artifacts and evidence concealment activities.',
      capabilities: ['Artifact Hiding Detection', 'Evidence Concealment Monitoring']
    },
    'AF009': { // Log Tampering
      level: 'none',
      explanation: 'System log tampering is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'AF007': { // Modify Windows Registry
      level: 'none',
      explanation: 'Registry modification is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'AF011': { // Physical Destruction of Storage Media
      level: 'none',
      explanation: 'Physical destruction is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'AF010': { // Physical Removal of Disk Storage
      level: 'none',
      explanation: 'Physical removal is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'AF008': { // Steganography
      level: 'partial',
      explanation: 'Above can detect browser-based steganography tools and suspicious image/file manipulation.',
      capabilities: ['Steganography Tool Detection', 'File Manipulation Monitoring']
    },
    'AF014': { // System Shutdown
      level: 'none',
      explanation: 'System shutdown is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'AF003': { // Timestomping
      level: 'none',
      explanation: 'File timestamp manipulation is outside Above\'s browser-based scope.',
      capabilities: []
    },
    'AF018': { // Tripwires
      level: 'partial',
      explanation: 'Above can detect browser-based tripwire creation and monitoring activities.',
      capabilities: ['Browser Tripwire Detection', 'Monitoring Tool Analysis']
    },
    'AF016': { // Uninstalling Software
      level: 'partial',
      explanation: 'Above can detect browser extension removal and web-based software uninstallation.',
      capabilities: ['Browser Extension Removal', 'Web Software Uninstallation']
    },
    'AF022': { // Virtualization
      level: 'partial',
      explanation: 'Above can detect browser-based virtualization tools and virtual environment usage.',
      capabilities: ['Browser Virtualization Detection', 'Virtual Environment Monitoring']
    },
    'AF021': { // Windows System Time Modification
      level: 'none',
      explanation: 'System time modification is outside Above\'s browser-based scope.',
      capabilities: []
    }
  };

  // Calculate comprehensive statistics
  const stats = useMemo(() => {
    const allThreats = [];
    const categoryStats = {};

    insiderThreatData.articles.forEach(article => {
      const categoryThreats = [];

      article.sections.forEach(section => {
        const coverage = aboveCoverageMap[section.id] || {
          level: 'none',
          explanation: 'Not currently covered by Above Security.',
          capabilities: [],
          scenario: 'Outside browser-based detection scope.'
        };

        const threat = {
          category: article.title,
          id: section.id,
          title: section.title,
          description: section.description,
          coverage: coverage
        };

        allThreats.push(threat);
        categoryThreats.push(threat);
      });

      const categoryDirect = categoryThreats.filter(t => t.coverage.level === 'direct').length;
      const categoryPartial = categoryThreats.filter(t => t.coverage.level === 'partial').length;
      const categoryTotal = categoryThreats.length;
      const categoryPercentage = Math.round(((categoryDirect + categoryPartial * 0.5) / categoryTotal) * 100);

      categoryStats[article.title] = {
        total: categoryTotal,
        direct: categoryDirect,
        partial: categoryPartial,
        none: categoryTotal - categoryDirect - categoryPartial,
        percentage: categoryPercentage,
        threats: categoryThreats
      };
    });

    const coverageCounts = {
      direct: allThreats.filter(t => t.coverage.level === 'direct').length,
      partial: allThreats.filter(t => t.coverage.level === 'partial').length,
      none: allThreats.filter(t => t.coverage.level === 'none').length
    };

    const totalThreats = allThreats.length;
    const coveragePercentage = Math.round(((coverageCounts.direct + coverageCounts.partial * 0.5) / totalThreats) * 100);

    return {
      allThreats,
      coverageCounts,
      totalThreats,
      coveragePercentage,
      categoryStats
    };
  }, []);

  // Get filtered threats for matrix view
  const filteredThreats = useMemo(() => {
    if (selectedCategory === 'all') {
      return stats.allThreats;
    }
    return stats.categoryStats[selectedCategory]?.threats || [];
  }, [stats, selectedCategory]);

  // Search filtered threats
  const searchFilteredThreats = useMemo(() => {
    if (!searchTerm) return filteredThreats;

    return filteredThreats.filter(threat =>
      threat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      threat.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [filteredThreats, searchTerm]);

  const getCoverageIcon = (level) => {
    switch (level) {
      case 'direct': return <i className="fas fa-bullseye" aria-label="Direct coverage"></i>;
      case 'partial': return <i className="fas fa-search" aria-label="Partial coverage"></i>;
      default: return <i className="fas fa-times" aria-label="No coverage"></i>;
    }
  };

  const getCoverageClass = (level) => {
    switch (level) {
      case 'direct': return 'coverage-direct';
      case 'partial': return 'coverage-partial';
      default: return 'coverage-none';
    }
  };

  // Dashboard View - High-level insights
  const renderDashboard = () => (
    <div className="dashboard-container">
      <div className="dashboard-hero">
        <div className="hero-stats">
          <div className="primary-metric">
            <div className="metric-value">{stats.coveragePercentage}%</div>
            <div className="metric-label">Insider Threat Coverage</div>
            <div className="metric-subtitle">Industry-leading runtime detection</div>
          </div>

          <div className="secondary-metrics">
            <div className="metric-card">
              <div className="metric-icon"><i className="fas fa-bullseye"></i></div>
              <div className="metric-number">{stats.coverageCounts.direct}</div>
              <div className="metric-text">Direct Coverage</div>
            </div>
            <div className="metric-card">
              <div className="metric-icon"><i className="fas fa-search"></i></div>
              <div className="metric-number">{stats.coverageCounts.partial}</div>
              <div className="metric-text">Partial Coverage</div>
            </div>
            <div className="metric-card">
              <div className="metric-icon"><i className="fas fa-bolt"></i></div>
              <div className="metric-number">&lt;24h</div>
              <div className="metric-text">Deployment</div>
            </div>
          </div>
        </div>
      </div>

      <div className="category-heatmap">
        <h2>Coverage by Threat Category</h2>
        <div className="heatmap-grid">
          {Object.entries(stats.categoryStats).map(([category, data]) => (
            <div
              key={category}
              className="heatmap-category"
              onClick={() => {
                setSelectedCategory(category);
                setCurrentView('matrix');
              }}
            >
              <div className="category-header">
                <div className="category-name">{category}</div>
                <div className="category-score">{data.percentage}%</div>
              </div>

              <div className="coverage-bar">
                <div
                  className="bar-fill direct"
                  style={{ width: `${(data.direct / data.total) * 100}%` }}
                />
                <div
                  className="bar-fill partial"
                  style={{ width: `${(data.partial / data.total) * 100}%` }}
                />
              </div>

              <div className="category-stats">
                <span className="stat-direct">{data.direct}</span>
                <span className="stat-partial">{data.partial}</span>
                <span className="stat-total">/ {data.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="value-proposition">
        <h2>Why Above Leads in Runtime Threat Detection</h2>
        <div className="value-grid">
          <div className="value-card">
            <div className="value-icon"><i className="fas fa-bullseye"></i></div>
            <h3>Runtime Visibility</h3>
            <p>First platform to monitor user behavior inside applications in real-time</p>
            <div className="value-metric">100% session coverage</div>
          </div>

          <div className="value-card">
            <div className="value-icon"><i className="fas fa-brain"></i></div>
            <h3>AI-Powered Intent</h3>
            <p>LLM-based semantic understanding of user actions and motivations</p>
            <div className="value-metric">90% accuracy</div>
          </div>

          <div className="value-card">
            <div className="value-icon"><i className="fas fa-bolt"></i></div>
            <h3>Instant Deployment</h3>
            <p>Browser-native deployment without infrastructure changes</p>
            <div className="value-metric">&lt;24 hour rollout</div>
          </div>
        </div>

        <div className="cta-section">
          <button
            className="cta-button"
            onClick={() => setCurrentView('matrix')}
          >
            Explore Full Matrix →
          </button>
        </div>
      </div>
    </div>
  );

  // Matrix View - Interactive grid
  const renderMatrix = () => (
    <div className="matrix-container">
      <div className="matrix-header">
        <div className="matrix-title">
          <h2>
            {selectedCategory === 'all' ? 'Complete Threat Matrix' : `${selectedCategory} Threats`}
          </h2>
          <p>
            {selectedCategory === 'all'
              ? `All ${stats.totalThreats} insider threat vectors`
              : `${stats.categoryStats[selectedCategory]?.total || 0} threats in this category`
            }
          </p>
        </div>

        <div className="matrix-controls">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-selector"
          >
            <option value="all">All Categories</option>
            {Object.entries(stats.categoryStats).map(([category, data]) => (
              <option key={category} value={category}>
                {category} ({data.total})
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search threats..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="threat-search"
          />
        </div>
      </div>

      <div className="matrix-legend">
        <div className="legend-item">
          <span className="legend-icon"><i className="fas fa-bullseye"></i></span>
          <span>Direct Coverage</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon"><i className="fas fa-search"></i></span>
          <span>Partial Coverage</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon">❌</span>
          <span>No Coverage</span>
        </div>
      </div>

      <div className="threat-matrix">
        {searchFilteredThreats.map(threat => (
          <div
            key={threat.id}
            className={`matrix-cell ${getCoverageClass(threat.coverage.level)}`}
            onClick={() => {
              setSelectedThreat(threat);
              setCurrentView('detail');
            }}
          >
            <div className="cell-id">{threat.id}</div>
            <div className="cell-icon">{getCoverageIcon(threat.coverage.level)}</div>
            <div className="cell-title">{threat.title}</div>
            <div className="cell-category">{threat.category}</div>
          </div>
        ))}
      </div>

      {searchFilteredThreats.length === 0 && (
        <div className="no-results">
          <div className="no-results-icon"><i className="fas fa-search"></i></div>
          <h3>No threats found</h3>
          <p>Try adjusting your search or category filter</p>
        </div>
      )}
    </div>
  );

  // Detail View - Deep dive into specific threat
  const renderDetail = () => {
    if (!selectedThreat) return null;

    return (
      <div className="detail-container">
        <div className="detail-header">
          <div className="threat-meta">
            <div className="threat-id-large">{selectedThreat.id}</div>
            <div className="threat-category-tag">{selectedThreat.category}</div>
          </div>

          <h1 className="threat-title-large">{selectedThreat.title}</h1>

          <div className={`coverage-badge ${getCoverageClass(selectedThreat.coverage.level)}`}>
            <span className="badge-icon">{getCoverageIcon(selectedThreat.coverage.level)}</span>
            <span className="badge-text">
              {selectedThreat.coverage.level === 'direct' ? 'Direct Coverage' :
                selectedThreat.coverage.level === 'partial' ? 'Partial Coverage' : 'No Coverage'}
            </span>
          </div>
        </div>

        <div className="detail-content">
          <div className="threat-description-section">
            <h3>Threat Overview</h3>
            <div
              className="threat-description-full"
              dangerouslySetInnerHTML={{ __html: selectedThreat.description }}
            />
          </div>

          <div className="above-analysis-section">
            <h3>Above Security Analysis</h3>
            <p className="analysis-explanation">{selectedThreat.coverage.explanation}</p>

            {selectedThreat.coverage.capabilities.length > 0 && (
              <div className="capabilities-section">
                <h4>Detection Capabilities</h4>
                <div className="capabilities-grid">
                  {selectedThreat.coverage.capabilities.map((capability, index) => (
                    <div key={index} className="capability-tag">
                      {capability}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedThreat.coverage.scenario && (
              <div className="scenario-section">
                <h4>Real-World Scenario</h4>
                <div className="scenario-card">
                  <p>{selectedThreat.coverage.scenario}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="detail-actions">
          <button
            className="back-button"
            onClick={() => setCurrentView('matrix')}
          >
            ← Back to Matrix
          </button>

          <button
            className="next-button"
            onClick={() => {
              const currentIndex = searchFilteredThreats.findIndex(t => t.id === selectedThreat.id);
              const nextThreat = searchFilteredThreats[currentIndex + 1];
              if (nextThreat) {
                setSelectedThreat(nextThreat);
              }
            }}
            disabled={searchFilteredThreats.findIndex(t => t.id === selectedThreat.id) === searchFilteredThreats.length - 1}
          >
            Next Threat →
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="insider-threat-matrix">
      <nav className="matrix-navigation">
        <div className="nav-brand">
          <h1>Above Security × Insider Threat Matrix</h1>
        </div>

        <div className="nav-controls">
          <button
            className={`nav-tab ${currentView === 'dashboard' ? 'active' : ''}`}
            onClick={() => setCurrentView('dashboard')}
          >
            <i className="fas fa-chart-bar"></i> Dashboard
          </button>
          <button
            className={`nav-tab ${currentView === 'matrix' ? 'active' : ''}`}
            onClick={() => setCurrentView('matrix')}
          >
            <i className="fas fa-th"></i> Matrix
          </button>
          {selectedThreat && (
            <button
              className={`nav-tab ${currentView === 'detail' ? 'active' : ''}`}
              onClick={() => setCurrentView('detail')}
            >
              <i className="fas fa-file-alt"></i> {selectedThreat.id}
            </button>
          )}
        </div>
      </nav>

      <main className="matrix-main">
        {currentView === 'dashboard' && renderDashboard()}
        {currentView === 'matrix' && renderMatrix()}
        {currentView === 'detail' && renderDetail()}
      </main>
    </div>
  );
};

export default InsiderThreatMatrix;
