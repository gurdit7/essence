"use client";
import Image from "next/image";
import "./style.css";
import BannerImage from "../../../../assets/images/about/about_image.jpg";
import Wrapper from "@/app/components/ui/wrapper/Wrapper";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useThemeConfig } from "@/app/contexts/theme/ThemeConfigure";
import Link from "next/link";
import Container from "@/app/components/ui/contianer/Container";
import { links } from "@/app/data/default";
import AnimatedTextCircle from "@/app/components/ui/animatedCricle/AnimatedTextCircle";
gsap.registerPlugin(ScrollTrigger);
const Banner = () => {

  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const { progress, pageChanger } =
    useThemeConfig();
  useEffect(() => {
    setTimeout(() => {
      setLoading(progress);
    }, 500);
  }, [progress]);
  useEffect(() => {
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
      <AnimatedTextCircle />
      <section className="overflow-hidden relative pt-[16.25rem] md:pt-[23.125rem] bg-primary" >

        <Wrapper className="sidebar-type-outline max-sm-tab:hidden lowercase  h-[calc(16.66667vw+30px)] max-lgl:text-[calc(2.0875rem+13.05vw)] flex items-center font-bold text-[11.875rem] absolute top-[-.9375rem] left-full z-50 min-w-[100vh] whitespace-nowrap pointer-events-none leading-none rotate-90 origin-top-left">
          about
        </Wrapper>
        <Wrapper className="bg-white h-full w-[calc(16.66667%+30px)] right-0 top-0 z-[1] absolute max-sm-tab:hidden"></Wrapper>
        <Wrapper className="md:w-[calc(83.33333%-30px)]">
          <Wrapper
            className={`trigger-image-animation-pts z-10 relative
              `}
          >
            <Wrapper className="px-[1.875rem] lgl:pl-[calc(50vw-570px)] animation-trigger relative z-10">
              <p className="anim-title relative z-10">
                <span className="overflow-hidden block">
                  <span
                    className={`lowercase block max-lgl:text-[calc(1.8375rem+10.05vw)] text-[9.375rem] leading-none font-bold ex-type-outline  duration-1000 ease-cubic-22 ${loading ? "translate-y-[0%]" : "translate-y-[110%]"
                      }`}
                  >
                    make it
                  </span>
                </span>
                <span className="overflow-hidden block">
                  <span
                    className={`block max-lgl:text-[calc(1.8375rem+10.05vw)] ease-cubic-22 text-[9.375rem] leading-none font-bold text-white duration-1000 ${loading ? "translate-y-[0%]" : "translate-y-[-110%]"
                      }`}
                  >
                    personal
                  </span>
                </span>
              </p>
              <Wrapper className="mx-[-15px]">
                <Wrapper className="px-[15px] md:max-w-[50%] trigger-animation-sections-about group">
                  <h5 className="h5 text-white mt-[30px] max-lgl:font-[calc(1.05625rem+.675vw)]">
                    personal trainer enschede
                  </h5>
                  <p className="text-[1rem] md:text-[1.125rem]  delay-100 font-normal text-white leading-[1.8] duration-500 opacity-0 group-[.is-shown]:opacity-100">
                    <strong>
                      essence: is a &apos;members only&apos; club. As a member you have
                      access to our facilities, knowledge and trainers. With our
                      personal guidance and services such as Eyes On and our app
                      you get the best out of yourself!
                    </strong>
                  </p>
                  <h5 className="h5 text-white mt-[30px] max-lgl:font-[calc(1.05625rem+.675vw)]  duration-500 opacity-0 group-[.is-shown]:opacity-100">back to basics</h5>
                  <p className="text-[1rem] md:text-[1.125rem]  delay-100 font-normal text-white leading-[1.8]  duration-500 opacity-0 group-[.is-shown]:opacity-100">
                    Training at essence: is not just a workout. We go back to
                    basics and build from there. With all aspects that get you
                    in top shape. So not just the training form and movement
                    that suits you. Lifestyle elements and a healthy diet are
                    also part of this. Everybody is different. Together we
                    develop your personal fit lab: success formula.
                  </p>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Wrapper className="mt-[3.125rem] trigger-animation-section-2 group relative lgl:max-w-[calc(100vw-16.66667%-1.875rem)] lgl:pl-[calc(50vw-35.625rem)] md:width-[calc(100vw-16.66667%-1.875rem)]">
          <Wrapper className="image-wrapper relative overflow-hidden">
            <Image
              className="scale-[1.3] duration-1000  md:h-[37.5rem] ease-cubic-22 delay-[.3s] group-[.is-shown]:scale-[1] h-[15.625rem]"
              alt="Personal Training"
              src={BannerImage.src}
              sizes="100vw"
              width={BannerImage.width}
              height={BannerImage.height}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Wrapper>
        </Wrapper>
      </section>
      <section className="overflow-hidden relative md:py-[6.25rem] py-[10vw] bg-secondary-900 trigger-animation-sections-about group">
        <Container>
          <Wrapper className='mx-[-15px]'>
            <Wrapper className='px-[15px] md:max-w-[58.33333%]'>
              <h5 className="h5 text-primary mt-[.8em] max-lgl:text-[calc(1.05625rem+.675vw)]  duration-500 opacity-0 group-[.is-shown]:opacity-100">knowledge is power</h5>
              <p className="text-[1rem] md:text-[1.125rem]  delay-100 font-normal text-primary leading-[1.8]  duration-500 opacity-0 group-[.is-shown]:opacity-100">
                Exercising is good for you. But then you have to train and
                exercise the right way. In combination with a lifestyle and diet
                that is best for your body. essence: creates a personal program
                for you that is based on a scientific approach. We can use what
                we can measure and explain to get you in shape. Proven that it
                works? Then it works for you too.
                <br />
                <br />
                However and with whom you want to train: essence: has various
                programs and options for you to help you get the best out of
                yourself.
              </p>
            </Wrapper>
            <Wrapper className="md:max-w-[91.66667%] md:mt-[3.125rem] px-[15px] w-full trigger-animation-section-2 group">
              <ul>
                {links.map((item, index) => {
                  return (
                    <li key={index} className="overflow-hidden">
                      <Link
                        onClick={pageChanger}
                        href={item.link}
                        data-text={item.label}
                        className=" max-lgl:text-[calc(1.3375rem+4.05vw)] text-[4.375rem] inline-block group-[.is-shown]:translate-y-[0%] translate-y-[101%] ease-cubic-22 duration-1000 delay-[.15s] relative font-bold leading-[1.2] stroke-text-primary lowercase before:content-[attr(data-text)] before:absolute before:top-[0px] before:left-0 before:whitespace-nowrap  before:max-w-0 before:duration-[.8s] before:ease-cubic-22 before:transition-all before:overflow-hidden hover:before:max-w-full"
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </Wrapper>
          </Wrapper>
        </Container>
        <Wrapper className="bg-white h-full w-[calc(16.66667%+30px)] right-0 top-0 absolute max-sm-tab:hidden"></Wrapper>
      </section>
    </>
  );
};

export default Banner;
