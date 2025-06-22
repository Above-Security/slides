import React, { useEffect } from 'react';
import { initializeClarity, clarityEvent } from '../../utils/clarity';
import VisionHero from '../sections/VisionHero';
import GoToMarket from '../sections/GoToMarket';
import PovPlaybook from '../sections/PovPlaybook';
import MetricsSection from '../sections/MetricsSection';
import PositioningSection from '../sections/PositioningSection';
import RoadmapSection from '../sections/RoadmapSection';
import HypothesesSection from '../sections/HypothesesSection';
import ValueProofSection from '../sections/ValueProofSection';
import RisksSection from '../sections/RisksSection';
import ExecutiveSummarySection from '../sections/ExecutiveSummarySection';
import '../styles/CompanyIndex.css';

const CompanyIndex = () => {
  useEffect(() => {
    try {
      initializeClarity();
      clarityEvent('company_narrative_view');
    } catch (error) {
      console.warn('Analytics initialization failed:', error);
    }
  }, []);

  return (
    <div className="company-narrative-container">
      <VisionHero />
      <main className="company-narrative-content">
        <GoToMarket />
        <PovPlaybook />
        <MetricsSection />
        <PositioningSection />
        <RoadmapSection />
        <HypothesesSection />
        <ValueProofSection />
        <RisksSection />
        <ExecutiveSummarySection />
      </main>
    </div>
  );
};

export default CompanyIndex;
