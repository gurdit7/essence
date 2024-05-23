"use client";
import Image from "next/image";
import "./style.css";
import Wrapper from "@/app/components/ui/wrapper/Wrapper";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/app/components/ui/contianer/Container";
import { useThemeConfig } from "@/app/contexts/theme/ThemeConfigure";
import Link from "next/link";
import AnimatedTextCircle from "@/app/components/ui/animatedCricle/AnimatedTextCircle";
import { usePathname } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);
const Banner = ({ user }) => {
  const path = usePathname();
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const { setMenuColor, progress, setHeaderMode, pageChanger, setMenuBgColor } =
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
    const panels = gsap.utils.toArray(".trigger-training-team");
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
          setMenuBgColor(false)
        },
        onEnterBack: ({ progress, direction, isActive }) => {
          setMenuColor(false);
          setMenuBgColor(false)
        },
        onLeave: ({ progress, direction, isActive }) => {
          setMenuColor(true);
          setMenuBgColor(true)
        },
        onLeaveBack: ({ progress, direction, isActive }) => {
          setMenuColor(false);
          setMenuBgColor(false)
        },
      },
    });

  }, []);
  useEffect(() => {
    const panels = gsap.utils.toArray(".trigger-animation-section-2");
    panels.forEach((panel, index) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "-50% center",
          end: "top top",
          scrub: 1,
          markers: false,
          onEnter: ({ progress, direction, isActive }) => {
            panel?.classList.add("is-shown");
          },
        },
      });
    });
  }, []);
  return (
    <>
    <AnimatedTextCircle/>
      <section className="overflow-hidden relative pb-[6.25rem] bg-secondary-200">
  
        <Wrapper className="sidebar-type-outline max-sm-tab:hidden lowercase  h-[calc(16.66667vw+30px)] max-lgl:text-[calc(2.0875rem+13.05vw)] flex items-center font-bold text-[11.875rem] absolute top-[-.9375rem] left-full z-50 min-w-[100vh] whitespace-nowrap pointer-events-none leading-none rotate-90 origin-top-left">
          {user.name}
        </Wrapper>
        <Wrapper className="bg-white h-full w-[calc(16.66667%+30px)] right-0 top-0 absolute max-sm-tab:hidden"></Wrapper>
        <Wrapper className="md:w-[calc(83.33333%-30px)]">
          <Wrapper className="bg-primary h-[16.25rem] md:h-[23.125rem] w-full"></Wrapper>
          <Wrapper
            className={`trigger-image-animation-pts z-10 relative h-[35.625rem] md:h-[50rem]
              `}
          >
            <Wrapper className="pl-[1.875rem] lgl:pl-[calc(50vw-570px)] animation-trigger relative z-10">
              <p className="anim-title relative z-10 translate-y-[-50%]">
                <span className="overflow-hidden block">
                  <span
                    className={`lowercase block max-lgl:text-[calc(1.8375rem+10.05vw)] text-[9.375rem] leading-none font-bold sidebar-type-outline-white  duration-1000 ease-cubic-22 ${
                      loading ? "translate-y-[0%]" : "translate-y-[110%]"
                    }`}
                  >
                    member
                  </span>
                </span>
                <span className="overflow-hidden block">
                  <span
                    className={`block max-lgl:text-[calc(1.8375rem+10.05vw)] ease-cubic-22 text-[9.375rem] leading-none font-bold text-primary duration-1000 ${
                      loading ? "translate-y-[0%]" : "translate-y-[-110%]"
                    }`}
                  >
                    {user.name}
                  </span>
                </span>
              </p>
            </Wrapper>

            <Image
              className={`object-cover absolute top-0 left-0 w-full h-full duration-1000 ease-cubic-22 delay-[.3s]`}
              alt="Banner Image"
              src={user.mainImage?.src}
              sizes="100vw"
              width={user.mainImage?.width}
              height={user.mainImage?.height}
            />
          </Wrapper>
        </Wrapper>
        <Container>
          <Wrapper className="mx-[-15px] relative z-20 group trigger-training-team">
            <Wrapper className="md:max-w-[58.33333%] w-full px-[15px]">
              <Wrapper className="p-[1.875rem] md:p-[3.125rem] md:mt-[-5rem] mt-[-6.25rem] bg-white">
                <Wrapper className="markdown">
                  {user?.section2?.heading && (
                    <p className="text-[calc(1.05625rem+.675vw)] md:text-[1.5625rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-75 font-normal text-black leading-[1.2]">
                      <strong>{user?.section2?.heading}</strong>
                    </p>
                  )}
                  {user?.section2?.strong && (
                    <p className="text-[1rem] md:text-[1.125rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-100 font-normal text-black leading-[1.8]">
                      <strong>{user?.section2?.strong}</strong>
                    </p>
                  )}
                  <p
                    dangerouslySetInnerHTML={{
                      __html: user?.section2?.content,
                    }}
                    className="text-[1rem] md:text-[1.125rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-100 font-normal text-black leading-[1.8]"
                  ></p>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Container>
      </section>
      <section className="bg-secondary-200 relative">
        <Wrapper className="bg-white h-full w-[calc(16.66667%+30px)] right-0 top-0 absolute max-sm-tab:hidden"></Wrapper>
        <Container>
          <Wrapper className="mx-[-15px] relative z-20 trigger-animation-section-2 group">
            <Wrapper className="md:max-w-[66.66667%] w-full px-[15px]">
              <h2 className="h3 anim-title is-shown px-[1.875rem] pb-[1.875rem] md:pb-[3.75rem] md:px-[3.125rem] mb-0">
                {user?.section3.map((item, index) => {
                  return (
                    <span key={index} className="anim-title__wrapper overflow-hidden block leading-none">
                      <span className="max-lgl:text-[calc(1.3375rem+4.05vw)] block group-[.is-shown]:translate-y-[0%] leading-none translate-y-[110%] ease-cubic-22 duration-1000 transition-transform text-[4.375rem] text-primary font-bold lowercase">
                        {item}
                      </span>
                    </span>
                  );
                })}
              </h2>
            </Wrapper>
          </Wrapper>
        </Container>
      </section>
      <section className="bg-secondary-200 relative">
        <Wrapper className="bg-white h-full w-[calc(16.66667%+30px)] right-0 top-0 absolute max-sm-tab:hidden"></Wrapper>
        <Container>
          <Wrapper className="mx-[-15px] relative z-20 trigger-animation-section-2 group">
            <Wrapper className="md:max-w-[66.66667%]  md:block px-[15px] w-full">
              <Wrapper
                className="image-wrapper relative overflow-hidden  mb-[1.875rem] md:mb-[3.75rem] 
              before:content before:bg-primary
              before:absolute before:top-0 before:h-full before:w-full before:left-0 before:z-[1] before:duration-[1s] before:ease-cubic-22 before:delay-[.3s]
              before:translate-x-[0%]
              group-[.is-shown]:before:translate-x-[-101%]"
              >
                <Image
                  className="scale-[1.3] duration-1000  h-[25.9375rem] ease-cubic-22 delay-[.3s] group-[.is-shown]:scale-[1]"
                  alt="Personal Training"
                  src={user?.secondImage.src}
                  sizes="100vw"
                  width={user?.secondImage.width}
                  height={user?.secondImage.height}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Container>
        <Container>
          <Wrapper className="mx-[-15px] relative z-20 trigger-animation-section-2 group">
            <Wrapper className="md:max-w-[66.66667%]  md:block px-[15px] w-full">
              <Wrapper className="image-wrapper relative overflow-hidden md:px-[50px] px-[30px]   mb-[1.875rem] md:mb-[3.75rem] ">
                <p
                  dangerouslySetInnerHTML={{
                    __html: user?.secondImage?.content,
                  }}
                  className="text-[1rem] md:text-[1rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-100 font-normal text-black leading-[1.8]"
                ></p>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Container>
        <Container>
          <Wrapper className="mx-[-15px] relative z-20 trigger-animation-section-2 group">
            <Wrapper className="md:max-w-[66.66667%]  md:block px-[15px] w-full">
              <Wrapper
                className="image-wrapper relative overflow-hidden
              before:content before:bg-primary  mb-[1.875rem] md:mb-[3.75rem] 
              before:absolute before:top-0 before:h-full before:w-full before:left-0 before:z-[1] before:duration-[1s] before:ease-cubic-22 before:delay-[.3s]
              before:translate-x-[0%]
              group-[.is-shown]:before:translate-x-[-101%]"
              >
                <Image
                  className="scale-[1.3] duration-1000 ease-cubic-22 h-[25.9375rem] delay-[.3s] group-[.is-shown]:scale-[1]"
                  alt="Personal Training"
                  src={user?.thirdImage.src}
                  sizes="100vw"
                  width={user?.thirdImage.width}
                  height={user?.thirdImage.height}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Container>
        <Container>
          <Wrapper className="mx-[-15px] relative z-20 trigger-animation-section-2 group">
            <Wrapper className="md:max-w-[66.66667%]  md:block px-[15px] w-full">
              <Wrapper className="image-wrapper relative overflow-hidden md:px-[50px] px-[30px]   pb-[1.875rem] md:pb-[3.75rem] ">
                <p
                  dangerouslySetInnerHTML={{
                    __html: user?.thirdImage?.content,
                  }}
                  className="text-[1rem] md:text-[1rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-100 font-normal text-black leading-[1.8]"
                ></p>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Container>
      </section>
    </>
  );
};

export default Banner;
