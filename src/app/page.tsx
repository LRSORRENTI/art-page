'use client'
import { NavDrawer } from '@/components/NavDrawer';
import { HeroContainer } from '@/components/HeroContainer'
export default function Home() {
  // const [isActive, setIsActive] = useState(false);

  // const toggleBurger = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <>
    <NavDrawer/>
    <HeroContainer/>
    </>
  );
}
