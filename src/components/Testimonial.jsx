import { getTestimonialList } from "@/utilities/api";
import TestimonialCard from "./Cards/TestimonialCard";
import SectionHeader from "./Common/SectionHeader";

const Testimonial = async () => {
  const Testimonials = await getTestimonialList();

  return (
    <>
      <section className="pt-10 md:pt-20 pb-12">
        <div className="container mx-auto">
          <div className="mb-12">
            <SectionHeader title="Testimonial List" description="Better Agency/SEO Solution At Your Fingertips" />
          </div>
          <div className="flex flex-wrap">
            {
              Testimonials?.map((testimonial) => (
                <div key={testimonial?.id} className="w-full md:w-1/3 py-5 md:px-5">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
