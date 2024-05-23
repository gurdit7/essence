"use client";
import Image from "next/image";
import "./style.css";
import BannerImage from "../../../../../assets/images/eyes/eyes-on_header.jpg";
import Wrapper from "@/app/components/ui/wrapper/Wrapper";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/app/components/ui/contianer/Container";
import { useThemeConfig } from "@/app/contexts/theme/ThemeConfigure";
import Link from "next/link";
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

    const imageScale = gsap.timeline({
      scrollTrigger: {
        trigger: ".imageScale-animation",
        start: `20px top`,
        end: `bottom top`,
        scrub: 1,
        markers: false,
      },
    });
    imageScale.to(".the-bg-img", { scale: 1.15, y: "-150px" });
  }, []);
  return (
    <>
    <AnimatedTextCircle fill="#e9d1ca"/>
    <section className="overflow-hidden relative bg-dark z-[1]">
 
      <Wrapper className="sidebar-type-outline max-sm-tab:hidden lowercase  h-[calc(16.66667vw+30px)] max-lgl:text-[calc(2.0875rem+13.05vw)] flex items-center justify-center font-bold text-[11.875rem] absolute top-[-.9375rem] left-full z-50 min-w-[100vh] whitespace-nowrap pointer-events-none leading-none rotate-90 origin-top-left">
        essence: Eyes on
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
                  className={`lowercase block max-lgl:text-[calc(1.8375rem+10.05vw)] text-[9.375rem] leading-none font-bold app-type-outline  duration-1000 ease-cubic-22 ${
                    loading ? "translate-y-[0%]" : "translate-y-[110%]"
                  }`}
                >
                  essence
                </span>
              </span>
              <span className="overflow-hidden block">
                <span
                  className={`block max-lgl:text-[calc(1.8375rem+10.05vw)] ease-cubic-22 text-[9.375rem] leading-none font-bold text-primary duration-1000 ${
                    loading ? "translate-y-[0%]" : "translate-y-[-110%]"
                  }`}
                >
                  Eyes on
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
          />     </Wrapper>
        </Wrapper>
      </Wrapper>
      <Container>
        <Wrapper className="mx-[-15px] relative z-20 group trigger-training-pts">
          <Wrapper className="md:max-w-[58.33333%] w-full px-[15px]">
            <Wrapper className="p-[1.875rem] md:p-[3.125rem] md:mt-[-5rem] mt-[-6.25rem] before:absolute before:content before:w-full before:top-0 before:left-0 before:h-[7.5rem] before:bg-dark">
              <Wrapper className="markdown relative z-10">
                <p className="text-[1rem] md:text-[1.125rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-100 font-normal text-white leading-[1.8]">
                  Want to see your technique continue to improve? Which can.
                  With our innovative fitlab: Eyes On system you use cutting
                  edge technology to improve your training!
                </p>

                <Wrapper className="mt-[1.2em] text-primary font-bold leading-[1.2] text-[1.5625rem] mb-[.8em]">
                  improve your technique? eyes on!
                </Wrapper>
                <p className="text-[1rem] md:text-[1.125rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-100 font-normal text-white leading-[1.8]">
                  You can improve what you see. If you can see with your own
                  eyes how you train, you can adjust your techniques and sharpen
                  them where necessary. With our innovative fitlab: Eyes On
                  system you can film your own workout. The footage is uploaded
                  to your personal environment in the fitlab: app.
                </p>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Container>
      <Wrapper className="relative z-[1] imageScale-animation">
        <Wrapper className="mdm:mt-[-18.75rem] mdm:pt-[43.75rem] pt-[30rem] mt-[-8.125rem]">
          <Container>
            <Wrapper className="md:px-[3.125rem] max-lgl:p-[1.875rem]">
              <Wrapper className="mx-[-15px]">
                <Wrapper className="md:max-w-[41.66667%] px-[15px]">
                  <Wrapper className="text-primary font-bold leading-[1.2] text-[1.5625rem] mb-[.8em]">
                  for your own development
                  </Wrapper>
                  <p className="text-[1rem] duration-500 group-[.is-shown]:opacity-100 delay-100 font-normal text-white leading-[1.8]">
                  In the app you can view the footage, discuss it with your trainer and use it for your own development. And just to be clear: the camera is of course only on when you turn it on!
                  </p>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Container>
        </Wrapper>
        <Wrapper className="absolute md:w-[calc(83.33333%-30px)] z-[-1] bg-contain bg-no-repeat top-0 left-0 bottom-0 the-bg-img w-full"></Wrapper>
        <Container className=" py-[10vw] lgl:py-[6.25rem]">
          <Wrapper className="md:px-[3.125rem] max-sm-tab:px-[30px]">
            <Wrapper className="mx-[-15px]">
              <Wrapper className="md:max-w-[83.33333%] px-[15px]">
                <span className="overflow-hidden block">
                  <span
                    className={`lowercase block max-lgl:text-[calc(1.525rem+6.3vw)] text-[6.25rem] leading-none font-bold app-type-outline  duration-1000 ease-cubic-22 ${
                      loading ? "translate-y-[0%]" : "translate-y-[110%]"
                    }`}
                  >
                    movie time for

                  </span>
                </span>
                <span className="overflow-hidden block">
                  <span
                    className={`lowercase block mb-[.5em] max-lgl:text-[calc(1.525rem+6.3vw)] text-[6.25rem] leading-none font-bold text-primary duration-1000 ease-cubic-22 ${
                      loading ? "translate-y-[0%]" : "translate-y-[110%]"
                    }`}
                  >
                   a good technique

                  </span>
                </span>

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
