import { Camp } from "@/components/Common/Camp";
import Testimonial from "@/components/Testimonial";
import Subscribe from "@/components/Subscribe";
import { getSiteMeta } from "@/utilities/api";

export async function generateMetadata() {
  // SEO DATA FETCH
  const siteMetaData = await getSiteMeta('testimonials');

  return {
    title: siteMetaData?.title || "Design Agency",
    description: siteMetaData?.description,
    keywords: siteMetaData?.keywords,
    image: siteMetaData?.image,
    url: "https://assignment-module-16.vercel.app/testimonials",
    type: "website",
  };
}

const Page = () => {
  return (
    <>
      <Camp title={"Testimonials"} pagePath={"/testimonials"} />

      <Testimonial />
      <Subscribe />
    </>
  );
};

export default Page;
