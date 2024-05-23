import Banner from "@/app/components/pages/duo-personal-training-enschede/banner/Banner"
import ImageText from "@/app/components/pages/duo-personal-training-enschede/section-2/ImageText"
import Wrapper from "@/app/components/ui/wrapper/Wrapper"

export const metadata = {
  title: "Essence: Duo personal training Enschede",
  description: "Whether it's a friend, colleague or partner: training together is fun. Moreover, you keep each other sharp and motivated. The fastest way to achieving your goals!",
};

const page = () => {
  return (
<>
<Wrapper className=' overflow-hidden'>
<Banner/>
<ImageText/>
</Wrapper>
</>
  )
}

export default page
