import Banner from "@/app/components/pages/at-home/banner/Banner"
import ImageText from "@/app/components/pages/at-home/section-2/ImageText"


export const metadata = {
  title: "Essence: at home",
  description: "Gym closed? We come to you online. No equipment is required, our personal trainers are guaranteed to provide you with a training of the highest standard",
};
const page = () => {
  return (
    <>
<Banner/>
<ImageText/>
</>
  )
}

export default page
