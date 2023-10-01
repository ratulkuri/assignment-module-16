import { Camp } from "@/components/Common/Camp";
import Subscribe from "@/components/Subscribe";
import TeamList from "@/components/TeamList";
import { getSiteMeta } from "@/utilities/api";

export async function generateMetadata() {
  // SEO DATA FETCH
  const siteMetaData = await getSiteMeta('team');

  return {
    title: siteMetaData?.title || "Design Agency",
    description: siteMetaData?.description,
    keywords: siteMetaData?.keywords,
    image: siteMetaData?.image,
    url: "https://assignment-module-16.vercel.app/team",
    type: "website",
  };
}

const Page = () => {
  return (
    <>
      <Camp title={"Team"} pagePath={"/team"} />
      <TeamList />
      <Subscribe />
    </>
  );
};

export default Page;
