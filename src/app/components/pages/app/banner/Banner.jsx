"use client";
import Image from "next/image";
import "./style.css";
import BannerImage from "../../../../assets/images/personal-training-enschede/exclusive-for-members-image.jpg";
import Wrapper from "@/app/components/ui/wrapper/Wrapper";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/app/components/ui/contianer/Container";
import { useThemeConfig } from "@/app/contexts/theme/ThemeConfigure";
import AnimatedTextCircle from "@/app/components/ui/animatedCricle/AnimatedTextCircle";
gsap.registerPlugin(ScrollTrigger);
const Banner = () => {
  const pageRef = useRef();
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const { setMenuColor, progress, setHeaderMode, pageChanger } =
    useThemeConfig();
  useEffect(() => {
    setTimeout(() => {
      setLoading(progress);
    }, 500);
  }, [progress]);
  useEffect(() => {
    pageRef?.current?.ownerDocument?.documentElement?.setAttribute('id','app');
    setMenuColor(false);
    setHeaderMode(false);
    setImageLoading(true);
    setTimeout(() => {
      setLoading(true);
    }, 1000);
    const bar = gsap.timeline({
      scrollTrigger: {
        trigger: ".animation-trigger-pts",
        start: `20px top`,
        end: `bottom top`,
        scrub: 1,
        markers: false,
      },
    });
    bar.to(".animated-circle-pts", { rotation: 90, yPercent: 200 });
    const panels = gsap.utils.toArray(".trigger-training-pts");
    gsap.timeline({
      scrollTrigger: {
        trigger: panels[0],
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        markers: false,
        onEnter: ({ progress, direction, isActive }) => {
          panels[0].classList.add("is-shown");
        },
        onLeaveBack: ({ progress, direction, isActive }) => {
        },
      },
    });

    const imageScale = gsap.timeline({
      scrollTrigger: {
        trigger: ".imageScale-animation",
        start: `20px top`,
        end: `bottom top`,
        scrub: 1,
        markers: false,
      },
    });
    imageScale.to(".the-bg-img", { scale:1.15, y: '-150px' });
  }, []);
  return (
    <>
    <AnimatedTextCircle fill="#e9d1ca"/>
    <section className="overflow-hidden relative bg-dark z-[1]" ref={pageRef}>
   
      <Wrapper className="sidebar-type-outline max-sm-tab:hidden lowercase  h-[calc(16.66667vw+30px)] max-lgl:text-[calc(2.0875rem+13.05vw)] flex items-center font-bold text-[11.875rem] absolute top-[-.9375rem] left-full z-50 min-w-[100vh] whitespace-nowrap pointer-events-none leading-none rotate-90 origin-top-left">
        essence: app
      </Wrapper>
      <Wrapper className="bg-white h-full w-[calc(16.66667%+30px)] right-0 top-0 absolute max-sm-tab:hidden"></Wrapper>
      <Wrapper className="md:w-[calc(83.33333%-30px)]">
        <Wrapper className="bg-dark h-[16.25rem] md:h-[23.125rem] w-full"></Wrapper>
        <Wrapper
          className={`trigger-image-animation-pts z-10 relative h-[35.625rem] md:h-[50rem]
              `}
        >
          <Wrapper className="pl-[1.875rem] lgl:pl-[calc(50vw-570px)] animation-trigger relative z-10">
            <p className="anim-title relative z-10 translate-y-[-50%]">
              <span className="overflow-hidden block">
                <span
                  className={`lowercase block max-lgl:text-[calc(1.8375rem+10.05vw)] text-[9.375rem] leading-none font-bold app-type-outline  duration-1000 ease-cubic-22 ${loading ? "translate-y-[0%]" : "translate-y-[110%]"
                    }`}
                >
                  essence
                </span>
              </span>
              <span className="overflow-hidden block">
                <span
                  className={`block max-lgl:text-[calc(1.8375rem+10.05vw)] ease-cubic-22 text-[9.375rem] leading-none font-bold text-primary duration-1000 ${loading ? "translate-y-[0%]" : "translate-y-[-110%]"
                    }`}
                >
                  app
                </span>
              </span>
            </p>
          </Wrapper>
<Wrapper className='overflow-hidden absolute top-0 left-0 bottom-0 right-0'>
          <Image
            className={`object-cover absolute top-0 left-0 w-full h-full duration-1000 ease-cubic-22 delay-[.3s] ${imageLoading ? 'scale-100' : 'scale-110'}`}
            alt="Banner Image"
            src={BannerImage.src}
            sizes="100vw"
            width={BannerImage.width}
            height={BannerImage.height}
          />
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Container>
        <Wrapper className="mx-[-15px] relative z-20 group trigger-training-pts">
          <Wrapper className="md:max-w-[58.33333%] w-full px-[15px]">
            <Wrapper className="p-[1.875rem] md:p-[3.125rem] md:mt-[-5rem] mt-[-6.25rem] before:absolute before:content before:w-full before:top-0 before:left-0 before:h-[7.5rem] before:bg-dark">
              <Wrapper className="markdown relative z-10">
                <p className="text-[1rem] md:text-[1.125rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-100 font-normal text-white leading-[1.8]">
                  Working hard towards your goals? Then of course you also want to see results. Our essence: app not only gives you insight into your development, but also helps you on your way to a healthy eating pattern.
                </p>

                <Wrapper className='mt-[1.2em] text-primary font-bold leading-[1.2] text-[1.5625rem] mb-[.8em]'>your progress? check!</Wrapper>
                <p className="text-[1rem] md:text-[1.125rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-100 font-normal text-white leading-[1.8]">
                  With today&apos;s options, we can make personal training a lot more manageable for you. With our essence: app for example. It offers various practical functions that support you in your training process. For example, you can track your workouts and view your progress. And together with your trainer you can analyze your personal development and results.
                </p>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Container>
      <Wrapper className='relative z-[1] imageScale-animation'>
      <Wrapper className='mdm:mt-[-18.75rem] mdm:pt-[43.75rem] pt-[30rem] mt-[-8.125rem]'>
        <Container>
          <Wrapper className='md:px-[3.125rem] max-lgl:p-[1.875rem]'>
            <Wrapper className='mx-[-15px]'>
              <Wrapper className='md:max-w-[41.66667%] px-[15px]'>
                <Wrapper className='text-primary font-bold leading-[1.2] text-[1.5625rem] mb-[.8em]'>tailor-made nutritional programs</Wrapper>
                <p className="text-[1rem] duration-500 group-[.is-shown]:opacity-100 delay-100 font-normal text-white leading-[1.8]">
                  Nutrition is an important aspect of a healthy life. We probably don&apos;t have to tell you that. The app helps you to gain a good insight into your diet. With a nutrition program tailor-made for you, you can keep track of what you eat and how you can achieve the fastest results with a diet that suits you.
                </p>
              </Wrapper>
            </Wrapper></Wrapper>
        </Container>
      </Wrapper>    
      <Wrapper className='absolute md:w-[calc(83.33333%-30px)] z-[-1] bg-contain bg-no-repeat top-0 left-0 bottom-0 the-bg-img w-full'>

      </Wrapper>
      <Container className=' py-[10vw] lgl:py-[6.25rem]'>
        <Wrapper className='md:px-[3.125rem] max-sm-tab:px-[30px]'>
          <Wrapper className='mx-[-15px]'>

            <Wrapper className='md:max-w-[83.33333%] px-[15px]'>
              <span className="overflow-hidden block">
                <span
                  className={`lowercase block max-lgl:text-[calc(1.525rem+6.3vw)] text-[6.25rem] leading-none font-bold app-type-outline  duration-1000 ease-cubic-22 ${loading ? "translate-y-[0%]" : "translate-y-[110%]"
                    }`}
                >
                  download
                </span>
              </span>
              <span className="overflow-hidden block">
                <span
                  className={`lowercase block mb-[.5em] max-lgl:text-[calc(1.525rem+6.3vw)] text-[6.25rem] leading-none font-bold text-primary duration-1000 ease-cubic-22 ${loading ? "translate-y-[0%]" : "translate-y-[110%]"
                    }`}
                >
                  essence: app
                </span>
              </span>
              <Wrapper className='md:flex'>
                <a href="" className="mr-[1.875rem] mb-[.9375rem]" target="_blank">
                  <svg version="1.1" viewBox="0 0 187.87 54.73" className="w-[188px] h-[56px]" ><path fill="#fff" stroke="none" pid="0" d="M181.9 0H6a6 6 0 00-6 6v42.75a6 6 0 006 6h175.9a6 6 0 006-6V6a6 6 0 00-6-6zm4.58 48.75a4.69 4.69 0 01-4.7 4.7H5.84a4.77 4.77 0 01-4.7-4.7V6a4.7 4.7 0 014.7-4.71h175.94a4.7 4.7 0 014.7 4.71z"></path><path fill="#fff" stroke="none" pid="1" d="M42.17 27c-.38-4.45 3.43-6.62 3.56-6.74a8.32 8.32 0 00-6.48-3.57c-2.79-.25-5.33 1.66-6.73 1.66S29 16.67 26.68 16.8a8.55 8.55 0 00-7.24 4.45c-3.18 5.48-.77 13.62 2.15 18 1.53 2.16 3.31 4.58 5.59 4.45s3.05-1.4 5.85-1.4 3.55 1.4 5.84 1.4 3.94-2.16 5.46-4.32a23.06 23.06 0 002.54-5.09 7.81 7.81 0 01-4.7-7.29zm-4.7-13.25A7.59 7.59 0 0039.25 8 8.64 8.64 0 0034 10.69a7.4 7.4 0 00-1.9 5.47 6.26 6.26 0 005.37-2.41zM65 25l-6 18.58h3l1.65-5.48h6l1.78 5.48h3.17L68.72 25zm-.89 10.69l1.69-4.89c.38-1.53.64-2.67.89-3.56.51 1.78.76 3.05.89 3.56l1.52 4.84zm20.36-6.04A4.64 4.64 0 0080 32.07l-.13-2.16h-2.64c.13 1.53.13 2.93.13 4.45V49h2.79v-7.13A4.09 4.09 0 0084 43.78 5.26 5.26 0 0088 42a7.54 7.54 0 001.91-5.47 7.72 7.72 0 00-1.53-5 4.94 4.94 0 00-3.91-1.88zM86 40.09a3.05 3.05 0 01-2.67 1.27 3 3 0 01-2.29-1 3.4 3.4 0 01-.89-2.42v-2.18a2.44 2.44 0 01.13-.89A3.78 3.78 0 0181.42 33a3.12 3.12 0 012-.76A2.83 2.83 0 0186 33.47a5.25 5.25 0 01.89 3.18 5.82 5.82 0 01-.89 3.44zm13.84-10.44a4.64 4.64 0 00-4.44 2.42l-.13-2.16H92.6c.13 1.53.13 2.93.13 4.45V49h2.79v-7.13a4.1 4.1 0 003.82 1.91A5.26 5.26 0 00103.4 42a7.54 7.54 0 001.91-5.47 7.72 7.72 0 00-1.53-5 4.94 4.94 0 00-3.94-1.88zm1.53 10.44a3.05 3.05 0 01-2.67 1.27 2.81 2.81 0 01-2.29-1 3.4 3.4 0 01-.89-2.42v-2.18a2.44 2.44 0 01.13-.89A3.06 3.06 0 0196.79 33a3.12 3.12 0 012-.76 2.83 2.83 0 012.54 1.27 5.25 5.25 0 01.89 3.18 5.82 5.82 0 01-.85 3.4zm16.51-7.25a12.36 12.36 0 01-2.67-1.4 2.73 2.73 0 01-.89-1.79 2.05 2.05 0 01.77-1.65 3.63 3.63 0 012.41-.76 6.71 6.71 0 013.56.89l.76-2.42a8.46 8.46 0 00-4.19-.89 6.64 6.64 0 00-4.58 1.53 4.84 4.84 0 00-1.65 3.81c0 2.29 1.65 4.08 4.83 5.35a6.68 6.68 0 012.54 1.4 2.58 2.58 0 01.76 1.91 2.34 2.34 0 01-.89 2 11.71 11.71 0 01-2.66.39 8.46 8.46 0 01-4.32-1.15l-.66 2.58a9.09 9.09 0 004.83 1.14 7.22 7.22 0 005.08-1.65 4.86 4.86 0 001.65-3.82 4.44 4.44 0 00-1.14-3.18 8.57 8.57 0 00-3.54-2.29zm11.18-6.37l-2.92 1.15V30h-1.91v2.29h1.91v6.74a5.23 5.23 0 001 3.57 3.33 3.33 0 002.8 1 5.26 5.26 0 002.29-.38l-.12-2.22a3.82 3.82 0 01-1.27.13c-1.15 0-1.78-.89-1.78-2.55v-6.51h3.3v-2.29h-3.3zm11.69 3.31a5.89 5.89 0 00-4.83 2 7.52 7.52 0 00-1.78 5.09 7.18 7.18 0 001.78 5 5.91 5.91 0 004.7 1.91 5.8 5.8 0 004.7-2 7.56 7.56 0 001.78-5.1 7.12 7.12 0 00-1.65-5 6.15 6.15 0 00-4.7-1.9zM143.16 40a3 3 0 01-5.34 0 6.29 6.29 0 01-.76-3.18 6 6 0 01.76-3.18 3.11 3.11 0 012.67-1.64 2.86 2.86 0 012.67 1.65 6.19 6.19 0 01.76 3.18 6.19 6.19 0 01-.76 3.17zm10.67-9.2a5.46 5.46 0 00-1.52 2.2h-.13l-.13-2.54h-2.54c.13 1.27.13 2.67.13 4.2v9.16h3.05v-7.29a4.73 4.73 0 01.76-2.68 2.8 2.8 0 012.41-1.14 1.84 1.84 0 01.89.13V30H156a3.43 3.43 0 00-2.17.8zm10.8-1.02a5.9 5.9 0 00-4.7 2.17 7.62 7.62 0 00-1.65 5.05 7.19 7.19 0 001.77 5 6.17 6.17 0 004.83 1.78 9.54 9.54 0 004.45-.89l-.51-2a10.79 10.79 0 01-3.56.64 4.42 4.42 0 01-2.92-.89 3.46 3.46 0 01-1.27-3.05H170c0-.39.13-.9.13-1.4A7.4 7.4 0 00169 32a5 5 0 00-4.37-2.22zm-3.69 5.6a4.6 4.6 0 01.89-2.29 3.09 3.09 0 012.42-1.27 2.62 2.62 0 012.41 1.27 4.38 4.38 0 01.51 2.29zM66.82 17.05a4.68 4.68 0 001.39-3.69 4.49 4.49 0 00-1.39-3.43 5.65 5.65 0 00-3.56-1c-.89 0-1.78.13-2.54.13v9a10.68 10.68 0 002.16.13 6.27 6.27 0 003.94-1.14zm-4.58-6.87a3.48 3.48 0 011.15-.13 2.82 2.82 0 012.41.9 3.46 3.46 0 01.89 2.41 3.68 3.68 0 01-.89 2.8 3.44 3.44 0 01-2.54.89h-1zm11.05 1.15a3.25 3.25 0 00-2.41 1 3.47 3.47 0 00-.88 2.56 3.27 3.27 0 003.18 3.44 3.23 3.23 0 002.41-1 3.46 3.46 0 00.89-2.55 3.27 3.27 0 00-3.18-3.43zm1.27 5a1.39 1.39 0 01-1.27.76 1 1 0 01-1.39-.63 3 3 0 01-.38-1.53 3.43 3.43 0 01.38-1.65 1.45 1.45 0 011.39-.77 1.39 1.39 0 011.27.77 2.94 2.94 0 01.44 1.48 3 3 0 01-.44 1.53zm6.74 1.87l.76-2.93a11.21 11.21 0 00.51-2.16 12.07 12.07 0 00.51 2.16L84 18.2h1.4l2-6.62H86l-.76 3.06a15.09 15.09 0 00-.51 2.16 18.38 18.38 0 00-.51-2.16l-.89-3.06h-1.14l-.89 3.18c-.26.89-.38 1.53-.51 2.17a17.08 17.08 0 00-.51-2.17l-.76-3.18H78l1.9 6.62zm11.94-3.82v3.82h1.65v-3.95a2.8 2.8 0 00-.76-2.16 2.2 2.2 0 00-2.8-.25 2.18 2.18 0 00-.76.76l-.13-1h-1.27v6.6h1.4v-3.95a2.07 2.07 0 01.43-1.14 1.17 1.17 0 011-.51c.86 0 1.24.64 1.24 1.78zm4.19-5.85h1.4v9.67h-1.4zm6.99 2.8a3.25 3.25 0 00-2.42 1 3.47 3.47 0 00-.89 2.54 3.2 3.2 0 00.89 2.42 3 3 0 002.29 1 3.22 3.22 0 002.41-1 3.46 3.46 0 00.89-2.55 3.27 3.27 0 00-3.17-3.43zm1.27 5a1.41 1.41 0 01-1.27.76 1 1 0 01-1.4-.63 3 3 0 01-.38-1.53 3.43 3.43 0 01.38-1.65 1.46 1.46 0 011.4-.77 1.42 1.42 0 011.27.77 3 3 0 01.38 1.52 3.07 3.07 0 01-.38 1.49zm7.49 1.23l.13.77h1.27c0-.38-.13-.89-.13-1.53v-2.42c0-1.78-.89-2.67-2.54-2.67a4.38 4.38 0 00-2.29.51l.26 1a2.5 2.5 0 011.65-.51c.89 0 1.4.38 1.4 1.27v.13a3.52 3.52 0 00-2.67.38 2.09 2.09 0 00-1 1.91 1.92 1.92 0 00.51 1.4 2.11 2.11 0 001.53.63 2 2 0 001.88-.87zm-2.54-1.4c0-.89.76-1.27 2.41-1.27v1.27a1.05 1.05 0 01-.5.77 1.24 1.24 0 01-.89.25 1.93 1.93 0 01-.77-.25 1.12 1.12 0 01-.25-.77zm10.67-7.63v3.82a2 2 0 00-1.9-.9 2.53 2.53 0 00-2 .9 4.06 4.06 0 00-.89 2.54 3.68 3.68 0 00.77 2.42 2.34 2.34 0 002 .89 2.24 2.24 0 002.16-1.27l.12 1h1.28V8.27h-1.53zm0 5.85v1a1.59 1.59 0 01-.38 1.15 1.23 1.23 0 01-1.14.5 1.55 1.55 0 01-1.27-.63 2.68 2.68 0 01-.51-1.53 2.34 2.34 0 01.51-1.65 1.54 1.54 0 011.27-.64 1.44 1.44 0 011 .38 1.28 1.28 0 01.51.89zm10.8 3.95a3.23 3.23 0 002.41-1 3.46 3.46 0 00.89-2.55 3.27 3.27 0 00-3.17-3.43 3.25 3.25 0 00-2.42 1 3.47 3.47 0 00-.89 2.54 3.27 3.27 0 003.18 3.44zm-1.27-5.09a1.46 1.46 0 011.4-.77 1.42 1.42 0 011.27.77 3 3 0 01.38 1.52 3.07 3.07 0 01-.38 1.53 1.41 1.41 0 01-1.27.76 1 1 0 01-1.4-.63 3 3 0 01-.38-1.53 3.43 3.43 0 01.38-1.65zm8.16 1.01a2 2 0 01.38-1.14 1.15 1.15 0 011-.51c.89 0 1.28.64 1.28 1.78v3.82h1.52v-3.95a2.8 2.8 0 00-.76-2.16 2.2 2.2 0 00-2.8-.25 2.18 2.18 0 00-.76.76l-.13-1h-1.27v6.6H139zM150 16a2.3 2.3 0 00.51 1.78 1.73 1.73 0 001.39.51 2.8 2.8 0 001.15-.13v-1.11a5.38 5.38 0 01-.64.13c-.51 0-.89-.38-.89-1.27v-3.18h1.65v-1.15h-1.65V9.93l-1.52.38v1.27h-1v1.15h1zm9.29-1.49v3.69h1.4v-3.95a2.8 2.8 0 00-.76-2.16 2.11 2.11 0 00-1.53-.64 2.3 2.3 0 00-2 1.15V8.65h-1.3v9.55h1.4v-3.95c0-.25 0-.38.12-.5a1.5 1.5 0 011.4-1c.89-.02 1.27.61 1.27 1.76zm6.99 3.82a5.57 5.57 0 002.16-.38l-.26-1a4.05 4.05 0 01-1.77.25 1.74 1.74 0 01-1.4-.51 2.11 2.11 0 01-.64-1.52h4.32v-.64a3.55 3.55 0 00-.63-2 2.33 2.33 0 00-2-1 2.81 2.81 0 00-2.28 1A4 4 0 00163 15a3.06 3.06 0 003.3 3.31zM164.63 13a1.35 1.35 0 012.28 0c.26.26.26.64.26 1.15h-2.92a4 4 0 01.38-1.15z"></path></svg>
                </a>
                <a href="" className="mr-[1.875rem] mb-[.9375rem]" target="_blank">
<svg version="1.1" viewBox="0 0 187.87 54.73" className="w-[188px] h-[56px]" ><path fill="#fff" stroke="none" pid="0" d="M181.9 0H6a6 6 0 00-6 6v42.75a6 6 0 006 6h175.9a6 6 0 006-6V6a6 6 0 00-6-6zm4.58 48.75a4.69 4.69 0 01-4.7 4.7H5.84a4.77 4.77 0 01-4.7-4.7V6a4.7 4.7 0 014.7-4.71h175.94a4.7 4.7 0 014.7 4.71z"></path><path fill="#fff" stroke="none" pid="1" d="M114.45 35.13l1.91-.13 6-2.42a4.07 4.07 0 00-1.81-2.58 4.68 4.68 0 00-2.67-.77 5.73 5.73 0 00-5.88 5.9 6.32 6.32 0 002.67 5.34 5.78 5.78 0 003.43 1 6.49 6.49 0 002.54-.51 7.18 7.18 0 00.88-.51l1-1a7 7 0 01-2.92.77c-2.35 0-4.51-1.91-5.15-5.09zm-.13-1.4c0-2.8 1.91-3.57 2.93-3.57a2.52 2.52 0 012.54 2.17c0 .38-.26.51-.77.63l-4.7 2z"></path><path fill="#fff" stroke="none" pid="2" d="M110.13 39.33V25a2 2 0 011.15-1.66h-3.69l-1.9.89h2v15.61c0 .51-.13.63-.64 1.4h4.45l.89-.51c-.38 0-.89-.13-1.27-.13-.86-.13-.99-.38-.99-1.27z"></path><path fill="#fff" stroke="none" pid="3" d="M106.32 29.65h-5.21a7.19 7.19 0 00-4.57 1.4 4.49 4.49 0 00-1.65 3.44 3.94 3.94 0 004.19 3.95h.76a2 2 0 00-.25 1 2.87 2.87 0 00.76 1.79 12.48 12.48 0 00-4.83 1.14 3.7 3.7 0 00-2 3.06c0 1.91 1.78 3.69 5.46 3.69 4.45 0 6.74-2.42 6.74-4.84 0-1.78-1-2.67-2.16-3.56l-.89-.77a1.44 1.44 0 01-.64-1.14 1.93 1.93 0 01.76-1.27c1-.9 2.16-1.79 2.16-3.57a4.59 4.59 0 00-1.77-3.43h1.52zM104 45.18c0 1.53-1.28 2.8-3.82 2.8-2.79 0-4.44-1.27-4.44-3s1.65-2.42 2.16-2.68a8.58 8.58 0 012.67-.38h.63c2.07 1.35 2.8 1.99 2.8 3.26zM102 37a2.85 2.85 0 01-1.78.76c-2.16 0-3.17-2.8-3.17-4.45a3.33 3.33 0 01.51-1.91 2.41 2.41 0 011.78-.89c2.15 0 3.17 2.8 3.17 4.7A1.74 1.74 0 01102 37zm-14.35-7.6c-3.94 0-6.61 2.8-6.61 6.11a6 6 0 006.23 6 6.19 6.19 0 006.48-6.11 5.92 5.92 0 00-6.1-6zm2.79 10.05a3.54 3.54 0 01-2.66 1.28c-3 0-4.32-4.08-4.32-6.62a3.6 3.6 0 011.14-3.06 4 4 0 012.29-.89c3.17 0 4.19 4.2 4.19 6.49a3.55 3.55 0 01-.64 2.8zM74.06 29.4c-3.94 0-6.61 2.8-6.61 6.11a6 6 0 006.23 6 6.18 6.18 0 006.47-6.11 5.91 5.91 0 00-6.09-6zm2.79 10.05a3.55 3.55 0 01-2.67 1.28c-3 0-4.32-4.08-4.32-6.62A3.61 3.61 0 0171 31.05a3.69 3.69 0 012.28-.89c3.18 0 4.2 4.2 4.2 6.49a3.59 3.59 0 01-.63 2.8zm-17.15-2.8l3.56-.25v3.82a7.92 7.92 0 01-3 .63 8.46 8.46 0 01-8.56-8.65c0-4.2 2.79-7 6.61-7a6.39 6.39 0 015.08 2.29l-.64.89.89-.13 2-1.9a8.79 8.79 0 00-3.17-1.53 16.93 16.93 0 00-3.69-.51c-6.09 0-9.65 4.33-9.65 8.91 0 3.82 2.54 8.65 9.15 8.65 1.27 0 2.54-.25 3.93-.38l3.43-.76v-4.08c0-.12.13-.25.26-.38l.63-.63h-5.05zm74.44-7.38a5.45 5.45 0 00-4.14 2.17v-1.91h-1.27V46H130v-6.5a5.11 5.11 0 004.19 2.17c3.18 0 5.34-2.42 5.34-6.24s-2.09-6.16-5.39-6.16zM134 40.6a5.09 5.09 0 01-3.93-2.55v-5.21a5 5 0 013.93-2.42c2.67 0 4.2 2.16 4.2 5.09s-1.52 5.09-4.2 5.09zm7.38-15.53h1.27v16.42h-1.27zM161.71 40l-4.32-10.43H156l5.08 12-.89 2.16c-.51 1.15-1 1.4-1.78 1.4a2.88 2.88 0 01-1-.25l-.28 1.12a4.56 4.56 0 001.27.12 3.23 3.23 0 003-2.16l6.23-14.51h-1.53zm-7.25-.93v-5.85a3.52 3.52 0 00-1.27-2.93 6.26 6.26 0 00-6.85 0 2.93 2.93 0 00-1.28 2.42v.13h1.28a1.86 1.86 0 01.88-1.66 4.56 4.56 0 012.42-.63 3.43 3.43 0 012.41.76 2.36 2.36 0 01.89 2v1.52h-3.05a7.2 7.2 0 00-3.94 1 3 3 0 00-1.52 2.55 3.53 3.53 0 001 2.54 4 4 0 002.92.89 6.39 6.39 0 002.67-.63 6.08 6.08 0 001.9-1.66v.89a4.15 4.15 0 00.25 1h1.53a3.62 3.62 0 01-.26-1.14 4.23 4.23 0 00.02-1.2zm-1.39-1.14a4 4 0 01-1.65 1.91 4.72 4.72 0 01-2.67.76 3.16 3.16 0 01-2-.64 2 2 0 01-.77-1.65 2.26 2.26 0 011.15-1.91 5 5 0 012.92-.76h3zM53.48 15.78a4.26 4.26 0 003.3-1.53V11.2H53v1.27h2.41v1.28a2.9 2.9 0 01-1.9.76 2.78 2.78 0 01-2.8-2.93 2.78 2.78 0 012.8-2.93 3.16 3.16 0 012.16 1L56.78 9a3.83 3.83 0 00-3.3-1.66 4 4 0 00-4.19 4.2 4.07 4.07 0 004.19 4.24zm10.67-1.4h-4.19v-2.29h4.06v-1.27h-4.06V8.78h4.19V7.51h-5.59v8.02h5.59v-1.15zm3.94 1.15h1.39V8.78h2.42V7.51h-6.23v1.27h2.42v6.75zm8.76-8.02h1.4v8.02h-1.4zm5.34 8.02h1.39V8.78h2.54V7.51h-6.35v1.27h2.42v6.75zm12.57.25a4.07 4.07 0 004.24-4.2 4.19 4.19 0 10-8.38 0 4 4 0 004.14 4.2zm0-7.13a2.68 2.68 0 012.67 2.93 2.68 2.68 0 11-5.34 0 2.68 2.68 0 012.67-2.93zM102 9.8l4.19 5.73h1.4V7.51h-1.4v5.6L102 7.51h-1.39v8.02H102V9.8zM20.2 46.58l13.97-7.89-3.43-3.95L20.2 46.58zM34.3 29.4l-13.85-7.89 10.29 11.71 3.56-3.82zm6.35 3.6l-5.46-3.05-3.81 4.2 3.55 4.07L40.52 35c1.14-.51 1.14-1.53.13-2zm-22.1-12.13a1.29 1.29 0 00-.77 1.28v23.54c0 .76.26 1.15.77 1.27L30.11 34z"></path></svg>
                  </a>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Container>
      </Wrapper>
    </section>
    </>
  );
};

export default Banner;
