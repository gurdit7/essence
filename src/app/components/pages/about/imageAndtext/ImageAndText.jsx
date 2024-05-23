"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "./style.css";
import Image from "next/image";
import FirstSlide from "../../../../assets/images/Home/slider-home-1-essence.jpg";
import SecondSlide from "../../../../assets/images/Home/slider-1-essence.jpg";
import ThirdSlide from "../../../../assets/images/Home/slider-2-essence.jpg";
import FourthSlide from "../../../../assets/images/Home/slider-4-essence.jpg";
import FifthSlide from "../../../../assets/images/Home/slider-home-4-essence.jpg";
import Wrapper from "@/app/components/ui/wrapper/Wrapper";
import Container from "@/app/components/ui/contianer/Container";
import Link from "next/link";
import { useThemeConfig } from "@/app/contexts/theme/ThemeConfigure";
import { useState } from "react";

const ImageAndText = () => {
  const { pageChanger } = useThemeConfig();
  const [index, setIndex] = useState();
  const accordion = (e) => {
    setIndex(e.target.dataset.index);
  };
  return (
    <Wrapper className="relative">
      <Wrapper className="md:max-w-[calc(83.33333%-30px)] w-full  bg-dark">
        <Wrapper className="lgl:h-[37.5rem] smm:h-[20rem] mdm:h-[28.125rem] overflow-hidden">
          <Swiper
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
            className="h-full"
            spaceBetween={0}
            slidesPerView={1}
            modules={[Parallax, Navigation]}
            speed={1000}
          >
            <SwiperSlide>
              <Image
                alt="Slide One"
                src={FirstSlide.src}
                sizes="100vw"
                width={FirstSlide.width}
                height={FirstSlide.height}
                className="h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="Slide Two"
                src={SecondSlide.src}
                sizes="100vw"
                width={SecondSlide.width}
                height={SecondSlide.height}
                className="h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="Slide Three"
                src={ThirdSlide.src}
                sizes="100vw"
                width={ThirdSlide.width}
                height={ThirdSlide.height}
                className="h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="Slide Fourth"
                src={FourthSlide.src}
                sizes="100vw"
                width={FourthSlide.width}
                height={FourthSlide.height}
                className="h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                alt="Slide Fifth"
                src={FifthSlide.src}
                sizes="100vw"
                width={FifthSlide.width}
                height={FifthSlide.height}
                className="h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </Wrapper>
        <Container className="slider__nav mt-[-7.9375rem] z-10 relative">
          <button

            aria-label="Next slide"
            type="button"
            name="slider-btn"
            className="md:ml-auto arrow-left ml-[66.66667%] block group w-[7.9375rem] h-[7.9375rem] top-[3.96875rem] relative is-active bg-white rounded-full overflow-hidden
            before:absolute before:content before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-primary before:rounded-full before:scale-[.40157]
            before:duration-500 before:ease-cubic-22 hover:before:scale-90  before:z-10
            "
          >
            <div
              className="dark-next absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center
            before:absolute before:content before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[#183330] before:rounded-full before:scale-[.40157]
            before:duration-500 before:ease-cubic-22 before:opacity-0 group-hover:before:scale-[.97] group-hover:before:opacity-100  before:z-10
            
            "
            >
              <div className="w-full relative overflow-hidden z-10">
                <div className="translate-x-[100%] flex arrow-next">
                  <div className="mx-[.3125rem] ">
                    <svg
                      version="1.1"
                      viewBox="0 0 59.2 49.42"
                      className="svg-icon svg-fill w-[59px] h-[49px]"
                    >
                      <path
                        fill="#fff"
                        stroke="none"
                        pid="0"
                        d="M34.72 0L26 8.71l9.83 9.9H0v12.2h35.78L26 40.71l8.71 8.71L59.2 24.71zm-.06 2.84l21.72 21.87-21.72 21.87-5.83-5.87 11.88-11.9H2v-8.2h38.64L28.82 8.71z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="next-circle absolute top-[.84375rem] left-[.84375rem] right-[.84375rem] bottom-[.84375rem]">
              <svg
                version="1.1"
                viewBox="0 0 100 96.7"
                className="svg-icon svg-fill"
              >
                <path
                  pid="0"
                  d="M60.25 1.04l-2.87 5.15-1.85-.29L54.37.12l1.8.28.6 3.65L58.44.76l1.81.28zm3.47 3.89a1.27 1.27 0 10-2.44-.71 1.27 1.27 0 102.44.71m-4-1.18a2.924 2.924 0 115.61 1.65 2.924 2.924 0 01-5.61-1.65M67.88.79l1.54.62-3.01 7.49-1.54-.62L67.88.79zm4.08 7.65a1.34 1.34 0 10-1.77.51 1.23 1.23 0 001.77-.51zm2.66-1.61l-2.44 4.64a2.62 2.62 0 01-3.81 1 2.85 2.85 0 01-1.69-2.41l1.63-.06a1.27 1.27 0 00.79 1.2 1.1 1.1 0 001.65-.46l.24-.45a2 2 0 01-1.76-.12 2.75 2.75 0 01-1.09-3.76 2.74 2.74 0 013.71-1.21 2 2 0 011.09 1.39l.26-.5zm2.97 4.79a1.14 1.14 0 00-.44-1.4 1.13 1.13 0 00-1.48 0zm-2 1a1.4 1.4 0 001.1.28l.62 1.4a2.78 2.78 0 01-2.61-.5 2.85 2.85 0 01-.76-4.16 2.83 2.83 0 014.08-.6 2.79 2.79 0 01.55 4 3.65 3.65 0 01-.44.5l-3.11-2.3a1.25 1.25 0 00.62 1.41zm7.77 4.13l-2.34 2.44-1.2-1.15 2.2-2.27a.91.91 0 000-1.39 1 1 0 00-1.53.11l-2.08 2.17-1.2-1.15 3.83-4 1.19 1.15-.36.37a1.85 1.85 0 011.6.61 2.07 2.07 0 01-.09 3.09m2.64 4.31a1.27 1.27 0 00.25-1.87 1.354 1.354 0 00-2.14 1.66 1.26 1.26 0 001.87.21zm4.93-1.76l-6.08 4.77-1-1.31.41-.32a2.08 2.08 0 01-1.55-.89 2.93 2.93 0 014.6-3.59 2.13 2.13 0 01.48 1.72l2.14-1.69zm-1 6.93a1.25 1.25 0 00-1.18-2.07zm-2.25.12a1.46 1.46 0 00.89.71v1.53a2.79 2.79 0 01-2.18-1.53 2.86 2.86 0 011-4.11 2.878 2.878 0 112.85 5 3 3 0 01-.61.28l-1.93-3.38a1.26 1.26 0 000 1.54zm5.1 4.1l1.39 3.97-1.5.52-1.39-3.96 1.5-.53zm4.58 12.62l-5.77-1.13-.3-1.86 5.12-2.9.29 1.81-3.27 1.69 3.64.58.29 1.81zm-2.61 4.52a1.27 1.27 0 10-1.34-1.23 1.24 1.24 0 001.34 1.23m-.13-4.2a2.93 2.93 0 11-2.82 3 2.88 2.88 0 012.82-3m5.36 6.86l-.11 1.66-8.03-.52.1-1.66 8.04.52zm-5.98 6.29a1.34 1.34 0 10-1-1.53 1.24 1.24 0 001 1.53zm2.34 2l-5.17-.87a2.62 2.62 0 01-2.11-3.32 2.82 2.82 0 011.75-2.36l.57 1.53a1.26 1.26 0 00-.9 1.13 1.11 1.11 0 001 1.43l.5.08a1.94 1.94 0 01-.44-1.71 2.81 2.81 0 015.53.93 2 2 0 01-1 1.48l.56.09zm-3.57 4.36a1.25 1.25 0 00.72-2.27zm-1.6-1.59a1.46 1.46 0 00.07 1.14l-1.13 1a2.8 2.8 0 01-.34-2.6 2.912 2.912 0 115.58 1.67 2.79 2.79 0 01-3.63 1.78 3.05 3.05 0 01-.61-.27l1.2-3.74a1.26 1.26 0 00-1.14 1zm-1.46 8.69l-3-1.48.72-1.49 2.83 1.37a.92.92 0 001.32-.43 1 1 0 00-.58-1.43l-2.71-1.31.71-1.49 5 2.4-.72 1.49-.47-.22a1.88 1.88 0 01-.08 1.72 2.07 2.07 0 01-3 .87m-3.27 3.85a1.31 1.31 0 10-.38-1.84 1.25 1.25 0 00.38 1.84zm3.2 4.16l-6.41-4.32.93-1.38.43.29a2.05 2.05 0 01.39-1.75 2.76 2.76 0 013.88-.56 2.79 2.79 0 011 3.83 2.11 2.11 0 01-1.48 1l2.26 1.52zm-6.87 1.22a1.25 1.25 0 001.59-1.77zm-.79-2.11a1.43 1.43 0 00-.4 1.07l-1.45.47a2.78 2.78 0 01.77-2.55 2.913 2.913 0 114.4 3.82 2.78 2.78 0 01-4 .13 3.44 3.44 0 01-.45-.49l2.63-2.92a1.25 1.25 0 00-1.46.47zm-2.32 6.13l-3.32 2.56-.97-1.26 3.33-2.57.96 1.27zm-10.51 8.32l-.73-5.86 1.66-.86 4.35 3.96-1.62.85-2.63-2.58.59 3.64-1.62.85zm-5.09-1.07a1.22 1.22 0 001.63.79 1.3 1.3 0 10-1.63-.79m3.92-1.44a2.92 2.92 0 11-3.74-1.74 2.9 2.9 0 013.74 1.74m-4.83 7.25l-1.6.41-2-7.82 1.6-.41 2 7.82zm-7.81-3.73a1.34 1.34 0 101.13-1.47 1.25 1.25 0 00-1.13 1.47zm-1.21 2.86l-.77-5.2a2.62 2.62 0 012.49-3 2.83 2.83 0 012.79.93l-1.28 1a1.26 1.26 0 00-1.38-.52 1.1 1.1 0 00-1 1.35l.08.51a2 2 0 011.49-1 2.81 2.81 0 01.82 5.56 2 2 0 01-1.7-.48l.09.56zm-5.15-2.07a1.14 1.14 0 001.19.86 1.13 1.13 0 001.18-.89zm1-2a1.44 1.44 0 00-1.06.43l-1.33-.74a2.81 2.81 0 012.39-1.21 2.922 2.922 0 11.22 5.84 2.79 2.79 0 01-2.87-2.84 3.55 3.55 0 01.06-.67l3.91-.06a1.25 1.25 0 00-1.32-.77zm-8.73 1.31l.44-3.37 1.64.21-.41 3.13a.92.92 0 00.83 1.12c.6.08 1.06-.21 1.16-1l.39-3 1.64.22-.71 5.48-1.64-.21.06-.52a1.88 1.88 0 01-1.65.47 2.08 2.08 0 01-1.75-2.54m-4.66-1.82a1.31 1.31 0 101.62-1 1.25 1.25 0 00-1.62 1zm-2.94 4.34l2.09-7.46 1.59.45-.14.5a2.08 2.08 0 011.76-.2 2.93 2.93 0 01-1.57 5.57 2.08 2.08 0 01-1.4-1.09l-.73 2.63zm-3.31-6.22a1.15 1.15 0 00.72 1.27 1.12 1.12 0 001.45-.31zm1.75-1.43a1.47 1.47 0 00-1.14 0l-.9-1.23a2.78 2.78 0 012.65-.07 2.87 2.87 0 011.62 3.92 2.83 2.83 0 01-3.86 1.47 2.8 2.8 0 01-1.39-3.81 4.61 4.61 0 01.33-.58l3.58 1.55a1.27 1.27 0 00-.89-1.25zm-6.52-.28l-3.46-2.37.9-1.32 3.46 2.37-.9 1.32zM14.45 79.8l5.32-2.52 1.34 1.31-2.4 5.39-1.31-1.29 1.63-3.31-3.27 1.7-1.31-1.28zm-.57-5.18a1.27 1.27 0 101.8.19 1.25 1.25 0 00-1.8-.19m2.59 3.3a2.93 2.93 0 11.48-4.09 2.91 2.91 0 01-.48 4.11M8.1 75.58l-.9-1.39 6.78-4.36.9 1.39-6.78 4.36zm1.08-8.6a1.34 1.34 0 001.2 2.39 1.26 1.26 0 00.54-1.78 1.24 1.24 0 00-1.74-.61zm-3.09-.25l4.68-2.37a2.61 2.61 0 013.66 1.47 2.82 2.82 0 010 2.94l-1.41-.94a1.27 1.27 0 00.06-1.44 1.11 1.11 0 00-1.59-.56l-.47.2a2 2 0 011.36 1.12 2.74 2.74 0 01-1.25 3.68 2.74 2.74 0 01-3.73-1.17 2 2 0 01-.08-1.76l-.51.25zm.34-5.61a1.15 1.15 0 00-.41 1.39 1.13 1.13 0 001.21.86zm2.22.32a1.41 1.41 0 00-.73-.87l.3-1.5a2.8 2.8 0 011.8 1.92 2.86 2.86 0 01-1.75 3.84 2.83 2.83 0 01-3.69-1.86 2.8 2.8 0 011.87-3.6 3.81 3.81 0 01.65-.15l1.24 3.73a1.25 1.25 0 00.31-1.51zm-3.96-7.86l3.33-.63.31 1.63-3.09.58a.91.91 0 00-.81 1.14 1 1 0 001.3.8l3-.56.29 1.63-5.42 1-.31-1.63.51-.1a1.85 1.85 0 01-.95-1.43 2.06 2.06 0 011.86-2.45m.31-5.02a1.27 1.27 0 00-1.29 1.38 1.25 1.25 0 001.4 1.25 1.26 1.26 0 001.3-1.34 1.27 1.27 0 00-1.41-1.29zm-5-1.44l7.71-.33.07 1.66h-.52a2.1 2.1 0 01.74 1.64 2.78 2.78 0 01-2.81 2.76 2.77 2.77 0 01-3-2.51 2.1 2.1 0 01.6-1.68l-2.72.12zm4.78-5.07a1.25 1.25 0 00-.23 2.37zm1.9 1.21a1.4 1.4 0 00-.31-1.09l.88-1.25a2.79 2.79 0 01.9 2.51 2.84 2.84 0 01-3.15 2.76 2.83 2.83 0 01-2.61-3.21 2.79 2.79 0 013.17-2.51 3.51 3.51 0 01.66.13l-.39 3.91a1.26 1.26 0 00.9-1.25zm-1.78-6.3l1.16-4.04 1.53.44-1.16 4.04-1.53-.44zm3.57-12.95l4.04 4.28-.83 1.69-5.85-.61.81-1.65 3.64.52-2.62-2.58.81-1.65zm4.73-2.16a1.27 1.27 0 10.38 1.79 1.24 1.24 0 00-.38-1.79m-2.32 3.5a2.93 2.93 0 114-.83 2.91 2.91 0 01-4 .83m-.39-8.72l1.04-1.29 6.24 5.11-1.04 1.29-6.24-5.11zm8.51-1.64a1.34 1.34 0 00-1.91 1.86 1.34 1.34 0 001.91-1.86zm-.73-3l3.73 3.7a2.63 2.63 0 01-.2 3.93 2.8 2.8 0 01-2.79.91l.42-1.58a1.26 1.26 0 001.38-.4 1.1 1.1 0 000-1.72l-.36-.36a1.93 1.93 0 01-.63 1.65 2.828 2.828 0 01-4-4 2 2 0 011.65-.63l-.4-.4zm5.4-1.45a1.13 1.13 0 00-1.46 0 1.15 1.15 0 00-.44 1.42zm.39 2.22a1.44 1.44 0 00.6-1l1.51-.19a2.8 2.8 0 01-1.24 2.36 2.84 2.84 0 01-4.19-.5 2.84 2.84 0 01.6-4.1 2.78 2.78 0 014 .65 3.42 3.42 0 01.34.57l-3.13 2.36a1.26 1.26 0 001.52-.18zm6.2-6.24l1.64 3-1.45.8-1.52-2.78a.91.91 0 00-1.32-.42 1 1 0 00-.35 1.5l1.45 2.64-1.44.8-2.67-4.84 1.45-.8.25.43a1.88 1.88 0 011.05-1.35 2.06 2.06 0 012.91 1m4.87-1.23a1.31 1.31 0 10-2.45.93 1.31 1.31 0 102.45-.93zM34.95 0l2.72 7.25-1.54.58-.19-.48a2.07 2.07 0 01-1.3 1.21 2.77 2.77 0 01-3.49-1.8 2.78 2.78 0 011.44-3.66 2 2 0 011.77 0l-1-2.55zm6.31 3.01a1.24 1.24 0 00-2.32.51zm-.56 2.18a1.42 1.42 0 00.94-.64l1.46.46a2.79 2.79 0 01-2.08 1.63 2.85 2.85 0 01-3.61-2.19A2.83 2.83 0 0139.62.97a2.77 2.77 0 013.4 2.24 3.14 3.14 0 01.08.67l-3.82.84a1.25 1.25 0 001.46.47zm5.41-3.65l4.19-.15.06 1.59-4.19.15-.06-1.59z"
                ></path>
              </svg>
            </div>
          </button>
        </Container>
      </Wrapper>

      <Wrapper className="bg-white h-full w-[calc(16.66667%+30px)] right-0 top-0 absolute max-sm-tab:hidden"></Wrapper>
      <Wrapper className="bg-secondary-200 py-[10vw] md:py-[6.25rem]">
        <Container>
          <Wrapper className="mx-[-15px]">
            <Wrapper className="px-[15px] md:max-w-[50%] w-full">
              <p className="text-[1rem] md:text-[1.125rem]  delay-100 font-normal text-dark leading-[1.8]">
                <strong>
                  {" "}
                  Want to get the best out of yourself? Let&apos;s get personal.
                  essence: is a &apos;members only&apos; club for effective personal
                  training, a conscious lifestyle and a healthy diet. With our
                  personal trainers and high-tech tools you ensure results!
                </strong>
              </p>
              <h5 className="h5 text-dark mt-[3.125rem] mb-[.8em] max-lgl:text-[calc(1.05625rem+.675vw)]">
                our essence: experience program
              </h5>
              <p className="text-[1rem] md:text-[1.125rem]  delay-100 font-normal text-dark leading-[1.8]">
                Would you like to register for our essence: experience program?
                Which can! We will give you one free personal training of 30
                minutes. There are no further obligations attached to this.
              </p>
              <p className="text-[1rem] md:text-[1.125rem]  delay-100 font-normal text-dark leading-[1.8]">
                <strong>
                  <Link
                    href="/pages/experiance"
                    onClick={pageChanger}
                    className="underline hover:text-primary duration-300"
                  >
                    Click here
                  </Link>{" "}
                  to register for our Experience program
                </strong>
              </p>
            </Wrapper>
          </Wrapper>
        </Container>
      </Wrapper>
      <Wrapper className="bg-secondary-200 pb-[10vw] md:pb-[6.25rem]">
        <Wrapper className="marquee overflow-hidden whitespace-nowrap relative z-10 pb-[1.875rem] lgl:pb-[3.75rem] smm:pb-[4vw]">
          <Wrapper className="marquee__track inline-flex">
            <h2 className="type-outline lowercase max-lgl:text-[calc(1.525rem+6.3vw)] text-[6.25rem] font-bold leading-none text-dark mb-[0em]">
              Frequently Asked Questions&nbsp;
            </h2>
            <h2 className="text-[6.25rem] lowercase max-lgl:text-[calc(1.525rem+6.3vw)] font-bold leading-none text-dark mb-[0em]">
              Frequently Asked Questions&nbsp;
            </h2>
          </Wrapper>
          <Wrapper className="marquee__track inline-flex">
            <h2 className="type-outline lowercase max-lgl:text-[calc(1.525rem+6.3vw)] text-[6.25rem] font-bold leading-none text-dark mb-[0em]">
              Frequently Asked Questions&nbsp;
            </h2>
            <h2 className="text-[6.25rem] lowercase max-lgl:text-[calc(1.525rem+6.3vw)] font-bold leading-none text-dark mb-[0em]">
              Frequently Asked Questions&nbsp;
            </h2>
          </Wrapper>
        </Wrapper>
        <Container>
          <Wrapper className="mx-[-15px]">
            <Wrapper className="px-[15px] md:max-w-[58.33333%] w-full">
              <Wrapper className="bg-white md:p-[3.125rem] p-[1.875rem] md:mt-[-5rem]">
                <Wrapper className="accordion-wrapper border-b-[.0625rem] border-[#e6e6e6]">
                  <button
                    className="accordion-heading  max-sm-tab:text-[.9375rem]; text-left my-[1rem] font-bold text-black"
                    data-index="1"
                    onClick={accordion}
                  >
                    Why should I choose personal training?
                  </button>

                  <div
                    className={` accordion-content max-sm-tab:text-[.9375rem];  overflow-hidden  ${
                      index === "1" ? "max-h-[1000px] duration-1000" : "max-h-0 duration-500"
                    }`}
                  >
                    <p>
                      Your personal trainer is the big stick behind the door.
                      Rain or shine, like it or not: your personal trainer is
                      waiting for you and ensures that you always keep your own
                      goals in mind and helps you achieve them. With a personal
                      trainer, training is very targeted and effective. More
                      results in less time.
                    </p>
                    <p>Some examples to get started with personal training:</p>
                    <ul className="mb-[1rem] pl-10 list-disc">
                      <li>
                        Looking for guidance in both exercise and nutrition.
                      </li>
                      <li>
                        I have been exercising for a while, but now I really
                        want to go all out and achieve a specific goal.
                      </li>
                      <li>
                        Due to an upcoming wedding, you want an optimal and
                        quick result to fit into that dream dress.
                      </li>
                      <li>
                        Stay healthy and fit through your pregnancy. Or quickly
                        get slim and fit again after pregnancy.
                      </li>
                    </ul>
                  </div>
                </Wrapper>
                <Wrapper className="accordion-wrapper border-b-[.0625rem] border-[#e6e6e6]">
                  <button
                    className="accordion-heading max-sm-tab:text-[.9375rem] text-left my-[1rem] font-bold text-black"
                    data-index="2"
                    onClick={accordion}
                  >
                    How many times a week should I train?
                  </button>

                  <div
                    className={` accordion-content   overflow-hidden  ${
                      index === "2" ? "max-h-[1000px] duration-1000" : "max-h-0 duration-500"
                    }`}
                  >
                    <p>
                      There are many factors involved in determining a weekly
                      frequency that is right for you and your goal. Consider:
                      your current overall fitness, goals, endurance, time and
                      more. We recommend training at least twice a week.
                    </p>
                  </div>
                </Wrapper>
                <Wrapper className="accordion-wrapper border-b-[.0625rem] border-[#e6e6e6]">
                  <button
                    className="accordion-heading max-sm-tab:text-[.9375rem] text-left my-[1rem] font-bold text-black"
                    data-index="3"
                    onClick={accordion}
                  >
                    Is it also possible to train at other locations?
                  </button>

                  <div
                    className={` accordion-content   overflow-hidden ${
                      index === "3" ? "max-h-[1000px] duration-1000" : "max-h-0 duration-500"
                    }`}
                  >
                    <p>
                      Absolute! We also provide training at people&apos;s homes, at
                      work or outside. Please contact us for further questions
                    </p>
                  </div>
                </Wrapper>
                <Wrapper className="accordion-wrapper border-b-[.0625rem] border-[#e6e6e6]">
                  <button
                    className="accordion-heading max-sm-tab:text-[.9375rem] text-left my-[1rem] font-bold text-black"
                    data-index="4"
                    onClick={accordion}
                  >
                    What are the costs for an exploratory meeting?
                  </button>

                  <div
                    className={` accordion-content   overflow-hidden  ${
                      index === "4" ? "max-h-[1000px] duration-1000" : "max-h-0 duration-500"
                    }`}
                  >
                    <p>
                      The exploratory meeting is of course free and completely
                      without obligation. This conversation will take place at
                      essence at Getfertplein 125 in Enschede while enjoying a
                      cup of coffee or tea. Here we get to know each other and
                      it quickly becomes clear what we can do for you and
                      whether we can get started.
                    </p>
                  </div>
                </Wrapper>
                <Wrapper className="accordion-wrapper border-b-[.0625rem] border-[#e6e6e6]">
                  <button
                    className="accordion-heading max-sm-tab:text-[.9375rem] text-left my-[1rem] font-bold text-black"
                    data-index="5"
                    onClick={accordion}
                  >
                    What does personal training cost?
                  </button>

                  <div
                    className={` accordion-content   overflow-hidden  ${
                      index === "5" ? "max-h-[1000px] duration-1000" : "max-h-0 duration-500"
                    }`}
                  >
                    <p>
                      Because every person is unique and because essence works
                      tailor-made, prices can vary per person depending on the
                      objectives and the resources needed to achieve the goal.
                      You can feel free to make an appointment with essence for a
                      no-obligation introductory meeting and/or trial training,
                      then the options and costs can be discussed.
                    </p>
                  </div>
                </Wrapper>
                <Wrapper className="accordion-wrapper border-b-[.0625rem] border-[#e6e6e6]">
                  <button
                    className="accordion-heading max-sm-tab:text-[.9375rem] text-left my-[1rem] font-bold text-black"
                    data-index="6"
                    onClick={accordion}
                  >
                    Is personal training suitable for everyone?
                  </button>

                  <div
                    className={` accordion-content   overflow-hidden  ${
                      index === "6" ? "max-h-[1000px] duration-1000" : "max-h-0 duration-500"
                    }`}
                  >
                    <p>
                      Young and old, fat or thin, novice athlete or athlete, man
                      or woman. The intensity and load capacity is different for
                      everyone and is always completely tailor-made. We will
                      work together to ensure that your goal is achieved within
                      a pre-agreed period. During this period you will learn
                      everything about training, muscles, metabolism, healthy
                      nutrition and how you can live a healthy life for the rest
                      of your life.
                    </p>
                  </div>
                </Wrapper>
                <Wrapper className="accordion-wrapper border-b-[.0625rem] border-[#e6e6e6]">
                  <button
                    className="accordion-heading max-sm-tab:text-[.9375rem] text-left my-[1rem] font-bold text-black"
                    data-index="7"
                    onClick={accordion}
                  >
                    How do I know if I can follow personal training when I am
                    being treated by a doctor or physiotherapist?
                  </button>

                  <div
                    className={` accordion-content   overflow-hidden  ${
                      index === "7" ? "max-h-[1000px] duration-1000" : "max-h-0 duration-500"
                    }`}
                  >
                    <p>
                      If you are being treated by a doctor or physiotherapist,
                      it is a good idea to consult with them to determine
                      whether you can follow Personal Training and what you
                      should take into account. Please take this advice into
                      account. You can also always ask your doctor or
                      physiotherapist to contact essence. Personal Training can
                      often serve as a supplement to treatment and any
                      limitations are taken into account during the training.
                    </p>
                  </div>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Container>
      </Wrapper>
    </Wrapper>
  );
};

export default ImageAndText;
