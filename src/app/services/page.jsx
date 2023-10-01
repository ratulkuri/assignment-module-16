import AllService from "@/components/AllService";
import { Camp } from "@/components/Common/Camp";
import Subscribe from "@/components/Subscribe";
import { getSiteMeta } from "@/utilities/api";

export async function generateMetadata() {
  // SEO DATA FETCH
  const siteMetaData = await getSiteMeta('services');

  return {
    title: siteMetaData?.title || "Design Agency",
    description: siteMetaData?.description,
    keywords: siteMetaData?.keywords,
    image: siteMetaData?.image,
    url: "https://assignment-module-16.vercel.app/services",
    type: "website",
  };
}

const Page = () => {
  return (
    <>
      <Camp title={"Services"} pagePath={"/services"} />

      <AllService />
      <Subscribe />
    </>
  );
};

export default Page;
