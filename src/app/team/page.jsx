import { Camp } from "@/components/Common/Camp";
import Subscribe from "@/components/Subscribe";
import TeamList from "@/components/TeamList";

const Page = () => {
  return (
    <>
      <Camp title={"Team"} />
      <TeamList />
      <Subscribe />
    </>
  );
};

export default Page;
