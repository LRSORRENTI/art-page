'use client'
import { NavDrawer } from '@/components/NavDrawer';
import { HeroContainer } from '@/components/HeroContainer'
export default function Home() {
  // const [isActive, setIsActive] = useState(false);

  // const toggleBurger = () => {
  //   setIsActive(!isActive);
  // };
  // text-3xl mb-3 font-thin hover:font-extralight hover:cursor-pointer" style={{transition: ".2s ease-in"}}>about</p>
  return (
    <>
    <div className='flex'>
    <NavDrawer/>
    <h1 className='flex justify-center mx-auto text-slate-500 mt-4  font-thin text-5xl'>Lumina Gallery</h1>
    </div>
    <HeroContainer/>
    </>
  );
}
