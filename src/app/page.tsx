'use client'
import { NavDrawer } from '@/components/NavDrawer';
import { HeroContainer } from '@/components/HeroContainer'
import { CurrentExhibition } from '@/components/CurrentExhibition';
import { Masonry } from '@/components/Masonry';
export default function Home() {
  return (
    <>
    <h1 className='flex justify-center mx-auto text-slate-500 mt-4 font-thin text-3xl md:text-5xl'>lumina gallery</h1>
      <div>
        <NavDrawer/>
      </div>
      <div className=''>
        <HeroContainer/>
      </div>
      <Masonry/>
      {
      // This is the carousel component, going to experiment with a grid layout 
      // instead
      /* <div className='left-1/3 bottom-60 fixed max-w-xs'>
        <p className='flex ml-1 font-extralight'>current exhibition: liminal</p>
        <CurrentExhibition/>
      </div> */}
    </>
  );
}
