import { getBrandList } from "@/utilities/api";
import Image from "next/image";


const Brand = async () => {
  const brands = await getBrandList();

  return (
    <>
      {
        brands &&
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-2">
              {
                brands?.map((brand) => {
                  return (
                    <div className="mb-4 w-full md:w-1/2 lg:w-1/4 px-2" key={brand?.id}>
                      <div className="py-16 bg-gray-50 rounded">
                        <a href="#">
                          <Image
                            className="mx-auto w-auto h-8"
                            src={brand?.image}
                            alt={brand?.name}
                            width={127}
                            height={32}
                          />
                        </a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      }
    </>
  );
};

export default Brand;
