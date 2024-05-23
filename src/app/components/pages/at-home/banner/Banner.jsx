"use client";
import Image from "next/image";
import "./style.css";
import BannerImage from "../../../../assets/images/duo-personal-training-enschede/duo-training_header.jpg";
import Wrapper from "@/app/components/ui/wrapper/Wrapper";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/app/components/ui/contianer/Container";
import { useThemeConfig } from "@/app/contexts/theme/ThemeConfigure";
import AnimatedTextCircle from "@/app/components/ui/animatedCricle/AnimatedTextCircle";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);
const Banner = () => {
  const path = usePathname();
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const { setMenuColor, progress, setHeaderMode, setMenuBgColor } =
    useThemeConfig();
  useEffect(() => {
    setTimeout(() => {
      setLoading(progress);
    }, 500);
  }, [progress]);
  useEffect(() => {
    setMenuColor(true);
    setHeaderMode(true);
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
        onLeaveBack: ({ progress, direction, isActive }) => {},
      },
    });
if(path === '/pages/at-home'){
    const imageAnimation = gsap.utils.toArray(".trigger-image-animation-pts");
    gsap.timeline({
      scrollTrigger: {
        trigger: imageAnimation[0],
        start: "top top",
        end: "bottom 100px",
        scrub: 1,
        markers: false,
        onEnter: ({ progress, direction, isActive }) => {
          setMenuColor(false);
          setMenuBgColor(false);
        },
        onEnterBack: ({ progress, direction, isActive }) => {
          setMenuColor(false);
          setMenuBgColor(false);
        },
        onLeave: ({ progress, direction, isActive }) => {
          setMenuColor(true);
          setMenuBgColor(true);
        },
        onLeaveBack: ({ progress, direction, isActive }) => {
          setMenuColor(true);
          setMenuBgColor(true);
        },
      },
    });
  }
  }, []);
  return (
    <>
      <AnimatedTextCircle />
      <section className="overflow-hidden relative">
        <Wrapper className="sidebar-type-outline max-sm-tab:hidden lowercase  h-[calc(16.66667vw+30px)] max-lgl:text-[calc(2.0875rem+13.05vw)] flex items-center font-bold text-[11.875rem] absolute top-[-.9375rem] left-full z-50 min-w-[100vh] whitespace-nowrap pointer-events-none leading-none rotate-90 origin-top-left">
          at home
        </Wrapper>
        <Wrapper className="bg-white h-full w-[calc(16.66667%+30px)] right-0 top-0 absolute max-sm-tab:hidden"></Wrapper>
        <Wrapper className="md:w-[calc(83.33333%-30px)]">
          <Wrapper className="bg-secondary-100 h-[16.25rem] md:h-[23.125rem] w-full"></Wrapper>
          <Wrapper
            className={`trigger-image-animation-pts z-10 relative h-[35.625rem] md:h-[50rem] 
              `}
          >
            <Wrapper className="pl-[1.875rem] lgl:pl-[calc(50vw-570px)] animation-trigger relative z-10">
              <p className="anim-title relative z-10 translate-y-[-50%]">
                <span className="overflow-hidden block">
                  <span
                    className={`lowercase block max-lgl:text-[calc(1.8375rem+10.05vw)] text-[9.375rem] leading-none font-bold sidebar-type-outline  duration-1000 ease-cubic-22 ${
                      loading ? "translate-y-[0%]" : "translate-y-[110%]"
                    }`}
                  >
                    at
                  </span>
                </span>
                <span className="overflow-hidden block">
                  <span
                    className={`block max-lgl:text-[calc(1.8375rem+10.05vw)] ease-cubic-22 text-[9.375rem] leading-none font-bold text-primary duration-1000 ${
                      loading ? "translate-y-[0%]" : "translate-y-[-110%]"
                    }`}
                  >
                    home
                  </span>
                </span>
              </p>
            </Wrapper>
            <Wrapper className='overflow-hidden absolute top-0 w-full h-full left-0 bg-dark'>
            <iframe
              src="https://player.vimeo.com/video/404515682?loop=1&amp;background=1&amp;app_id=122963"
              width="426"
              height="240"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="Fitlab at home - Hero"
              data-ready="true"
              className="absolute top-0 left-1/2 w-[100vw] min-w-[177.77vh] h-[56.25vw] min-h-[100vh] translate-x-[-50%]"
      
            ></iframe></Wrapper>
          </Wrapper>
        </Wrapper>
        <Container>
          <Wrapper className="mx-[-15px] relative z-20 group trigger-training-pts">
            <Wrapper className="md:max-w-[58.33333%] w-full px-[15px]">
              <Wrapper className="p-[1.875rem] md:p-[3.125rem] md:mt-[-5rem] mt-[-6.25rem] bg-white">
                <h1 className="text-[1.5625rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 mb-[.5em] leading-none font-bold lowercase text-dark max-sm-tab:text-[calc(1.05625rem+.675vw)]">
                  personal training at home
                </h1>
                <Wrapper className="markdown">
                  <p className="text-[1rem] md:text-[1.125rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-75 font-normal text-black leading-[1.8]">
                    <strong>
                      Gym closed? We come to you online. No equipment is
                      required, our personal trainers are guaranteed to provide
                      you with a training of the highest level.
                    </strong>
                  </p>
                  <p className="text-[1rem] md:text-[1.125rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-100 font-normal text-black leading-[1.8]">
                    Essence is everywhere! No babysitter, travel a lot or need
                    to train at home? We ensure that you can train anytime,
                    anywhere. We will work on your physical and mental goals
                    through an online environment.
                  </p>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Container>
      </section>
    </>
  );
};

export default Banner;
