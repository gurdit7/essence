'use client'
import Banner from "@/app/components/pages/team/caroline/banner/Banner";
import { members } from "@/app/data/default";
import { usePathname } from "next/navigation";
const Main = () => {
    const path = usePathname();
    const userId = path.replace('/pages/team/', '');
    const user = members.filter((item)=>{
      if(item.id === userId){
        return item;
      }
    });
    return (
   <>
   <Banner user={user[0]}/>
   </>
    );
}

export default Main;
