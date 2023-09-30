import Link from "next/link";
import { getBrandList, getHeroList } from "@/utilities/api";
import BrandCarousal from "./BrandCarousal";

export default async function HeroList() {

  const HeroList = await getHeroList();
  const brands = await getBrandList();

  return (
    <>
      {
        HeroList &&
        <section className="bg-theme-green-light pb-8">
          <div className="relative pt-24 lg:pt-36 pb-20 px-4 z-10">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-12 lg:mb-0 flex items-center">
                  <div className="w-full text-center md:text-left">
                    <div className="max-w-md mx-auto lg:mx-0">
                      <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                        {HeroList?.title}
                      </h2>
                    </div>
                    <div className="max-w-sm mx-auto lg:mx-0">
                      <p className="mb-6 text-black leading-loose">
                        {HeroList?.description}
                      </p>
                      <div>
                        <a
                          className="btn btn-primary mb-3 lg:mb-0 lg:mr-3 w-full md:w-auto transition duration-200"
                          href="#"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <div className="flex flex-wrap lg:mb-4 lg:ml-6">
                    <div className="w-1/3 md:w-1/2 lg:w-1/3 h-32 lg:h-64 p-2">
                      <img
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                        src={HeroList?.image1}
                        alt=""
                      />
                    </div>
                    <div className="w-2/3 md:w-1/2 lg:w-2/3 h-32 lg:h-64 p-2">
                      <img
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                        src={HeroList?.image2}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap lg:mb-4 lg:mr-6">
                    <div className="w-2/3 md:w-1/2 lg:w-2/3 h-32 lg:h-64 p-2">
                      <img
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                        src={HeroList?.image3}
                        alt=""
                      />
                    </div>
                    <div className="w-1/3 md:w-1/2 lg:w-1/3 h-32 lg:h-64 p-2">
                      <img
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                        src={HeroList?.image4}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <img
            className="hidden lg:block absolute inset-0 w-full"
            src="atis-assets/background/lines.svg"
            alt=""
          /> */}
          <BrandCarousal brands={brands} />
        </section>
      }
    </>
  );
}
