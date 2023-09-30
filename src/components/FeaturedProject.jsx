import { getFeaturedProject } from "@/utilities/api";

import ProjectCard from "./Cards/ProjectCard";
import SectionHeader from "./Common/SectionHeader";

const FeaturedProject = async () => {

  const featuredProject = await getFeaturedProject();

  return (
    <>
      {
        featuredProject &&
        <section className="bg-theme-green-light">
          <div className="px-4 py-20 radius-for-skewed">
            <div className="container mx-auto px-4">
              <div className="mb-10">
                <SectionHeader title="Featured Project" description="We provide the Perfect Solution to your business growth" />
              </div>
              <div className="grid grid-cols-4 items-center -mx-4">
                {
                  featuredProject?.map((project, index) => {
                    if(index < 5) {
                      return (
                        <div key={project?.id} className={`featured-project mb-4 lg:mb-0 ${(index === 0) ? "row-span-1 lg:row-span-2 col-span-4 lg:col-span-2 lg:h-full" : "row-span-1 col-span-4 lg:col-span-1"}`}>
                          <div className={`${(index === 0) ? "px-3 h-full" : "pb-3 px-3 lg:px-6"}`}>
                            <ProjectCard project={project} />
                          </div>
                        </div>
                      )
                    }
                  })
                }
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default FeaturedProject;
