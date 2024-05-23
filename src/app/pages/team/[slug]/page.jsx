import Main from "@/app/components/pages/team/member/Main";
export async function generateMetadata({ params }) {
  return {
    title: `Member: ${params?.slug}`,
  }
}
const page = () => {
return(
  <Main/>
)
}

export default page;
