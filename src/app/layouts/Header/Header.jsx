"use client";
import Wrapper from "@/app/components/ui/wrapper/Wrapper";
import "./style.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useThemeConfig } from "@/app/contexts/theme/ThemeConfigure";
import { links, menu, menu2 } from "@/app/data/default";

gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  const { menuColor, pageChanger, progress, headerMode, logoAnimation } = useThemeConfig();
  const [loading, setLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuClose, setOpenMenuClose] = useState("delay-[.0s]");
  const menuToggle = () => {
    setOpenMenu((prevState) => !prevState);
    setOpenMenuClose("delay-[.8s]");
    setTimeout(() => {
      setOpenMenuClose("delay-[.0s]");
    }, 800);
  };  
  useEffect(() => {    
    setTimeout(() => {      
      setOpenMenu(false);  
    }, 500);    
  },[progress])
  useEffect(() => {    
    setTimeout(() => {      
      setLoading(logoAnimation);  
    }, 500);    
  },[logoAnimation])

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
    const panels = gsap.utils.toArray(".site-header");
    gsap.timeline({
      scrollTrigger: {
        trigger: panels[0],
        start: "200 top",
        end: "top top",
        scrub: 1,
        markers: false,
        onEnter: ({ progress, direction, isActive }) => {
          panels[0].classList.add("site-logo-animation");
        },  
        onLeaveBack: ({ progress, direction, isActive }) => {
          panels[0].classList.remove("site-logo-animation");
        },
      },
    });
  }, []);
  
  return (
    <>
    <header
      className={`site-header fixed md:top-[30px] top-[1.875rem] left-[1.875rem] md:left-[3.75rem] z-[999] ${
        loading ? "now-visible" : ""
      }`}
    >
      <Wrapper className="flex gap-[20px]">
        <button
          onClick={() => {
            menuToggle();
          }}
          className={`hamburger-toggle relative z-50 w-[60px] h-[60px] flex items-center justify-center rounded-full  duration-[.2s] ease-in ${
            menuColor ? "is-shown bg-[#f4f2f2]" : ""
          }  ${openMenu ? "is-open !bg-transparent" : openMenuClose}`}
        >
          <ul className="wrapper w-[26px] relative ">
            <li className={`wrapper__hamburger overflow-hidden`}>
              <span
                className={`h-[3px]  block ${
                  menuColor ? "bg-[#121212]" : "bg-white"
                }`}
              ></span>{" "}
              <span
                className={`h-[3px] block mt-1 ${
                  menuColor ? "bg-[#121212]" : "bg-white"
                }`}
              ></span>
            </li>
            <li className={`wrapper__close absolute w-full top-0`}>
              <span
                className={`h-[3px]  opacity-0  bg-white block duration-[.3s] after:hidden `}
              ></span>{" "}
              <span className="h-[3px] opacity-0  after:hidden block mt-1 bg-white"></span>
            </li>
          </ul>
        </button>
  
        <Wrapper className="overflow-hidden site-logo flex items-center relative z-50">
          <Link href="/" onClick={pageChanger}  className="max-w-[250px] max-sm-tab:max-w-[150px] block">
            <svg className="w-full pointer-events-none" viewBox="0 0 567 68">
              <path
                d="M17.4445 40.8771C19.6843 48.9326 25.7576 52.9603 35.6643 52.9603C42.0391 52.9603 46.8633 50.8179 50.1368 46.5331L63.5755 54.2457C57.2008 63.4152 47.8109 68 35.4059 68C24.7238 68 16.1523 64.7864 9.69139 58.3592C3.23046 51.9319 0 43.8336 0 34.0643C0 24.3806 3.18739 16.3251 9.56218 9.89792C15.937 3.38501 24.1208 0.12855 34.1137 0.12855C43.5897 0.12855 51.3859 3.38501 57.5023 9.89792C63.7048 16.4108 66.806 24.4663 66.806 34.0643C66.806 36.2067 66.5906 38.4776 66.1599 40.8771H17.4445ZM17.1861 28.0227H50.1368C49.1892 23.6522 47.2079 20.3957 44.1928 18.2533C41.2638 16.1109 37.9041 15.0397 34.1137 15.0397C29.6341 15.0397 25.9299 16.1966 23.0009 18.5104C20.072 20.7385 18.1337 23.9093 17.1861 28.0227Z"
                className={`${headerMode ? 'fill-dark delay-500 duration-[.8s]'  : 'fill-white'} ${openMenu ? 'duration-[.8s] !delay-0 !fill-white'  : ''} `}                
              />
              <path
                d="M100.341 20.1815C100.341 21.8954 101.461 23.3094 103.701 24.4234C106.027 25.4518 108.827 26.3945 112.1 27.2514C115.374 28.0227 118.647 29.051 121.921 30.3365C125.194 31.5362 127.951 33.5929 130.191 36.5066C132.517 39.4203 133.68 43.0624 133.68 47.4329C133.68 54.0315 131.181 59.1304 126.185 62.7297C121.275 66.2432 115.115 68 107.707 68C94.4403 68 85.395 62.9011 80.5708 52.7032L95.0433 44.6049C96.9385 50.1752 101.16 52.9603 107.707 52.9603C113.651 52.9603 116.623 51.1178 116.623 47.4329C116.623 45.719 115.46 44.3478 113.134 43.3195C110.894 42.2054 108.137 41.2199 104.864 40.363C101.59 39.506 98.3168 38.4348 95.0433 37.1493C91.7698 35.8639 88.97 33.85 86.6441 31.1078C84.4043 28.2798 83.2844 24.7662 83.2844 20.5671C83.2844 14.2256 85.6103 9.2552 90.2622 5.65596C95.0002 1.97102 100.858 0.12855 107.836 0.12855C113.091 0.12855 117.872 1.3283 122.179 3.72779C126.486 6.04159 129.889 9.38375 132.387 13.7543L118.173 21.4669C116.106 17.0964 112.66 14.9112 107.836 14.9112C105.682 14.9112 103.873 15.3825 102.409 16.3251C101.03 17.2678 100.341 18.5532 100.341 20.1815Z"
                className={`${headerMode ? 'fill-dark delay-500 duration-[.8s]'  : 'fill-white'} ${openMenu ? 'duration-[.8s] !delay-0 !fill-white'  : ''} `}     
              />
              <path
                d="M165.415 20.1815C165.415 21.8954 166.535 23.3094 168.775 24.4234C171.101 25.4518 173.9 26.3945 177.174 27.2514C180.447 28.0227 183.721 29.051 186.994 30.3365C190.268 31.5362 193.025 33.5929 195.264 36.5066C197.59 39.4203 198.753 43.0624 198.753 47.4329C198.753 54.0315 196.255 59.1304 191.259 62.7297C186.348 66.2432 180.189 68 172.78 68C159.514 68 150.469 62.9011 145.644 52.7032L160.117 44.6049C162.012 50.1752 166.233 52.9603 172.78 52.9603C178.724 52.9603 181.696 51.1178 181.696 47.4329C181.696 45.719 180.533 44.3478 178.208 43.3195C175.968 42.2054 173.211 41.2199 169.938 40.363C166.664 39.506 163.39 38.4348 160.117 37.1493C156.843 35.8639 154.044 33.85 151.718 31.1078C149.478 28.2798 148.358 24.7662 148.358 20.5671C148.358 14.2256 150.684 9.2552 155.336 5.65596C160.074 1.97102 165.932 0.12855 172.91 0.12855C178.164 0.12855 182.946 1.3283 187.253 3.72779C191.56 6.04159 194.963 9.38375 197.461 13.7543L183.247 21.4669C181.18 17.0964 177.734 14.9112 172.91 14.9112C170.756 14.9112 168.947 15.3825 167.482 16.3251C166.104 17.2678 165.415 18.5532 165.415 20.1815Z"
                className={`${headerMode ? 'fill-dark delay-500 duration-[.8s]'  : 'fill-white'} ${openMenu ? 'duration-[.8s] !delay-0 !fill-white'  : ''} `}     
              />
              <path
                d="M231.72 40.8771C233.96 48.9326 240.033 52.9603 249.94 52.9603C256.315 52.9603 261.139 50.8179 264.412 46.5331L277.851 54.2457C271.476 63.4152 262.087 68 249.682 68C239 68 230.428 64.7864 223.967 58.3592C217.506 51.9319 214.276 43.8336 214.276 34.0643C214.276 24.3806 217.463 16.3251 223.838 9.89792C230.213 3.38501 238.397 0.12855 248.389 0.12855C257.865 0.12855 265.662 3.38501 271.778 9.89792C277.98 16.4108 281.082 24.4663 281.082 34.0643C281.082 36.2067 280.866 38.4776 280.436 40.8771H231.72ZM231.462 28.0227H264.412C263.465 23.6522 261.484 20.3957 258.468 18.2533C255.539 16.1109 252.18 15.0397 248.389 15.0397C243.91 15.0397 240.206 16.1966 237.277 18.5104C234.348 20.7385 232.409 23.9093 231.462 28.0227Z"
                className={`${headerMode ? 'fill-dark delay-500 duration-[.8s]'  : 'fill-white'} ${openMenu ? 'duration-[.8s] !delay-0 !fill-white'  : ''} `}     
              />
              <path
                d="M337.687 0.12855C344.75 0.12855 350.565 2.4852 355.131 7.19849C359.783 11.9118 362.109 18.4247 362.109 26.7372V66.2004H345.44V28.794C345.44 24.5091 344.277 21.2527 341.951 19.0246C339.625 16.7108 336.524 15.5539 332.647 15.5539C328.34 15.5539 324.894 16.8822 322.309 19.5388C319.725 22.1953 318.433 26.1802 318.433 31.4934V66.2004H301.764V1.92817H318.433V9.12665C322.482 3.12792 328.9 0.12855 337.687 0.12855Z"
                className={`${headerMode ? 'fill-dark delay-500 duration-[.8s]'  : 'fill-white'} ${openMenu ? 'duration-[.8s] !delay-0 !fill-white'  : ''} `}     
              />
              <path
                d="M416.141 68C406.407 68 398.266 64.7435 391.719 58.2306C385.258 51.7177 382.028 43.6623 382.028 34.0643C382.028 24.4663 385.258 16.4108 391.719 9.89792C398.266 3.38501 406.407 0.12855 416.141 0.12855C422.43 0.12855 428.159 1.62823 433.327 4.6276C438.496 7.62697 442.416 11.6547 445.086 16.7108L430.743 25.0662C429.451 22.4096 427.47 20.31 424.799 18.7675C422.215 17.225 419.286 16.4537 416.012 16.4537C411.016 16.4537 406.881 18.1248 403.607 21.4669C400.334 24.7234 398.697 28.9225 398.697 34.0643C398.697 39.1204 400.334 43.3195 403.607 46.6616C406.881 49.9181 411.016 51.5463 416.012 51.5463C419.372 51.5463 422.344 50.8179 424.928 49.3611C427.599 47.8185 429.58 45.719 430.872 43.0624L445.345 51.2892C442.502 56.3453 438.496 60.4159 433.327 63.5009C428.159 66.5003 422.43 68 416.141 68Z"
                className={`${headerMode ? 'fill-dark delay-500 duration-[.8s]'  : 'fill-white'} ${openMenu ? 'duration-[.8s] !delay-0 !fill-white'  : ''} `}     
              />
              <path
                d="M476.281 40.8771C478.521 48.9326 484.595 52.9603 494.501 52.9603C500.876 52.9603 505.7 50.8179 508.974 46.5331L522.413 54.2457C516.038 63.4152 506.648 68 494.243 68C483.561 68 474.989 64.7864 468.528 58.3592C462.067 51.9319 458.837 43.8336 458.837 34.0643C458.837 24.3806 462.024 16.3251 468.399 9.89792C474.774 3.38501 482.958 0.12855 492.951 0.12855C502.427 0.12855 510.223 3.38501 516.339 9.89792C522.542 16.4108 525.643 24.4663 525.643 34.0643C525.643 36.2067 525.428 38.4776 524.997 40.8771H476.281ZM476.023 28.0227H508.974C508.026 23.6522 506.045 20.3957 503.03 18.2533C500.101 16.1109 496.741 15.0397 492.951 15.0397C488.471 15.0397 484.767 16.1966 481.838 18.5104C478.909 20.7385 476.971 23.9093 476.023 28.0227Z"
                className={`${headerMode ? 'fill-dark delay-500 duration-[.8s]'  : 'fill-white'} ${openMenu ? 'duration-[.8s] !delay-0 !fill-white'  : ''} `}     
              />
              <path
                d="M563.77 18.6389C561.616 20.7813 559.032 21.8526 556.016 21.8526C553.001 21.8526 550.417 20.7813 548.263 18.6389C546.11 16.4965 545.033 13.9256 545.033 10.9263C545.033 7.92691 546.11 5.35602 548.263 3.21361C550.417 1.0712 553.001 0 556.016 0C559.032 0 561.616 1.0712 563.77 3.21361C565.923 5.35602 567 7.92691 567 10.9263C567 13.9256 565.923 16.4965 563.77 18.6389ZM563.77 64.6578C561.616 66.8003 559.032 67.8715 556.016 67.8715C553.001 67.8715 550.417 66.8003 548.263 64.6578C546.11 62.5154 545.033 59.9445 545.033 56.9452C545.033 53.9458 546.11 51.3749 548.263 49.2325C550.417 47.0901 553.001 46.0189 556.016 46.0189C559.032 46.0189 561.616 47.0901 563.77 49.2325C565.923 51.3749 567 53.9458 567 56.9452C567 59.9445 565.923 62.5154 563.77 64.6578Z"
          className={`${headerMode ? 'fill-dark delay-500 duration-[.8s]'  : 'fill-white'} ${openMenu ? 'duration-[.8s] !delay-0 !fill-white'  : ''} `}     
              />
            </svg>
          </Link>
        </Wrapper>
      </Wrapper>

    </header> 
    <Wrapper
          className={`menu-drawer px-[4.8125rem] pt-[150px] pb-[77px]
          
          max-sm-tab:pt-[6.25rem] max-sm-tab:pr-[1.875rem] max-sm-tab:pb-[1.875rem] max-sm-tab:pl-[2.9375rem]
          group fixed max-w-[45.625rem] h-[100vh] overflow-auto bg-[#183330] w-full z-40 top-0 left-0 duration-[.8s] ${
            openMenu
              ? "menu-open is-shown translate-x-[0%] delay-0"
              : "translate-x-[-100%] delay-[.5s]"
          }          
          `}          
        >
          <Wrapper className="mb-[3.125rem]">
            <ul>
              {links.map((item, index) => {
                return (
                  <li key={index} className="overflow-hidden">
                    <Link
                      href={item.link}           
                      data-text={item.label}      
                      onClick={pageChanger}            
                      className="cursor-pointer max-lgl:text-[calc(1.25rem+3vw)] text-[3.5rem] tracking-[.02em] inline-block group-[.is-shown]:translate-y-[0%] group-[.is-shown]:delay-[.63s] delay-[0s] translate-y-[101%] ease-cubic-22 duration-1000 relative font-bold leading-[1.3] stroke-text lowercase before:content-[attr(data-text)] before:absolute before:top-[0px] before:left-0 before:whitespace-nowrap before:max-w-0 before:duration-[.8s] before:ease-cubic-22 before:transition-all before:overflow-hidden hover:before:max-w-full"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Wrapper>
          <Wrapper className='md:flex mx-[-15px]'>
          <Wrapper className='px-[15px] md:max-w-[41.66667%] w-full'>
          <ul>
              {menu.map((item, index) => {
                return (
                  <li key={index} className="overflow-hidden">
                    <Link
                      href={item.link}
                      data-text={item.label}
                      onClick={pageChanger} 
                      className="max-lgl:text-[calc(1.075rem+.9vw)] text-[1.75rem] tracking-[.02em] text-white menu-stroke-link inline-block group-[.is-shown]:translate-y-[0%] group-[.is-shown]:delay-[.75s] delay-[0s] translate-y-[101%] ease-cubic-22 duration-1000 relative font-bold leading-[1.3] lowercase before:content-[attr(data-text)] before:absolute before:top-[0px] before:left-0 before:whitespace-nowrap before:max-w-full before:duration-[.8s] before:ease-cubic-22 before:transition-all before:overflow-hidden hover:before:max-w-0"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            </Wrapper>

            <Wrapper className='px-[15px] md:max-w-[41.66667%] w-full'>
            <ul>
              {menu2.map((item, index) => {
                return (
                  <li key={index} className="overflow-hidden">
                    <Link
                      href={item.link}
                      data-text={item.label}
                      onClick={pageChanger} 
                      className="max-lgl:text-[calc(1.075rem+.9vw)] text-[1.75rem] tracking-[.02em] text-white menu-stroke-link inline-block group-[.is-shown]:translate-y-[0%] group-[.is-shown]:delay-[.75s] delay-[0s] translate-y-[101%] ease-cubic-22 duration-1000 relative font-bold leading-[1.3] lowercase before:content-[attr(data-text)] before:absolute before:top-[0px] before:left-0 before:whitespace-nowrap before:max-w-full before:duration-[.8s] before:ease-cubic-22 before:transition-all before:overflow-hidden hover:before:max-w-0"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            </Wrapper>
  
          </Wrapper>
        </Wrapper>   
          <Wrapper className={`fixed top-0 left-0 w-full h-full z-[9999] bg-white ease-cubic-22  ${progress ? 'translate-x-[0%] delay-[0.8s] duration-[1.2s]' : 'duration-[0.5s] translate-x-[100%] '} `}>
      
          </Wrapper>
          </>
  );
};

export default Header;
