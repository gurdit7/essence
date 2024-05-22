"use client";

import { useThemeConfig } from "@/app/contexts/theme/ThemeConfigure";

const Main = ({ children }) => {
    const {bgColor} = useThemeConfig();
  return <main className={bgColor + ' duration-[1s] ease-in-out'}>{children}</main>;
};

export default Main;
