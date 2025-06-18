import SlideIntro from './SlideIntro';
import SlideRuntimeITDR from './SlideRuntimeITDR';
import SlideProblem from './SlideProblem';
import SlideHowItWorks from './SlideHowItWorks';
import SlideCaseStudy from './SlideCaseStudy';
import SlideDetection from './SlideDetection';
import SlideDeployment from './SlideDeployment';
import SlideLandscape from './SlideLandscape';
import SlideVsPush from './SlideVsPush';
import SlideVsValence from './SlideVsValence';
import SlideVsIsland from './SlideVsIsland';
import SlideMarketLeadership from './SlideMarketLeadership';

export const slideData = [
  { title: 'Above Runtime ITDR', Component: SlideIntro },
  { title: 'The Problem', Component: SlideProblem },
  { title: 'What is Runtime ITDR?', Component: SlideRuntimeITDR },
  { title: 'How It Works', Component: SlideHowItWorks },
  { title: 'Cyberhaven Case Study', Component: SlideCaseStudy },
  { title: 'Real-World Detection', Component: SlideDetection },
  { title: 'Deployment', Component: SlideDeployment },
  { title: 'Competitive Landscape', Component: SlideLandscape },
  { title: 'Above vs. Push Security', Component: SlideVsPush },
  { title: 'Above vs. Valence Security', Component: SlideVsValence },
  { title: 'Above vs. Island Browser', Component: SlideVsIsland },
  { title: 'Market Leadership', Component: SlideMarketLeadership },
];
