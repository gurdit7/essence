"use client";
import Image from "next/image";
import "./style.css";
import BannerImage from "../../../../../assets/images/team/caroline/caroline_header.jpg";
import PersonalTrainingFirstImage from "../../../../../assets/images/team/caroline/caroline_inzet_1.jpg";
import Inzet_2 from "../../../../../assets/images/team/caroline/caroline_inzet_2.jpg";
import Wrapper from "@/app/components/ui/wrapper/Wrapper";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/app/components/ui/contianer/Container";
import { useThemeConfig } from "@/app/contexts/theme/ThemeConfigure";
import Link from "next/link";

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
        },
        onEnterBack: ({ progress, direction, isActive }) => {
          setMenuColor(false);
        },
        onLeave: ({ progress, direction, isActive }) => {
          setMenuColor(true);
        },
        onLeaveBack: ({ progress, direction, isActive }) => {
          setMenuColor(true);
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
      <section className="overflow-hidden relative pb-[6.25rem] bg-secondary-200">
        <Wrapper className="absolute h-[37.5rem] w-full  left-0 top-0 translate-y-0 animation-trigger-pts z-20">
          <Link
            href="/pages/experiance"
            className="absolute block z-40 md:w-[10.625rem] md:h-[10.625rem] md:top-[7.5rem] md:right-[calc(16.66667%+30px-5.3125rem)]
          top-[3.125rem]  w-[9.375rem] h-[9.375rem] right-[-4.6875rem]
          "
            onClick={pageChanger}
          >
            <Wrapper className="animated-circle-pts">
              <svg version="1.1" viewBox="0 0 175 172">
                <path
                  fill="#121212"
                  stroke="none"
                  pid="0"
                  d="M103.585 6.2c.248-1.476-.583-2.566-1.944-2.794-1.36-.227-2.5.534-2.748 2.01-.247 1.478.584 2.568 1.944 2.795 1.36.227 2.501-.534 2.748-2.01m2.958.494c-.492 2.934-3 4.842-5.582 4.411-1.321-.22-2.211-.835-2.737-1.692l-.814 4.864-2.957-.494L96.76 0l2.958.494-.155.926c.775-.64 1.817-.932 3.138-.711 2.583.431 4.333 3.051 3.842 5.986m9.055-2.643l-.974 3.252c-1.13-.546-2.959-.572-3.526 1.322l-1.295 4.324-2.873-.859 2.865-9.565 2.873.859-.51 1.702c.767-1.167 2.234-1.396 3.44-1.035m6.27 8.157c.563-1.301.02-2.559-1.173-3.074-1.192-.515-2.483-.05-3.046 1.25-.564 1.302-.02 2.56 1.173 3.075 1.192.515 2.483.05 3.046-1.251m-6.97-3.012c1.181-2.73 4.26-3.902 6.955-2.737 2.697 1.165 3.95 4.208 2.767 6.938-1.183 2.73-4.26 3.902-6.956 2.737-2.697-1.166-3.95-4.208-2.767-6.938m17.863 7.909c.34-1.152-.202-1.983-.967-2.456-.968-.6-1.908-.526-2.684.192l3.652 2.264zm-3.48 2.12c.696.43 1.459.528 2.03.365l1.312 2.435c-1.55.637-3.175.452-4.79-.548-2.903-1.801-3.492-4.868-1.92-7.396 1.57-2.528 4.617-3.342 7.3-1.678 2.48 1.537 3.123 4.592 1.531 7.153a5.82 5.82 0 01-.734.955l-6.03-3.738c-.225 1.082.366 1.872 1.3 2.451zm12.61-.308l1.463 1.147-1.778 2.261-1.462-1.146-4.395 5.59-2.358-1.85 4.395-5.59-1.054-.826 1.778-2.262 1.053.826c1.729-2.199 3.976-2.568 6.463-.364l-1.778 2.262c-.819-.77-1.61-.959-2.326-.048m3.751 7.183l-2.435 2.564c-.592.623-.11 1.19.902 2.038l-1.871 1.97c-3.118-2.403-3.133-4.041-1.206-6.07l2.435-2.563-1.16-1.1 1.98-2.086 1.16 1.1 1.308-1.376 2.794 1.41-1.926 2.027 1.494 1.416-1.981 2.086-1.494-1.416zm9.301 5.552l-2.561 2.232c-.664-1.065-2.196-2.06-3.688-.762l-3.404 2.966-1.971-2.257 7.532-6.561 1.97 2.257-1.34 1.168c1.272-.579 2.634.01 3.462.957m1.043 10.375c1.24-.841 1.455-2.195.68-3.335-.776-1.14-2.115-1.438-3.355-.596-1.24.842-1.455 2.196-.68 3.335.776 1.14 2.115 1.438 3.355.596zm5.82-.328l-8.268 5.612-1.686-2.477.777-.528c-1-.118-1.93-.67-2.683-1.776-1.472-2.164-.784-5.239 1.68-6.911 2.464-1.673 5.579-1.18 7.05.984.754 1.107.924 2.174.666 3.146l.778-.528 1.685 2.478zm3.569 1.103a1.819 1.819 0 012.431.75 1.814 1.814 0 01-.75 2.428 1.819 1.819 0 01-2.432-.75 1.814 1.814 0 01.75-2.428zm-2.229 1.515l1.401 2.648-8.838 4.664-1.4-2.649 8.837-4.663zm2.75 15.54l-5.7 2.273-1.111-2.782 5.29-2.11c1.151-.458 1.4-1.396 1.045-2.286-.408-1.02-1.284-1.488-2.601-.963l-5.069 2.022-1.111-2.782 9.282-3.701 1.111 2.781-.872.348c.887.227 1.703.976 2.192 2.2.749 1.873.05 4-2.456 5m6.802.245a1.818 1.818 0 012.218 1.246 1.815 1.815 0 01-1.247 2.214 1.818 1.818 0 01-2.218-1.245 1.815 1.815 0 011.247-2.215zm-2.499 1.01l.81 2.884-9.625 2.694-.809-2.884 9.624-2.694zm-.599 15.766l-6.052 1.019-.499-2.954 5.619-.946c1.222-.206 1.664-1.07 1.505-2.015-.183-1.083-.94-1.725-2.34-1.49l-5.382.907-.498-2.954 9.857-1.66.498 2.954-.926.156c.819.409 1.458 1.314 1.677 2.614.336 1.988-.797 3.92-3.459 4.369m-.575 9.809c1.38-.023 2.301-1.037 2.278-2.455-.023-1.417-.98-2.4-2.359-2.377-1.378.023-2.301 1.037-2.278 2.454.024 1.418.98 2.4 2.359 2.378zm4.845 2.835l-9.494.157c-3.357.056-4.82-2.536-4.864-5.191-.035-2.077.716-3.826 2.34-4.772l1.521 2.531c-.693.39-1.243.98-1.221 2.297.023 1.397.757 2.244 2.176 2.22l.92-.015c-.831-.645-1.327-1.595-1.348-2.893-.047-2.835 2.237-4.95 4.995-4.996 2.758-.046 5.111 1.993 5.158 4.828.022 1.297-.442 2.263-1.25 2.936l1.019-.017.048 2.915zm-7.138 14.735c1.468.299 2.59-.492 2.865-1.841.275-1.35-.445-2.516-1.914-2.816-1.47-.299-2.59.491-2.865 1.841-.276 1.35.445 2.516 1.914 2.816zm4.296 3.932l-9.793-1.996.6-2.935.92.188c-.612-.797-.866-1.848-.598-3.159.523-2.562 3.207-4.216 6.126-3.621 2.918.595 4.739 3.167 4.215 5.73-.268 1.31-.915 2.177-1.79 2.67l.92.189-.6 2.934zm-8.125 8.165c1.404.525 2.634-.08 3.118-1.37s-.045-2.555-1.448-3.08c-1.404-.526-2.635.08-3.12 1.37-.483 1.29.046 2.554 1.45 3.08zm3.627 4.556l-9.36-3.504 1.053-2.804.88.329c-.48-.883-.567-1.96-.096-3.213.918-2.45 3.829-3.663 6.618-2.619 2.789 1.044 4.184 3.87 3.265 6.319-.47 1.252-1.245 2.008-2.187 2.358l.88.33-1.053 2.804zm-9.442 9.385l-5.355-2.996 1.466-2.613 4.97 2.782c1.082.605 1.969.208 2.438-.628.537-.958.35-1.932-.888-2.625l-4.76-2.665 1.465-2.613 8.72 4.88-1.466 2.613-.82-.459c.382.832.312 1.937-.333 3.087-.987 1.76-3.083 2.555-5.437 1.237m-4.052 11.903l-5.728-8.976 2.053-2.704 10.197 3.09-2.005 2.64-6.304-2.17 3.792 5.479zm-5.328 5.783l-2.457-2.344c1-.757 1.854-2.372.423-3.738l-3.266-3.117 2.07-2.165 7.227 6.895-2.07 2.166-1.287-1.228c.693 1.213.23 2.622-.64 3.531m-10.246 1.982c.952 1.157 2.32 1.247 3.386.372 1.065-.876 1.24-2.234.288-3.391-.952-1.156-2.321-1.247-3.386-.372-1.066.875-1.24 2.234-.288 3.39zm.859 5.758l-6.35-7.71 2.316-1.903.597.725c.027-1.005.491-1.981 1.526-2.831 2.022-1.662 5.15-1.258 7.042 1.04 1.892 2.297 1.685 5.44-.338 7.102-1.034.85-2.083 1.117-3.074.95l.596.724-2.315 1.903zm-11.422 1.451c.7 1.188 2.038 1.49 3.261.77 1.223-.72 1.608-2.035.908-3.222-.7-1.188-2.039-1.49-3.262-.77-1.222.72-1.607 2.035-.907 3.222zm-.08 5.61l-4.82-8.174c-1.704-2.89-.167-5.44 2.123-6.787 1.792-1.054 3.686-1.265 5.31-.32l-1.454 2.57c-.682-.41-1.466-.597-2.603.072-1.205.71-1.58 1.764-.86 2.986l.466.791c.153-1.04.736-1.939 1.856-2.598 2.446-1.439 5.414-.497 6.815 1.878 1.4 2.374.785 5.424-1.661 6.863-1.12.659-2.19.732-3.175.361l.518.878-2.515 1.48zm-10.792.282c.727.956 1.719 1.011 2.554.678 1.058-.423 1.555-1.225 1.436-2.274l-3.99 1.596zm.356-4.057c-.761.304-1.292.86-1.5 1.417l-2.74-.39c.405-1.623 1.518-2.82 3.281-3.526 3.174-1.268 5.995.077 7.102 2.84 1.106 2.761-.044 5.694-2.976 6.867-2.71 1.083-5.553-.21-6.674-3.01a5.759 5.759 0 01-.335-1.157l6.588-2.634c-.739-.822-1.726-.815-2.746-.407zm-14.453 8.084l-1.422-5.964 2.917-.693 1.32 5.536c.286 1.204 1.18 1.587 2.113 1.365 1.07-.254 1.66-1.052 1.332-2.43l-1.264-5.304 2.916-.693 2.315 9.712-2.917.694-.218-.913c-.353.843-1.214 1.54-2.498 1.846-1.964.467-3.97-.534-4.595-3.156m-7.619 2.202l-7.591.268-.102-2.873 7.59-.268zm-22.965-3.788c-.248 1.476.582 2.567 1.942 2.796 1.36.228 2.502-.532 2.75-2.009.249-1.477-.581-2.568-1.942-2.796-1.36-.228-2.501.532-2.75 2.009m-2.957-.497c.494-2.934 3.004-4.841 5.587-4.408 1.32.222 2.21.837 2.735 1.694l.818-4.863 2.957.496-2.319 13.784-2.957-.496.156-.926c-.777.64-1.819.93-3.14.709-2.582-.434-4.33-3.056-3.837-5.99m-9.055 2.634l.978-3.251c1.13.547 2.958.574 3.527-1.32l1.299-4.322 2.871.861-2.873 9.563-2.872-.861.512-1.703c-.768 1.167-2.235 1.394-3.442 1.033m-6.271-8.167c-.565 1.3-.021 2.559 1.17 3.076 1.192.516 2.484.053 3.048-1.248.565-1.3.022-2.559-1.17-3.075-1.192-.517-2.483-.053-3.048 1.247m6.97 3.02c-1.187 2.73-4.266 3.899-6.962 2.73-2.695-1.168-3.944-4.213-2.759-6.942 1.186-2.73 4.265-3.898 6.961-2.73 2.696 1.169 3.945 4.213 2.76 6.942m-17.849-7.923c-.34 1.152.202 1.983.966 2.457.967.601 1.908.528 2.684-.19l-3.65-2.267zm3.484-2.116c-.696-.432-1.46-.53-2.031-.368l-1.308-2.435c1.55-.636 3.175-.45 4.787.553 2.903 1.803 3.488 4.87 1.915 7.397-1.573 2.526-4.62 3.337-7.303 1.67-2.478-1.54-3.118-4.594-1.524-7.154a5.85 5.85 0 01.735-.954l6.026 3.744c.227-1.082-.364-1.873-1.297-2.453zm-12.619.293l-1.462-1.148 1.78-2.26 1.462 1.148 4.4-5.587 2.357 1.852-4.4 5.587 1.052.827-1.78 2.26-1.053-.827c-1.73 2.197-3.978 2.565-6.463.358l1.78-2.26c.818.77 1.61.96 2.327.05m-3.738-7.18l2.437-2.563c.592-.622.111-1.189-.9-2.038l1.872-1.97c3.116 2.407 3.13 4.045 1.202 6.071l-2.438 2.562 1.16 1.1-1.983 2.085-1.16-1.1-1.307 1.375-2.793-1.412 1.927-2.026-1.493-1.417 1.983-2.084 1.493 1.416zm-9.305-5.567l2.564-2.23c.663 1.066 2.195 2.063 3.688.765l3.408-2.963 1.969 2.26-7.54 6.555-1.97-2.259 1.343-1.167c-1.273.577-2.635-.012-3.462-.961m-1.025-10.369c-1.24.84-1.456 2.194-.682 3.334.774 1.14 2.113 1.439 3.353.598 1.24-.84 1.458-2.193.683-3.334-.774-1.14-2.113-1.439-3.353-.598zm-5.818.324l8.27-5.604 1.684 2.478-.778.526c1 .12 1.93.672 2.681 1.779 1.47 2.164.78 5.237-1.684 6.908-2.465 1.67-5.579 1.174-7.049-.99-.752-1.107-.921-2.174-.663-3.146l-.778.527-1.683-2.478zm-1.346-2.628l-1.399-2.65 8.843-4.655 1.399 2.65-8.843 4.655zm-2.23 1.513a1.819 1.819 0 01-2.431-.752 1.815 1.815 0 01.752-2.428 1.82 1.82 0 012.432.752 1.815 1.815 0 01-.753 2.428zm-.506-17.058l5.702-2.268 1.11 2.783-5.294 2.105c-1.152.458-1.402 1.396-1.047 2.287.407 1.02 1.282 1.489 2.6.964l5.072-2.016 1.109 2.782-9.287 3.694-1.11-2.783.873-.347c-.887-.228-1.702-.978-2.19-2.203-.747-1.873-.046-4 2.462-4.998m-4.3-1.251l-.806-2.884 9.627-2.687.807 2.886-9.627 2.685zm-2.499 1.008a1.817 1.817 0 01-2.216-1.247 1.815 1.815 0 011.248-2.214 1.818 1.818 0 012.217 1.247 1.815 1.815 0 01-1.249 2.214zM5.396 94.76l6.052-1.012.495 2.954-5.618.94c-1.223.204-1.665 1.068-1.507 2.013.182 1.083.938 1.726 2.338 1.492l5.381-.9.496 2.953-9.857 1.65-.495-2.954.926-.156c-.818-.409-1.457-1.315-1.674-2.614-.334-1.99.801-3.92 3.463-4.365m.58-9.8c-1.38.023-2.302 1.037-2.28 2.454.024 1.417.98 2.4 2.359 2.378 1.38-.023 2.302-1.036 2.279-2.454-.024-1.417-.98-2.4-2.358-2.378zM1.13 82.125l9.494-.155c3.358-.055 4.82 2.537 4.863 5.193.034 2.076-.717 3.826-2.341 4.77l-1.52-2.53c.693-.391 1.243-.98 1.221-2.297-.023-1.398-.756-2.244-2.175-2.221l-.92.015c.83.645 1.326 1.596 1.347 2.893.047 2.835-2.238 4.95-4.996 4.995-2.758.044-5.11-1.994-5.157-4.83-.021-1.297.442-2.263 1.251-2.935l-1.019.017-.048-2.915zm7.158-14.739c-1.469-.3-2.59.489-2.867 1.838-.277 1.35.443 2.516 1.911 2.817 1.469.3 2.59-.489 2.867-1.839.277-1.35-.443-2.516-1.911-2.816zM3.995 63.45l9.79 2.004-.602 2.934-.92-.188c.611.798.865 1.848.596 3.158-.526 2.562-3.211 4.214-6.129 3.617-2.917-.598-4.735-3.171-4.21-5.733.27-1.31.916-2.177 1.793-2.67l-.92-.188.602-2.934zm8.135-8.159c-1.404-.527-2.635.077-3.121 1.367-.485 1.29.042 2.555 1.446 3.082 1.403.527 2.635-.077 3.12-1.367.486-1.29-.042-2.555-1.445-3.082zM8.507 50.73l9.357 3.514-1.056 2.804-.88-.33c.48.884.565 1.962.093 3.214-.921 2.449-3.834 3.659-6.622 2.612-2.788-1.048-4.18-3.875-3.258-6.324.471-1.252 1.246-2.006 2.19-2.356l-.88-.33 1.056-2.804zm9.45-9.372l5.35 3.001-1.467 2.612-4.968-2.786c-1.08-.607-1.967-.211-2.437.625-.539.957-.353 1.932.885 2.625l4.758 2.67-1.468 2.611-8.715-4.888 1.468-2.612.82.46c-.381-.832-.31-1.937.336-3.086.988-1.758 3.085-2.552 5.438-1.232m4.063-11.9l5.72 8.981-2.056 2.703-10.195-3.1 2.008-2.638 6.302 2.176-3.787-5.483zm5.332-5.78l2.455 2.347c-1.001.757-1.857 2.371-.427 3.738l3.264 3.12-2.073 2.165-7.222-6.904 2.074-2.164 1.285 1.23c-.691-1.215-.227-2.623.644-3.532m10.244-1.964c-.952-1.157-2.32-1.249-3.386-.375-1.066.874-1.243 2.233-.291 3.39.95 1.158 2.32 1.25 3.385.376 1.066-.875 1.243-2.233.292-3.39zm-.854-5.758l6.341 7.716-2.317 1.9-.596-.725c-.028 1.004-.493 1.98-1.528 2.829-2.024 1.66-5.151 1.253-7.04-1.047-1.89-2.299-1.68-5.442.343-7.101 1.035-.849 2.084-1.115 3.076-.946l-.596-.726 2.317-1.9zm11.428-1.448c-.698-1.188-2.036-1.491-3.26-.773-1.224.719-1.61 2.034-.91 3.222.699 1.188 2.036 1.491 3.26.772 1.224-.718 1.61-2.033.91-3.221zm.086-5.61l4.812 8.179c1.702 2.892.163 5.44-2.13 6.786-1.792 1.052-3.687 1.261-5.31.315l1.456-2.57c.682.41 1.466.6 2.604-.068 1.206-.709 1.583-1.763.863-2.986l-.466-.792c-.153 1.04-.737 1.939-1.858 2.596-2.447 1.437-5.415.492-6.813-1.883-1.398-2.376-.78-5.426 1.667-6.863 1.12-.657 2.191-.73 3.175-.358l-.516-.878L48.256 8.9zm10.792-.271c-.727-.957-1.718-1.013-2.554-.68-1.058.422-1.556 1.222-1.437 2.272l3.99-1.592zm-.36 4.056c.761-.304 1.293-.86 1.501-1.415l2.739.39c-.406 1.624-1.52 2.821-3.283 3.524-3.175 1.266-5.995-.081-7.1-2.844-1.103-2.763.049-5.695 2.982-6.865 2.71-1.08 5.553.215 6.672 3.015.156.39.267.775.333 1.157l-6.59 2.629c.738.823 1.726.816 2.747.41zm14.456-8.069l1.416 5.965-2.918.69-1.315-5.537c-.286-1.204-1.178-1.588-2.112-1.367-1.07.254-1.661 1.05-1.333 2.43L68.14 12.1l-2.918.691-2.306-9.714 2.917-.692.217.914c.355-.844 1.217-1.54 2.5-1.844 1.965-.466 3.97.537 4.593 3.16m7.632-2.197l7.59-.262.1 2.873-7.591.262z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </Wrapper>
          </Link>
        </Wrapper>
        <Wrapper className="sidebar-type-outline max-sm-tab:hidden lowercase  h-[calc(16.66667vw+30px)] max-lgl:text-[calc(2.0875rem+13.05vw)] flex items-center justify-center font-bold text-[11.875rem] absolute top-[-.9375rem] left-full z-50 min-w-[100vh] whitespace-nowrap pointer-events-none leading-none rotate-90 origin-top-left">
          Caroline
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
                    Caroline
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
          <Wrapper className="mx-[-15px] relative z-20 group trigger-training-team">
            <Wrapper className="md:max-w-[58.33333%] w-full px-[15px]">
              <Wrapper className="p-[1.875rem] md:p-[3.125rem] md:mt-[-5rem] mt-[-6.25rem] bg-white">
                <Wrapper className="markdown">
                  <p className="text-[calc(1.05625rem+.675vw)] md:text-[1.5625rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-75 font-normal text-black leading-[1.2]">
                    <strong>'I had no idea if I was on the right track'</strong>
                  </p>
                  <p className="text-[1rem] md:text-[1.125rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-100 font-normal text-black leading-[1.8]">
                    <strong>
                      A year ago I started training for the Enschede half
                      marathon. I turned 42 and thought it was a good marathon
                      age. Unfortunately, in March I had to take a few steps
                      back and it turned out that my knee did not agree with the
                      many kilometers. Due to the knee injury I had to stop
                      running. I have been exercising 3 to 4 times a week since
                      I was 16.
                    </strong>
                  </p>
                  <p className="text-[1rem] md:text-[1.125rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-100 font-normal text-black leading-[1.8]">
                    Because 'not exercising' would not occur to me, I looked for
                    another sport that could be just as easy to fit into my
                    schedule as running. I had already started some strength
                    training. Only I had no idea whether I was on the right
                    track and how many kilos I had to hang on the bar. That's
                    why I started looking for professional guidance and ended up
                    at fitlab.
                    <br />
                    <br />I immediately felt at ease and Leon's enthusiasm was
                    infectious. I notice that sport gives me more strength both
                    physically and mentally. Each week I grew in both areas.
                    What I have also learned is to recognize the limits of my
                    body. If the body can't do another repetition, it really
                    can't do it anymore. The personal schedules prepared by Leon
                    in the app provide me with guidance during my own training.
                  </p>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Container>
      </section>
      <section className="bg-secondary-20 relative">
      <Wrapper className="bg-white h-full w-[calc(16.66667%+30px)] right-0 top-0 absolute max-sm-tab:hidden"></Wrapper>
        <Container>
          <Wrapper className="mx-[-15px] relative z-20 trigger-animation-section-2 group">
            <Wrapper className="md:max-w-[66.66667%] w-full px-[15px]">
              <h2 className="h3 anim-title is-shown px-[1.875rem] pb-[1.875rem] md:pb-[3.75rem] md:px-[3.125rem] mb-0">
                <span className="anim-title__wrapper overflow-hidden block leading-none">
                  <span className="max-lgl:text-[calc(1.3375rem+4.05vw)] block group-[.is-shown]:translate-y-[0%] leading-none translate-y-[110%] ease-cubic-22 duration-1000 transition-transform text-[4.375rem] text-primary font-bold lowercase">
                    this way of
                  </span>
                </span>{" "}
                <span className="anim-title__wrapper overflow-hidden block leading-none">
                  <span className="max-lgl:text-[calc(1.3375rem+4.05vw)] block group-[.is-shown]:translate-y-[0%] leading-none translate-y-[110%] ease-cubic-22 duration-1000 transition-transform text-[4.375rem] text-primary font-bold lowercase ">
                    training costs me
                  </span>
                </span>{" "}
                <span className="anim-title__wrapper overflow-hidden block leading-none">
                  <span className="max-lgl:text-[calc(1.3375rem+4.05vw)] block group-[.is-shown]:translate-y-[0%] leading-none translate-y-[110%] ease-cubic-22 duration-1000 transition-transform text-[4.375rem] text-primary font-bold lowercase ">
                    less time, with
                  </span>
                </span>{" "}
                <span className="anim-title__wrapper overflow-hidden block leading-none">
                  <span className="max-lgl:text-[calc(1.3375rem+4.05vw)] block group-[.is-shown]:translate-y-[0%] leading-none translate-y-[110%] ease-cubic-22 duration-1000 transition-transform text-[4.375rem] text-primary font-bold lowercase ">
                    a better result
                  </span>
                </span>
              </h2>
            </Wrapper>
          </Wrapper>
        </Container>
      </section>
      <section className="bg-secondary-20 relative">
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
                  src={PersonalTrainingFirstImage.src}
                  sizes="100vw"
                  width={PersonalTrainingFirstImage.width}
                  height={PersonalTrainingFirstImage.height}
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
                <p className="text-[1rem] md:text-[1rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-100 font-normal text-black leading-[1.8]">
                  Leon also helped me with my diet. Thanks to his advice, I now
                  eat much more varied and in the right proportions when it
                  comes to proteins, fats and carbohydrates. The nutrition app
                  is a useful tool for this. I now know how much I can eat and
                  which foods to choose, without having to stick to a
                  complicated diet.
                  <br />
                  <br />I have now fully resumed my work and do strength
                  training 3-4 times a week in addition to running outdoors once
                  a week. Of course, with 2 daughters this requires the
                  necessary planning. That's why I have set times when I
                  exercise and it has become part of the weekly routines. I
                  think a nice added bonus is that this way of training takes
                  much less time than cardio, with better results.
                </p>
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
                  src={Inzet_2.src}
                  sizes="100vw"
                  width={Inzet_2.width}
                  height={Inzet_2.height}
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
                <p className="text-[1rem] md:text-[1rem] opacity-0 duration-500 group-[.is-shown]:opacity-100 delay-100 font-normal text-black leading-[1.8]">
                  I dare say that Leon's guidance at fitlab has helped me
                  recover a lot faster. Highly recommended for anyone who wants
                  to start strength training in a responsible way for whatever
                  reason. I would like to thank Fitlab and Leon in particular
                  for the great guidance and fun time!
                </p>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Container>
      </section>
    </>
  );
};

export default Banner;
