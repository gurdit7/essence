'use client';
import { useThemeConfig } from "@/app/contexts/theme/ThemeConfigure";
import { useEffect, useState } from "react";

const ProgressBar = () => {
  const {progress,setProgress} = useThemeConfig();
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setTimeout(() => {
        setLoading(true)
    },100);
    setTimeout(() => {
        setProgress(false)
        setLoading(false)
    }, 1800);
  },[progress])
  return (
    <>
    {progress && (<div className={`fixed z-[99999] top-0 left-0 h-[2px] bg-white duration-[1s] ${loading ? 'w-full' : 'w-0 '}`}></div>)}
    </>
  );
}

export default ProgressBar;
