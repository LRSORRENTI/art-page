'use client'
import { useState } from 'react';
import { NavDrawer } from '@/components/NavDrawer';
import { HeroContainer } from '@/components/HeroContainer'
import { CurrentExhibition } from '@/components/CurrentExhibition';
import { ComingSoon } from '@/components/ComingSoon';
import { About } from '@/components/About';
export default function Home() {
  const [currentSelection, setCurrentSelection] = useState('current');
  return (
    <>
        <h1 className='flex justify-center mx-auto text-slate-500 mt-4 font-thin text-3xl md:text-5xl'>lumina gallery</h1>
        <div>
        <NavDrawer setCurrentSelection={setCurrentSelection} />
        </div>
        <div>
            <HeroContainer setCurrentSelection={setCurrentSelection} />
        </div>
        {/* {currentSelection === 'current' ? <CurrentExhibition /> : <ComingSoon />} */}
      {currentSelection === 'current' && <CurrentExhibition />}
      {currentSelection === 'coming' && <ComingSoon />}
      {currentSelection === 'about' && <About />}
    </>
);
}
