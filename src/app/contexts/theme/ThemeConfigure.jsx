"use client"
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
const ThemeConfigerContext = React.createContext();

export function useThemeConfig() {
  return useContext(ThemeConfigerContext);
}

export const ThemeConfiger =  ({children}) => {
  const [bgColor, setBgColor] = useState('bg-[#f8f8f8]');
  const [menuColor, setMenuColor] = useState(false);
  const [progress, setProgress] = useState(false);
  const [headerMode, setHeaderMode] = useState(false);
  const [logoAnimation, setLogoAnimation] = useState(true);
  const router = useRouter();  
  const pageChanger = (e)=>{
    e.preventDefault();
    console.log(e)
    setProgress(true);
    setLogoAnimation(false)
    setTimeout(() => {
      setMenuColor(false)
      setHeaderMode(false)
      setLogoAnimation(true)
      router.push(e.target.href)
    }, 1000);

  }
  const value= {
    bgColor,
    setBgColor,
    menuColor,
    setMenuColor,
    progress,
    setProgress,
    pageChanger,
    headerMode,
    setHeaderMode,
    logoAnimation,
    setLogoAnimation 
  };

  return (
    <ThemeConfigerContext.Provider value={value}>
      {children}
    </ThemeConfigerContext.Provider>
  );
};
