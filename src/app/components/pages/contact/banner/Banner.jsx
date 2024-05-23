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
    pageRef?.current?.ownerDocument?.documentElement?.setAttribute('id','team');
    setMenuColor(true);
    setHeaderMode(true);
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
    const imageAnimation = gsap.utils.toArray(".trigger-training-pts");
    gsap.timeline({
      scrollTrigger: {
        trigger: imageAnimation[0],
        start: "100px center",
        end: "bottom 100px",
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
    <>
    <AnimatedTextCircle/>
    <section className="overflow-hidden relative pb-[6.25rem] bg-secondary-200" ref={pageRef}>

      <Wrapper className="sidebar-type-outline max-sm-tab:hidden lowercase  h-[calc(16.66667vw+30px)] max-lgl:text-[calc(2.0875rem+13.05vw)] flex items-center font-bold text-[11.875rem] absolute top-[-.9375rem] left-full z-50 min-w-[100vh] whitespace-nowrap pointer-events-none leading-none rotate-90 origin-top-left">
      contact
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
                  className={`lowercase block max-lgl:text-[calc(1.8375rem+10.05vw)] text-[9.375rem] leading-none font-bold sidebar-type-outline  duration-1000 ease-cubic-22 ${
                    loading ? "translate-y-[0%]" : "translate-y-[110%]"
                  }`}
                >
                  contact
                </span>
              </span>
              <span className="overflow-hidden block">
                <span
                  className={`block max-lgl:text-[calc(1.8375rem+10.05vw)] ease-cubic-22 text-[9.375rem] leading-none font-bold text-primary duration-1000 ${
                    loading ? "translate-y-[0%]" : "translate-y-[-110%]"
                  }`}
                >
                  essence
                </span>
              </span>
            </p>
          </Wrapper>

          <Image
            className={`object-cover absolute top-0 left-0 w-full h-full duration-1000 ease-cubic-22 delay-[.3s]`}
            alt="Banner Image"
            src={BannerImage.src}
            sizes="100vw"
            width={BannerImage.width}
            height={BannerImage.height}
          />
        </Wrapper>
      </Wrapper>
      <Container>
        <Wrapper className="mx-[-15px] relative z-20 group trigger-training-pts">
          <Wrapper className="md:max-w-[58.33333%] w-full px-[15px]">
            <Wrapper className="p-[1.875rem] md:p-[3.125rem] md:mt-[-5rem] mt-[-6.25rem] bg-white">

              <Wrapper className="markdown">
          
                <p className="text-[1rem] md:text-[1.125rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-100 font-normal text-black leading-[1.8]">
                Are you interested in essence and would you like to experience what it means to work on your personal goals? Please request more information without obligation and we will contact you.

                </p>
                <p className="text-[1rem] md:text-[1.5625rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-75 font-normal text-black leading-[1.2]">
                  <strong>
                  Getfertplein 125<br/>
7512 HK Enschede<br/>
<a href="tel:088 90 90 806">088 90 90 806</a><br/>
<a href="mailto:info@essence.nl">info@essence.nl</a><br/>
                  </strong>
                </p>
                <div className="socials text-base flex items-center max-lgl:flex-col max-sm-tab:flex-row">
                find us on
            <a
              href="https://www.facebook.com/essence.nl"
              target="_blank"
              rel="noreferrer"
              className="socials__link  mx-[.625rem] block"
            >
              <Image
              src={Facebook.src}
              alt="Facebook"
              width={Facebook.width}
              height={Facebook.height}
              className="w-5 h-5"
              />
            </a>
            <a
              href="https://www.instagram.com/essence.nl"
              target="_blank"
              rel="noreferrer"
              className="socials__link mx-[.625rem] block"
            >
<Image
              src={Instagram.src}
              alt="Instagram"
              width={Instagram.width}
              height={Instagram.height}
              className="w-5 h-5"
              />
            </a>
          </div>
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
