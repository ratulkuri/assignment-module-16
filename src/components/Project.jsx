import { Card, CardHeader, CardBody, Typography } from "@/components/MaterialReact";
import { getAllProject } from "@/utilities/api";
import Image from "next/image";
import SectionHeader from "./Common/SectionHeader";

const Project = async () => {

  const Projects = await getAllProject();

  return (
    <>
      <section className="">
        <div className="py-10 md:py-20 bg-white radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <SectionHeader title="All Project"  description="Better Agency/SEO Solution At Your Fingertips" />
            </div>
            {
              Projects && Projects?.length > 0 &&
              <div className="flex flex-wrap -mx-4 mb-4">
                {
                  Projects?.map((project) => (
                    <div key={project?.id} className="mb-8 w-full md:w-1/2 px-4">
                      <Card className="w-full">
                        <CardHeader shadow={false} floated={false} className="h-64 lg:h-[472px]">
                          <Image
                            src={project?.image}
                            alt={project?.title}
                            width={704}
                            height={472}
                            className="h-full w-full object-cover"
                          />
                        </CardHeader>
                        <CardBody>
                          <Typography color="blue-gray" className="font-poppin text-lg lg:text-[26px] font-semibold">
                            {project?.title}
                          </Typography>
                        </CardBody>
                      </Card>
                    </div>
                  ))
                }
              </div>
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
