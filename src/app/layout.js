import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layouts/Header/Header";
import Main from "./components/ui/main/Main";
import { ThemeConfiger } from "./contexts/theme/ThemeConfigure";
import Footer from "./layouts/Footer/Footer";
import ProgressBar from "./components/ui/progress-bar/ProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Essence: Personal training Enschede",
  description: "Essence is a Personal training studio & Lifestyle club in the center of Enschede. Everyone has their own reason for registering with Essence. Building muscle, losing weight or improving fitness. Whatever your goal is; personal approach, hard work, perseverance and customization are our key words.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>        
        <ThemeConfiger>
        <ProgressBar/>
        <Header />        
        <Main>{children}</Main>
        </ThemeConfiger>
        <Footer/>
      </body>
    </html>
  );
}
