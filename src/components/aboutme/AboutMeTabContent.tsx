import { AboutMeTab } from '@/app/about-me/page';
import React from 'react';

interface AboutMeTabContentProps {
  tab: number;
}

const AboutMeTabContent: React.FC<AboutMeTabContentProps> = ({ tab }) => {
  if (tab === AboutMeTab.SOFTWARE) {
    return <div>FRONTEND DEV</div>;
  }
  if (tab === AboutMeTab.NURSE) {
    return <div>ICU NURSE</div>;
  }

  return <div>My general introduction</div>;
};

export default AboutMeTabContent;
