"use client";
import Image from "next/image";
import "./style.css";
import BannerImage from "../../../../assets/images/contact/contact_header.jpg";
import Wrapper from "@/app/components/ui/wrapper/Wrapper";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/app/components/ui/contianer/Container";
import { useThemeConfig } from "@/app/contexts/theme/ThemeConfigure";
import Link from "next/link";
import Facebook from '../../../../assets/icons/facebook.svg'
import Instagram from '../../../../assets/icons/instagram.svg'
import AnimatedTextCircle from "@/app/components/ui/animatedCricle/AnimatedTextCircle";
gsap.registerPlugin(ScrollTrigger);
const Banner = () => {
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
    setMenuColor(false);
    setHeaderMode(false);
    setTimeout(() => {
      setLoading(true);
      setImageLoading(true);
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
    
  }, []);
  return (
    <>
    <AnimatedTextCircle/>
    <section className="overflow-hidden relative pt-[16.25rem] md:pt-[23.125rem] pb-[10vw] md:pb-[6.25rem] bg-primary">

      <Wrapper className="sidebar-type-outline max-sm-tab:hidden lowercase  h-[calc(16.66667vw+30px)] max-lgl:text-[calc(2.0875rem+13.05vw)] flex items-center font-bold text-[11.875rem] absolute top-[-.9375rem] left-full z-50 min-w-[100vh] whitespace-nowrap pointer-events-none leading-none rotate-90 origin-top-left">
      experience
      </Wrapper>
      <Wrapper className="bg-white h-full w-[calc(16.66667%+30px)] right-0 top-0 absolute max-sm-tab:hidden"></Wrapper>
      <Wrapper className="md:w-[calc(83.33333%-30px)]">
        <Wrapper
          className={`trigger-image-animation-pts z-10 relative
              `}
        >
          <Wrapper className="pl-[1.875rem] lgl:pl-[calc(50vw-570px)] animation-trigger relative z-10">
            <p className="anim-title relative z-10">
              <span className="overflow-hidden block">
                <span
                  className={`lowercase block max-lgl:text-[calc(1.8375rem+10.05vw)] text-[9.375rem] leading-none font-bold ex-type-outline  duration-1000 ease-cubic-22 ${
                    loading ? "translate-y-[0%]" : "translate-y-[110%]"
                  }`}
                >
                 let&apos;s give

                </span>
              </span>
              <span className="overflow-hidden block">
                <span
                  className={`block max-lgl:text-[calc(1.8375rem+10.05vw)] ease-cubic-22 text-[9.375rem] leading-none font-bold text-white duration-1000 ${
                    loading ? "translate-y-[0%]" : "translate-y-[-110%]"
                  }`}
                >
              it a try


                </span>
              </span>
            </p>
            <Wrapper className='mx-[-15px]'>
            <Wrapper className='px-[15px] md:max-w-[50%]'>
            <p className="text-[1rem] md:text-[1.125rem]  delay-100 font-normal text-white leading-[1.8]">
              <strong>
            Would you like to experience the power of personal training? Would you like to experience how you too can make significant strides when it comes to your health? Which can. You will receive a no-obligation trial training from us - without any obligations. A world opens up for you!
            </strong>
                </p>
          </Wrapper>
          </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
   
    </section>
    </>
  );
};

export default Banner;
