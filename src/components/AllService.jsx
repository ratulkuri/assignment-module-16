import { getServiceList } from "@/utilities/api";
import ServiceCard from "./Cards/ServiceCard";
import SectionHeader from "./Common/SectionHeader";

const AllService = async () => {

  const Services = await getServiceList();

  return (
    <>
      <section>
        <div className="py-10 md:py-20 bg-white radius-for-skewed">
          <div className="container px-4 mx-auto">
            <div className="mb-16">
              <SectionHeader title="Our All Services" description="We Provide BestWeb design services" />
            </div>
            {
              Services && Services?.length > 0 &&
              <div className="flex flex-wrap -mx-4 mb-4">
                {
                  Services?.map((service) => (
                    <div key={service?.id} className="w-full md:w-1/2 mb-8 px-4">
                      <ServiceCard service={service} />
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
}

export default AllService;
