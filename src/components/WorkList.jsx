import { getWorkList } from "@/utilities/api";
import SectionHeader from "./Common/SectionHeader";
import WorkListCard from "./Cards/WorkListCard";

const WorkList = async () => {

  const WorkList = await getWorkList();

  return (
    <>
      {
        WorkList &&
        <section>
          <div className="px-4 py-10 lg:py-20 bg-gray-50 radius-for-skewed">
            <div className="container mx-auto px-4">
              <div className="mb-10">
                <SectionHeader title="Work" description="We provide the Perfect Solution to your business growth" />
              </div>
              <div className="flex flex-wrap -mx-4">
                {
                  WorkList?.map((work) => <WorkListCard work={work} key={work?.id} />)
                }
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default WorkList;
