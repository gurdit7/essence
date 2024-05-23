"use client";
import Image from "next/image";
import "./style.css";
import Wrapper from "@/app/components/ui/wrapper/Wrapper";
import { useEffect, useRef, useState } from "react";
import Caroline from "../../../../assets/images/team/caroline-member.jpg";
import Daisy from "../../../../assets/images/team/daisy-member.jpg";
import Ringo from "../../../../assets/images/team/ringo-member.jpg";
import Sander from "../../../../assets/images/team/sander-member.jpg";
import Isolde from "../../../../assets/images/team/isolde-member.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useThemeConfig } from "@/app/contexts/theme/ThemeConfigure";
import Link from "next/link";
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
    const panels = gsap.utils.toArray(".team-item-card");
    panels.forEach((panel, index) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top center",
          end: "bottom top",
          scrub: 1,
          markers: false,
          onEnter: ({ progress, direction, isActive }) => {
            panel.classList.add("is-shown");
          },
        },
      });
    });
  }, []);

  const team = [
    {
      link: "/pages/team/caroline",
      bgColor: "bg-black",
      name: "caroline",
      image: Caroline,
      strokeColor: "white-stroke",
    },
    {
      link: "/pages/team/isolde",
      bgColor: "bg-white",
      name: "isolde",
      image: Isolde,
      strokeColor: "dark-stroke",
    },
    {
      link: "/pages/team/ringo",
      bgColor: "bg-black",
      name: "ringo",
      image: Ringo,
      strokeColor: "white-stroke",
    },
    {
      link: "/pages/team/daisy",
      bgColor: "bg-black",
      name: "daisy",
      image: Daisy,
      strokeColor: "white-stroke",
    },
    {
      link: "/pages/team/sander",
      bgColor: "bg-black",
      name: "sander",
      image: Sander,
      strokeColor: "white-stroke",
    },
  ];
  return (
    <>
    <AnimatedTextCircle/>
    <section className="overflow-hidden relative pt-[16.25rem] md:pt-[23.125rem] pb-[10vw] md:pb-[6.25rem] bg-primary" ref={pageRef}>
  
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
                  essence
                </span>
              </span>
              <span className="overflow-hidden block">
                <span
                  className={`block max-lgl:text-[calc(1.8375rem+10.05vw)] ease-cubic-22 text-[9.375rem] leading-none font-bold text-white duration-1000 ${
                    loading ? "translate-y-[0%]" : "translate-y-[-110%]"
                  }`}
                >
                  team
                </span>
              </span>
            </p>
            <Wrapper className="mx-[-15px]">
              <Wrapper className="px-[15px] md:max-w-[50%]">
                <p className="text-[1rem] md:text-[1.125rem]  delay-100 font-normal text-white leading-[1.8]">
                  Everyone has their own reason for registering with essence.
                  Building muscle, losing weight or improving fitness. Age plays
                  no role in this. Read some stories from our members below and
                  be inspired.
                </p>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper className="relative z-10 lgl:max-w-[calc(100vw-16.66667%-1.875rem)] lgl:pl-[calc(50vw-35.625rem)] md:width-[calc(100vw-16.66667%-1.875rem)]">
        {team.map((item, index) => {
          return <TeamCard item={item} key={index} pageChanger={pageChanger} />;
        })}
      </Wrapper>
    </section>
    </>
  );
};

export default Banner;

const TeamCard = ({ item, pageChanger }) => {
  return (
    <Link
      href={item?.link}
      onClick={pageChanger}
      className={
        item.bgColor +
        " " +
        "flex team-item-card group relative w-full p-[1.875rem] mt-[3.125rem] md:h-[23.75rem] mb-[1.25rem] h-[17.5rem] overflow-hidden  items-end"
      }
    >
      <Wrapper className="pointer-events-none bg-secondary-900 w-full h-full absolute top-0 left-0 z-10 duration-1000 ease-cubic-22 group-[.is-shown]:translate-x-[-100%]"></Wrapper>
      <Wrapper className="pointer-events-none h-full w-full absolute duration-[.8s] ease-cubic-22 right-0 top-0 group-hover:translate-x-[-5%]">
        <Image
          alt={item?.name}
          src={item.image.src}
          sizes="100vw"
          width={item.image.width}
          height={item.image.height}
          className="h-full w-full object-contain object-right scale-[1.3] duration-1000 ease-cubic-22 group-[.is-shown]:scale-[1]"
        />
      </Wrapper>
      <Wrapper className='pointer-events-none'>
        <Wrapper className="overflow-hidden">
          <span
            data-text="Member"
            className={
              item.strokeColor +
              " member-card__title lowercase max-lgl:text-[calc(1.3375rem+4.05vw)]  text-[4.375rem] group-[.is-shown]:translate-y-[0%] delay-700 leading-none block duration-500 translate-y-[100%] font-bold "
            }
          >
            Member
          </span>
        </Wrapper>
        <Wrapper className="overflow-hidden">
          <span
            data-text={item?.name}
            className="member-card__title max-lgl:text-[calc(1.3375rem+4.05vw)] lowercase text-primary text-[4.375rem] leading-none block group-[.is-shown]:translate-y-[0%] delay-700 duration-500 translate-y-[100%] font-bold"
          >
            {item?.name}
          </span>
        </Wrapper>
      </Wrapper>
    </Link>
  );
};
