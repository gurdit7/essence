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
  const [menuBgColor, setMenuBgColor] = useState(false);
  const [progress, setProgress] = useState(false);
  const [headerMode, setHeaderMode] = useState(false);
  const [logoAnimation, setLogoAnimation] = useState(true);
  const [leaveEnterPage, setLeaveEnterPage] = useState(false);
  const router = useRouter();  
  const pageChanger = (e)=>{
    e.preventDefault();
    setProgress(true);
    setLogoAnimation(false)
    setTimeout(() => {
      setLeaveEnterPage(true)
    }, 400);
    setTimeout(() => {
      router.push(e.target.href)
    }, 1800);
    setTimeout(() => {      
      setMenuBgColor(false)
      setLogoAnimation(true)
      setLeaveEnterPage(false)
    }, 1900);
  
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
    setLogoAnimation,
    leaveEnterPage,
    setLeaveEnterPage,
    menuBgColor,
    setMenuBgColor 
  };

  return (
    <ThemeConfigerContext.Provider value={value}>
      {children}
    </ThemeConfigerContext.Provider>
  );
};
