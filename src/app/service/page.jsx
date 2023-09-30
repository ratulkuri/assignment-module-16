import AllService from "@/components/AllService";
import { Camp } from "@/components/Common/Camp";
import Subscribe from "@/components/Subscribe";

const Page = () => {
  return (
    <>
      <Camp title={"Service"} />

      <AllService />
      <Subscribe />
    </>
  );
};

export default Page;
