"use client";
import Image from "next/image";
import VideoPoster from "../../../../assets/images/Home/home-poster-video.2d62544.jpg";
import "./style.css";
import BannerImage from "../../../../assets/images/Home/essence2021.webp";
import Wrapper from "@/app/components/ui/wrapper/Wrapper";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/app/components/ui/contianer/Container";
import { useThemeConfig } from "@/app/contexts/theme/ThemeConfigure";
import Video from '../../../../assets/videos/home/Final-16x9-Fitlab-720.mp4'
import { usePathname } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);
const Banner = () => {
  const path = usePathname();
  const [loading, setLoading] = useState(false);
  const [bannerTextLoad, setBannerTextLoad] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [videod, setVideo] = useState(false);
  const videoRef = useRef();
  const pageRef = useRef();

  const { setMenuColor, progress, setHeaderMode, setMenuBgColor } = useThemeConfig();
  useEffect(() => {
    if (progress === true) {
      setBannerTextLoad(false);
    } else {
      setTimeout(() => {
        setBannerTextLoad(true);
      }, 1000);
    }

    setTimeout(() => {
      setLoading(progress);
    }, 500);
  }, [progress]);
  const playVideo = ()=> {
    const videok = videoRef.current;
    setVideo((prevState) => !prevState)
    if(videod === false){
      videok.pause();
    }
    else{
      videok.play();
    }
    
  }
  useEffect(() => {    

    pageRef?.current?.ownerDocument?.documentElement?.setAttribute('id','homepage')
    setMenuColor(false);
    setHeaderMode(false);
    const videok = videoRef.current;
    setTimeout(() => {
      setBannerTextLoad(true);
      setLoading(true);
      setImageLoading(true);
      videok.play();
    }, 1000);
    const bar = gsap.timeline({
      scrollTrigger: {
        trigger: ".animation-trigger",
        start: `top center`,
        end: `bottom center`,
        scrub: 1,
        markers: false,
      },
    });
    bar.to(".svg-circle-animation", { rotation: 180, yPercent: 200 });
 
    const panels = gsap.utils.toArray(".trigger-text-animation");
    gsap.timeline({
      scrollTrigger: {
        trigger: panels[0],
        start: "bottom 50px",
        end: "top top",
        scrub: 1,
        markers: false,
        onEnter: ({ progress, direction, isActive }) => {          
          pageRef?.current?.ownerDocument?.documentElement?.classList.add('active')
        },
        onLeaveBack: ({ progress, direction, isActive }) => {
          pageRef?.current?.ownerDocument?.documentElement?.classList.remove('active')
        },
      },
    });

  }, []);
  return (
    <section className="overflow-hidden relative" ref={pageRef}>
      <Wrapper className="max-sm-tab:hidden  h-[calc(16.66667vw+30px)] max-lgl:text-[calc(2.0875rem+13.05vw)] flex items-center right-text font-bold text-[11.875rem] absolute top-[-.9375rem] left-full z-50 min-w-[100vh] whitespace-nowrap pointer-events-none leading-none rotate-90 origin-top-left">
        #makemeessence
      </Wrapper>
      <Wrapper className="bg-primary h-full w-[calc(16.66667%+30px)] right-0 top-0 absolute max-sm-tab:hidden"></Wrapper>
      <Wrapper className="md:w-[calc(83.33333%-30px)] md:h-[50rem] lgl:h-[64rem] max-sm-tab:h-[35.625rem]">
        <Wrapper
          className={` trigger-text-animation
              relative overflow-hidden h-full
              before:content before:bg-dark
              before:absolute before:top-0 before:h-full before:w-full before:left-0 before:z-[1] before:duration-[1.3s] before:ease-cubic-22 before:delay-[.3s]              
              ${
                imageLoading
                  ? "before:translate-y-[101%]"
                  : "before:translate-y-[0%]"
              }
              `}
        >
          <Image
            className={`object-cover w-full h-full duration-1000 ease-cubic-22 delay-[.3s] ${
              imageLoading ? "scale-x-[1]" : "scale-[1.3]"
            }`}
            alt="Banner Image"
            src={BannerImage.src}
            sizes="100vw"
            width={BannerImage.width}
            height={BannerImage.height}
          />
        </Wrapper>
      </Wrapper>
      <Container className="md:mt-[-31.25rem] max-sm-tab:mt-[-15.625rem] animation-trigger">
        <p className="anim-title relative z-10">
          <span className="overflow-hidden block">
            <span
              className={`block max-lgl:text-[calc(1.8375rem+10.05vw)] text-[9.375rem] leading-none font-bold outline-text  duration-1000 ease-cubic-22 ${
                bannerTextLoad ? "translate-y-[0%]" : "translate-y-[110%]"
              }`}
            >
              back to
            </span>
          </span>
          <span className="overflow-hidden block">
            <span
              className={`block max-lgl:text-[calc(1.8375rem+10.05vw)] ease-cubic-22 text-[9.375rem] leading-none font-bold text-white duration-1000 ${
                bannerTextLoad ? "translate-y-[0%]" : "translate-y-[-110%]"
              }`}
            >
              results
            </span>
          </span>
        </p>
        <Wrapper className="mt-[-2.125rem] mx-[-15px]">
          <Wrapper className="md:max-w-[66.66667%] w-full mr-0 px-[15px] md:ml-[16.66667%]">
            <Wrapper className="bg-[#6c757d] cursor-pointer relative before:pt-[56.25%] before:content before:w-full before:block">
              <Wrapper className="svg-circle-animation absolute top-[-4.21875rem] right-[-4.21875rem] mdm:top-[-5.625rem] mdm:right-[-5.625rem] w-[8.4375rem] h-[8.4375rem] mdm:w-[11.25rem] mdm:h-[11.25rem] z-10">
                <svg
                  version="1.1"
                  viewBox="0 0 179.66 180.83"
                  className="teaser-circle__icon svg-icon svg-fill"
                >
                  <path
                    fill="#ffffff"
                    stroke="none"
                    pid="0"
                    d="M103.65 8.69c.23-1.16.92-1.75 1.91-1.55a1.42 1.42 0 011.11 1.89l-1.15 5.8 3 .58 1.1-5.56c.23-1.16.92-1.74 1.92-1.55s1.3.91 1.1 1.9l-1.18 5.78 3 .59 1.19-6.05c.49-2.47-.67-4.38-2.95-4.82a3.32 3.32 0 00-3.13.74 3 3 0 00-2.34-1.81 3.11 3.11 0 00-2.89.66l.18-.91-3-.58-2 9.85 3 .59zm18.71 10.12l-.35.9 2.81 1.12 3.69-9.52-2.81-1.12-.35.89A3.79 3.79 0 00123 8.81c-2.45-1-5.33.39-6.43 3.23a5.18 5.18 0 002.53 6.82 3.74 3.74 0 003.26-.05zm-3-5.65a2.31 2.31 0 013.14-1.43 2.35 2.35 0 011.35 3.25 2.29 2.29 0 01-3.13 1.43 2.36 2.36 0 01-1.33-3.25zm9.29 9.93l2.25-3.87.63 5.46 3.05 1.68-.82-6.23 5.81-2.58-3.14-1.73-4.92 2.35 4.26-7.34-2.69-1.49-7.12 12.26 2.69 1.49z"
                    fillRule="evenodd"
                  ></path>
                  <path
                    fill="#ffffff"
                    stroke="none"
                    pid="1"
                    d="M136.86 21.77a5.25 5.25 0 001.29 7.64 5.05 5.05 0 004.75 1l-1.1-2.58a2.63 2.63 0 01-2-.55 2.32 2.32 0 01-1.09-2.59l5.71 4.29a5.93 5.93 0 00.82-.9 5.25 5.25 0 10-8.38-6.31zm5.85 1.08a2.11 2.11 0 01.75 2.57L140 22.81a2.08 2.08 0 012.71.04zm12.92 8.33L153.54 29l-7.16 7.09 2.1 2.19 7.15-7.1zm2.13-1.69a1.86 1.86 0 000-2.58 1.78 1.78 0 00-2.54 0 1.86 1.86 0 000 2.58 1.78 1.78 0 002.54 0zm-1.18 2.4l-2.21 1.92 1 1.26-2.72 2.36c-2.15 1.86-2.32 3.54.51 6.38l2.12-1.83c-.91-1-1.33-1.63-.66-2.2l2.72-2.35 1.33 1.63 2.21-1.91-1.33-1.63 2.15-1.87-2.62-1.77-1.47 1.26zm-2.3 20.77l4.34-2.49a3.84 3.84 0 00.43 3.23 5.38 5.38 0 009.29-5.32 3.82 3.82 0 00-2.58-2l.83-.47-1.51-2.63-12.31 7zm7.91-4.54a2.41 2.41 0 11-.94 3.32 2.32 2.32 0 01.94-3.32zm4.58 8.02c-2.78 1.12-4.15 4-2.9 7.26a5.14 5.14 0 003.54 3.39l.4-2.81a2.61 2.61 0 01-1.41-1.54 2.37 2.37 0 01.42-2.82l2.61 6.77a5.7 5.7 0 001.17-.33 5.21 5.21 0 003.07-6.83 5.13 5.13 0 00-6.9-3.09zm4.4 4.07a2.12 2.12 0 01-.69 2.61l-1.59-4.1a2.08 2.08 0 012.28 1.49zm-4.43 11.36l4.4-1.2c1.93-.52 2.87 1.09 3 2.38l3.31-.9a3 3 0 00-2.71-2.46l1.73-.47-.78-3-9.69 2.67zm8.02 1.65c-3.43.59-2 5.51-3.13 5.69-.4.07-.68-.26-.79-1a1.71 1.71 0 01.88-1.94l-1.89-2.4a4.61 4.61 0 00-1.65 4.79c.36 2.2 1.66 4.08 3.93 3.69 3.67-.63 2.11-5.52 3.23-5.71.36-.06.61.23.7.76a1.53 1.53 0 01-.65 1.52l1.78 2.36a4.58 4.58 0 001.48-4.34c-.34-2.1-1.73-3.79-3.89-3.42zm-.76 9.03a5.39 5.39 0 105.62 5.17 5.35 5.35 0 00-5.62-5.17zm.32 7.73a2.34 2.34 0 112.31-2.44 2.29 2.29 0 01-2.27 2.44zm5.25 5.46l-10.1-1-.3 3 5.52.54c1.43.14 2 1 1.89 2.06a1.67 1.67 0 01-2 1.56l-5.76-.57-.3 3 6.2.61c2.73.27 4.36-1.3 4.56-3.32a3.38 3.38 0 00-1-3l1 .09zm-2.26 16.21c.66-2.56-1.1-5.23-4.09-6s-5.82.82-6.47 3.38a3.71 3.71 0 00.47 3.21l-.94-.23-.75 2.93 10 2.45.75-2.93-.93-.23a3.8 3.8 0 001.96-2.58zm-3-.11a2.36 2.36 0 01-3 1.73 2.29 2.29 0 01-1.84-2.92 2.35 2.35 0 013-1.73 2.31 2.31 0 011.85 2.92zm-10.06 7.94l13.86 5.18 1.04-2.91-13.85-5.17-1.05 2.9zm-2.12 14.44l2.62 1.38 3.76-6.71-2.62-1.38-3.76 6.71zm-8.91 4.98l4.36 3.82c.91.8 1.07 1.71.4 2.49a1.44 1.44 0 01-2.24 0l-4.55-4-2 2.32 4.36 3.82c.92.8 1.08 1.71.4 2.49a1.44 1.44 0 01-2.24 0l-4.55-4-2 2.32 4.74 4.16c1.94 1.7 4.22 1.65 5.77-.14a3.39 3.39 0 00.94-3.14 3 3 0 002.79-1.14 3.17 3.17 0 00.89-2.89l.71.63 2-2.33-7.73-6.77zm-12.83 12.27a3.74 3.74 0 00-1.62 2.82l-.61-.74-2.42 1.88 6.44 7.83 2.42-1.88-.6-.73a4 4 0 003.19-.91 4.93 4.93 0 00.45-7.12 5.27 5.27 0 00-7.25-1.15zm4.48 6.42a2.41 2.41 0 01-3.49-.42 2.25 2.25 0 01.35-3.4 2.41 2.41 0 013.49.42 2.24 2.24 0 01-.35 3.4zm-12.68.09l2.31 3.82-5.12-2.18-3 1.74 5.9 2.4-.6 6.18 3.08-1.79.36-5.32 4.37 7.24 2.64-1.54-7.3-12.08-2.64 1.53z"
                    fillRule="evenodd"
                  ></path>
                  <path
                    fill="#ffffff"
                    stroke="none"
                    pid="2"
                    d="M122 162.66a5.13 5.13 0 00-3.26 3.63l2.81.32a2.68 2.68 0 011.49-1.47 2.37 2.37 0 012.82.34l-6.66 2.83a6 6 0 00.38 1.15 5.18 5.18 0 006.9 2.85 5.12 5.12 0 002.84-7c-1.22-2.74-4.14-4.02-7.32-2.65zm3.42 7.19a2.12 2.12 0 01-2.63-.62l4-1.71a2.08 2.08 0 01-1.39 2.33zm-11.92 7.33a1.87 1.87 0 00-1.29 2.26 1.8 1.8 0 002.18 1.33 1.87 1.87 0 001.3-2.25 1.81 1.81 0 00-2.19-1.34zm-1.23-11.24l-2.91.76 2.47 9.98 2.91-.76-2.47-9.98zm-2.14 8.46l-1.62.28-.63-3.52c-.5-2.77-1.86-3.74-5.75-2.66l.48 2.69c1.32-.31 2.08-.36 2.24.5l.63 3.51-2.09.36.52 2.85 2.08-.36.5 2.78 2.87-1.41-.34-1.89 1.62-.28zm-16.23-4.72a3.86 3.86 0 00-3-1.29 5.4 5.4 0 00-.17 10.74 3.81 3.81 0 003-1.19v.95l3 .05.27-14.23h-3zm-2.53 6.57a2.48 2.48 0 112.46-2.44 2.32 2.32 0 01-2.46 2.44zm-11.56-8.53a5.24 5.24 0 00-4.71 1.4l2.21 1.72a2.71 2.71 0 012.06-.47 2.31 2.31 0 012.21 1.73l-7.17-1a5.51 5.51 0 00-.3 1.18 5.06 5.06 0 004.34 6 5.22 5.22 0 006.16-4.45c.45-3.02-1.35-5.61-4.8-6.11zm-.94 7.86A2.09 2.09 0 0177 173.7l4.35.63a2.13 2.13 0 01-2.48 1.25zm-8.93-4.77c-.52 2-2.36 2-3.52 1.46l-.89 3.35a3 3 0 003.47-1.16l-.46 1.75 2.93.79 2.6-9.85-2.92-.79zm-7.4-4.31c.14-.37.57-.45 1.27-.2a1.66 1.66 0 011.19 1.68l3.06-.48a4.45 4.45 0 00-3.31-3.75c-2.1-.76-4.39-.54-5.22 1.63-1.34 3.48 3.7 4.49 3.29 5.56-.13.34-.51.41-1 .23a1.48 1.48 0 01-1-1.3l-3 .4a4.44 4.44 0 003 3.38c2 .73 4.2.34 5-1.71 1.3-3.22-3.68-4.4-3.28-5.44zm-6.68-6.75a5.3 5.3 0 102.25 7.16 5.25 5.25 0 00-2.25-7.16zm-.42 5.77a2.3 2.3 0 11-.94-3.17 2.24 2.24 0 01.94 3.17zm-7.67-10.11l-3.19 4.57a1.76 1.76 0 01-2.72.6 1.71 1.71 0 01-.35-2.55l3.33-4.74-2.44-1.79-3.59 5.1c-1.58 2.24-1 4.47.62 5.67a3.38 3.38 0 003 .7l-.55.78 2.44 1.79 5.85-8.31zm-9.18-7.95a3.87 3.87 0 00-3.08-1.23l.67-.7-2.18-2.15-7.15 7.41 2.15 2.19.67-.7a3.87 3.87 0 001.34 3 5.15 5.15 0 007.31-.49 5.17 5.17 0 00.27-7.33zm-2.46 5.18a2.45 2.45 0 11-3.52-3.4 2.45 2.45 0 113.52 3.4zm-4.88-12.66L20 149.55l1.94 2.34 11.25-9.57-1.94-2.34zm-7.42-2.38l-3.95-6.56-2.43 1.53 3.95 6.56 2.43-1.53zm-3.95-17.04l-5.35 1.87c-1.12.39-2 .08-2.29-.89a1.45 1.45 0 011.09-1.94l5.57-2-1-2.91-5.35 1.87c-1.12.39-2 .08-2.29-.89a1.45 1.45 0 011.09-1.94l5.57-2-1-2.91-5.82 2c-2.37.83-3.44 2.83-2.69 5.06a3.31 3.31 0 002.19 2.37 3.54 3.54 0 001.61 5.18l-.87.31 1 2.91 9.48-3.33zM11 109.27c3.05-.44 5.07-2.93 4.66-5.53a3.74 3.74 0 00-1.66-2.76l1-.14-.47-3-10.27 1.51.46 3 1-.14a3.67 3.67 0 00-.79 3.14c.37 2.57 3.07 4.37 6.07 3.92zm-3.33-5a2.3 2.3 0 012.13-2.72 2.35 2.35 0 012.87 2 2.31 2.31 0 01-2.13 2.73 2.37 2.37 0 01-2.84-1.98zm6.75-10.91l-4.55.07 4.49-3.26-.05-3.38-5.09 3.8-5.21-3.54.06 3.48 4.56 2.92-8.63.14.05 2.99 14.42-.23-.05-2.99z"
                    fillRule="evenodd"
                  ></path>
                  <path
                    fill="#ffffff"
                    stroke="none"
                    pid="3"
                    d="M10.14 76.62a5.08 5.08 0 00-5.84 4.54 5.21 5.21 0 004.65 6c3 .35 5.51-1.53 5.9-5a5.27 5.27 0 00-1.56-4.66l-1.65 2.27a2.74 2.74 0 01.54 2 2.31 2.31 0 01-1.67 2.27l.81-7.2a5.49 5.49 0 00-1.18-.22zm-1.87 7.27A2.12 2.12 0 017 81.49a2.09 2.09 0 011.81-2zm9.18-14.96l-9.67-2.75-.81 2.97 9.67 2.74.81-2.96zM4.3 68.71a1.81 1.81 0 002.22-1.29 1.86 1.86 0 00-1.25-2.27A1.83 1.83 0 003 66.44a1.87 1.87 0 001.3 2.27zm3.78-3.89l2.76 1 .56-1.57 3.4 1.26c2.69 1 4.22.3 5.2-3.69l-2.61-1c-.38 1.32-.72 2-1.55 1.72l-3.4-1.26.72-2-2.77-1-.71 2L7 59.31l-.18 3.26 1.82.68zm18.73-8.76l-4.27-2.53a3.79 3.79 0 002.55-2 5.18 5.18 0 00-2.17-6.92 5 5 0 00-7 1.51 3.92 3.92 0 00-.44 3.25l-.81-.48-1.51 2.65L25.3 58.7zM19 51.45a2.35 2.35 0 01-.91-3.34 2.25 2.25 0 013.3-.85 2.34 2.34 0 01.92 3.34 2.26 2.26 0 01-3.31.85zm4.79-7.58a5.24 5.24 0 007.67-1.06 5.05 5.05 0 001.12-4.71l-2.61 1a2.6 2.6 0 01-.61 2 2.31 2.31 0 01-2.62 1l4.47-5.59a5.79 5.79 0 00-.87-.84 5.24 5.24 0 10-6.55 8.18zm1.26-5.8a2.09 2.09 0 012.59-.68l-2.71 3.38a2.06 2.06 0 01.12-2.7zM37 36.15l-3.24-3.17c-1.42-1.4-.52-3 .52-3.74l-2.45-2.41a3 3 0 00-.73 3.53l-1.29-1.26-2.15 2.13 7.21 7.09zm4.13-7.95c.25.31.12.71-.44 1.17a1.64 1.64 0 01-2.07.18l-1.06 2.81a4.39 4.39 0 004.85-.91c1.66-1.39 2.59-3.47 1.11-5.21-2.37-2.87-5.68.88-6.41 0-.23-.28-.11-.64.29-1a1.47 1.47 0 011.6-.16l1.09-2.71a4.38 4.38 0 00-4.38.85c-1.6 1.33-2.32 3.36-.92 5.05 2.21 2.71 5.63-.93 6.34-.07zm9.16-2.22A5.29 5.29 0 1043 24.33a5.25 5.25 0 007.29 1.65zm-4.11-6.46a2.37 2.37 0 012.54 4 2.23 2.23 0 01-3.21-.75 2.25 2.25 0 01.67-3.3zm11.92 1.75l-2.31-5.05a1.79 1.79 0 01.86-2.69 1.69 1.69 0 012.35.95l2.42 5.28 2.8-1.26-2.6-5.69c-1.15-2.5-3.36-3.11-5.25-2.26a3.5 3.5 0 00-2.15 2.33l-.4-.87-2.8 1.27 4.24 9.25zm11.37-4.02a3.83 3.83 0 002.6-2l.27.92 3-.84-2.87-9.82-3 .85.27.91a3.93 3.93 0 00-3.3-.35 5.09 5.09 0 00-3.24 6.51 5.19 5.19 0 006.27 3.82zm-1.61-7.72a2.36 2.36 0 013.06 1.72 2.31 2.31 0 01-1.67 3.05 2.35 2.35 0 01-3-1.71 2.32 2.32 0 011.61-3.06zm11.6 5.07L76.97 0l-2.91.53 2.49 14.6 2.91-.53zm13.65-8.66l-7.58.2.08 2.77 7.58-.2-.08-2.77z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Wrapper>
              <Wrapper
                className={`video-teaser__inner z-[1] group overflow-hidden absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center before:content before:bg-[#183330]
              before:absolute before:top-0 before:h-full before:w-full before:left-0 before:z-[1] before:duration-[1s] before:ease-cubic-22 before:delay-[.3s]
              ${
                imageLoading
                  ? "before:translate-x-[-101%]"
                  : "before:translate-x-[0%]"
              }`}
              >
                <video
                  ref={videoRef}
                  width="320"
                  height="240"
                  className="absolute top-0 left-0 w-full h-full"
                  controls={false}
                  loop="loop"
                  autoPlay={loading}
                  muted={loading}
                  playsInline
                  poster={VideoPoster.src}
                >
                  <source
                    type="video/mp4"
                    src={Video}
                  />
                </video>
                <Wrapper
                  onClick={() => playVideo()}
                  className={`absolute top-0 left-0 w-full h-full flex items-center justify-center video-teaser__btn group-hover:opacity-100 ease-in-out duration-[0.3s] ${
                    videod ? "opacity-100" : "opacity-0 "
                  }`}
                >
                  <span
                    data-text-play="Play video"
                    data-text-pause="Pause video"
                    className={`video-teaser__btn__text block text-center relative font-bold text-transparent lowercase overflow-hidden
                    before:content-[attr(data-text-play)]
                    before:text-[#ffffffbf] before:text-center
                    before:absolute before:w-full before:left-0 before:duration-[.3s] before:transition-transform before:ease-cubic-22 before:translate-y-[-100%]
                    after:content-[attr(data-text-pause)]
                    after:text-white after:text-center
                    after:absolute after:w-full after:left-0 after:duration-[.3s]  after:transition-transform  after:ease-cubic-22
                     ${videod ? "is-paused" : "is-playing"} `}
                  >
                    Pause video
                  </span>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Wrapper className="mx-[-15px] relative z-20 ">
          <Wrapper className="md:max-w-[58.33333%] w-full px-[15px]">
            <Wrapper className="p-[1.875rem] md:p-[3.125rem] md:mt-[-5rem] bg-white">
              <h1 className="text-[1.5625rem] mb-[.5em] leading-none font-bold lowercase text-dark max-sm-tab:text-[calc(1.05625rem+.675vw)]">
                personal training enschede
              </h1>
              <Wrapper className="markdown">
                <p className="text-[1rem] md:text-[1.125rem] font-normal text-black leading-[1.8]">
                  <strong>
                    To fall off? Build muscle? Want to get fitter? Build up
                    fitness? Whatever goals you have: start now at essence: With
                    our complete guidance, you can be sure that you will really
                    achieve your goals.
                  </strong>
                </p>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Container>
      <Wrapper className="marquee overflow-hidden whitespace-nowrap relative z-10">
        <Wrapper className="marquee__track inline-flex">
          <h2 className="type-outline text-[6.25rem] font-bold leading-none text-dark mb-[.5em] max-sm-tab:text-[calc(1.525rem+6.3vw)]">
            move.breath.workout.live.repeat.
          </h2>
          <h2 className="type-outline text-[6.25rem] font-bold leading-none text-dark mb-[.5em] max-sm-tab:text-[calc(1.525rem+6.3vw)]">
            move.breath.workout.live.repeat.
          </h2>
        </Wrapper>
        <Wrapper className="marquee__track inline-flex">
          <h2 className="type-outline text-[6.25rem] font-bold leading-none text-dark mb-[.5em] max-sm-tab:text-[calc(1.525rem+6.3vw)]">
            move.breath.workout.live.repeat.
          </h2>
          <h2 className="type-outline text-[6.25rem] font-bold leading-none text-dark mb-[.5em] max-sm-tab:text-[calc(1.525rem+6.3vw)]">
            move.breath.workout.live.repeat.
          </h2>
        </Wrapper>
      </Wrapper>
    </section>
  );
};

export default Banner;
