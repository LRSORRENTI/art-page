'use client'
import { useState } from 'react';
import { NavDrawer } from '@/components/NavDrawer';

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  return (
    <>
    <h1>Home</h1>
    <NavDrawer/>
    </>
  );
}
