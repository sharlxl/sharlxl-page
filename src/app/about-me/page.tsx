'use client';

import AboutMeTabContent from '@/components/aboutme/AboutMeTabContent';
import { useState } from 'react';

export const AboutMeTab = {
  DEFAULT: 0,
  SOFTWARE: 1,
  NURSE: 2,
} as const;

export default function AboutMe() {
  const [tab, setTab] = useState<number>(AboutMeTab.DEFAULT);

  return (
    <div className='flex flex-1 justify-center items-center'>
      <div className='flex flex-col w-full text-center'>
        <div className='flex flex-1 p-4 font-bold'>
          <div className='flex flex-1 gap-10'>
            <p
              onClick={() => setTab(AboutMeTab.SOFTWARE)}
              className={`hover:text-mainAccent ${
                tab === AboutMeTab.SOFTWARE
                  ? 'text-[#00C9B1] border-b-2 border-mainAccent'
                  : ''
              }`}
            >
              software dev
            </p>
            <p
              onClick={() => setTab(AboutMeTab.NURSE)}
              className={`hover:text-mainAccent ${
                tab === AboutMeTab.NURSE
                  ? 'text-[#00C9B1] border-b-2 border-mainAccent'
                  : ''
              }`}
            >
              Nurse
            </p>
          </div>
          {(tab === AboutMeTab.SOFTWARE || tab === AboutMeTab.NURSE) && (
            <p
              onClick={() => setTab(AboutMeTab.DEFAULT)}
              className='hover:text-mainAccent'
            >
              back
            </p>
          )}
        </div>
        <AboutMeTabContent tab={tab} />
      </div>
    </div>
  );
}
