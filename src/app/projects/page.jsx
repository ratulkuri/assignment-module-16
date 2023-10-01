import { Camp } from "@/components/Common/Camp";
import Project from "@/components/Project";
import Subscribe from "@/components/Subscribe";
import { getSiteMeta } from "@/utilities/api";

export async function generateMetadata() {
  // SEO DATA FETCH
  const siteMetaData = await getSiteMeta('projects');

  return {
    title: siteMetaData?.title || "Design Agency",
    description: siteMetaData?.description,
    keywords: siteMetaData?.keywords,
    image: siteMetaData?.image,
    url: "https://assignment-module-16.vercel.app/projects",
    type: "website",
  };
}

const Page = () => {
  return (
    <>
      <Camp title={"Projects"} pagePath={"/projects"} />

      <Project />
      <Subscribe />
    </>
  );
};

export default Page;
