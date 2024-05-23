"use client";
import Wrapper from "@/app/components/ui/wrapper/Wrapper";
import "./style.css";
import Container from "@/app/components/ui/contianer/Container";
import { useEffect, useState } from "react";
import Image from "next/image";
import Facebook from '../../assets/icons/facebook.svg'
import Instagram from '../../assets/icons/instagram.svg'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {  
  useEffect(()=>{
    const panels = gsap.utils.toArray("footer");
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
        onEnterBack: ({ progress, direction, isActive }) => {
          panels[0].classList.add("is-shown");
        },
        onLeave: ({ progress, direction, isActive }) => {
          panels[0].classList.remove("is-shown");
        },
        onLeaveBack: ({ progress, direction, isActive }) => {
          panels[0].classList.remove("is-shown");
        },
      },
    });
  })
  const [radio, setRadio] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const values = [
    {
      id: "personal-training",
      value: "Personal training",
    },
    {
      id: "duo-training",
      value: "Duo training",
    },
    {
      id: "at-home",
      value: "at home",
    },
  ];
  const inputChecked = (e) => {
    setRadio(e.target.id);
    setRadioValue(e.target.value);
  };
  return (
    <footer className="mb-[12.5rem] md:mb-[6.25rem] group ">
      <Wrapper className="bg-[#183330] pb-[10vw] md:pb-[6.25rem] relative z-10">
        <Wrapper className="lgl:py-[3.75rem] smm:py-[4vw] py-[1.875rem]"> 
          <Wrapper className="marquee overflow-hidden whitespace-nowrap relative z-10">
            <Wrapper className="marquee__track inline-flex">
              <h2 className="type-outline max-lgl:text-[calc(1.525rem+6.3vw)] text-[6.25rem] font-bold leading-none text-dark mb-[0em]">
                first some information&nbsp;
              </h2>
              <h2 className="text-[6.25rem] max-lgl:text-[calc(1.525rem+6.3vw)] font-bold leading-none text-white mb-[0em]">
                first some information&nbsp;
              </h2>
            </Wrapper>
            <Wrapper className="marquee__track inline-flex">
              <h2 className="type-outline max-lgl:text-[calc(1.525rem+6.3vw)] text-[6.25rem] font-bold leading-none text-dark mb-[0em]">
                first some information&nbsp;
              </h2>
              <h2 className="text-[6.25rem] max-lgl:text-[calc(1.525rem+6.3vw)] font-bold leading-none text-white mb-[0em]">
                first some information&nbsp;
              </h2>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Container>
          <Wrapper className="mx-[-15px] md:flex">
            <Wrapper className="px-[15px] md:max-w-[25%] mb-[1.5rem]">
              <Wrapper className="text-[1.5625rem] text-white font-bold leading-none mb-[1.5rem]">
                i would like more information about:
              </Wrapper>
              {values.map((item, index) => {
                return (
                  <div key={index} className="mb-[.9375rem]">
                    <label
                      htmlFor={item.id}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        id={item.id}
                        type="radio"
                        name="information"
                        required="required"
                        onChange={(e) => inputChecked(e)}
                        value={item.value}
                        className="hidden"
                      />
                      <span
                        className={`relative form__radio__mark w-[1.125rem] h-[1.125rem] block border border-white rounded-full mr-[1.25rem]
               before:absolute before:top-[.1875rem] before:left-[.1875rem] before:bottom-[.1875rem] before:right-[.1875rem] before:bg-primary
               before:duration-500 before:ease-cubic-22 before:rounded-full  ${
                 radio === item.id ? "before:scale-100" : "before:scale-0"
               }
               `}
                      ></span>
                      <span className="form__radio__text text-[1rem] font-normal text-white">
                        {item.value}
                      </span>
                    </label>
                  </div>
                );
              })}
            </Wrapper>
            <Wrapper className="px-[15px] md:ml-[8.33333%] md:max-w-[41.66667%] w-full">
              <Wrapper className="text-[1.5625rem] text-white font-bold leading-none mb-[1.5rem]">
                i can be reached via
                <br />
                these details:
              </Wrapper>
              <form>
                <Wrapper className="mb-[.9375rem]">
                  <input
                    type="text"
                    name="name"
                    required="required"
                    placeholder="Name"
                    className="w-full bg-transparent placeholder:text-white leading-none h-[31.2px] text-base text-whiteo !outline-none !shadow-none border-b border-white"
                  />
                </Wrapper>
                <Wrapper className="mb-[.9375rem]">
                  <input
                    type="tel"
                    name="phone"
                    required="required"
                    placeholder="Phone number"
                    className="w-full bg-transparent placeholder:text-white leading-none h-[31.2px] text-base text-whiteo !outline-none !shadow-none border-b border-white"
                  />
                </Wrapper>
                <Wrapper className="mb-[.9375rem]">
                  <input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="E-mail address"
                    className="w-full bg-transparent placeholder:text-white leading-none h-[31.2px] text-base text-whiteo !outline-none !shadow-none border-b border-white"
                  />
                </Wrapper>
                <Wrapper className="mb-[.9375rem]">
                  <textarea
                    placeholder="Message"
                    name="message"
                    className="h-[63px] block w-full bg-transparent placeholder:text-white leading-none text-base text-whiteo !outline-none !shadow-none border-b border-white"
                  ></textarea>
                </Wrapper>
                <button
                  type="submit"
                  data-text="Send now"
                  className="max-lgl:text-[calc(1.275rem+3.3vw)] text-[3.75rem] font-bold lowercase outline-stroke leading-none submit-stroke relative
              before:content-[attr(data-text)] before:absolute before:top-[0px] before:left-0 before:whitespace-nowrap before:max-w-0 before:duration-[.8s] before:ease-cubic-22 before:transition-all before:overflow-hidden hover:before:max-w-full"
                >
                  Send now
                </button>
              </form>
              <Wrapper className="notification p-[.9375rem] my-[.9375rem] border-[.0625rem] border-primary opacity-0 duration-[.3s] ease-cubic-22 translate-y-[3.125rem]"></Wrapper>
            </Wrapper>
          </Wrapper>
        </Container>
      </Wrapper>
      <Wrapper className="footer-address z-[1] fixed bottom-0 w-full left-0 p-[35px]  md:h-[6.25rem] h-[12.5rem] hidden group-[.is-shown]:block">
        <address className="not-italic flex justify-center items-center max-sm-tab:flex-col">
          <p className="text-[grey] max-sm-tab:text-base text-center">
            Getfertplein 125, 7512 HK Enschede,{" "}
            <a href="tel:088 90 90 806" className="text-[#6c757d] underline">
              088 90 90 806
            </a>
            ,{" "}
            <a
              href="mailto:info@essence.nl"
              className="text-[#6c757d] underline"
            >
              info@essence.nl
            </a>
            , Identity & website by{" "}
            <a
              href="https://www.uncommon.nl/"
              target="_blank"
              className="text-[#6c757d] underline"
            >
              UNCOMMON
            </a>
          </p>
          <div className="socials lgl:ml-[3.125rem] flex items-center max-lgl:flex-col max-sm-tab:flex-row">
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
        </address>
      </Wrapper>
    </footer>
  );
};

export default Footer;
