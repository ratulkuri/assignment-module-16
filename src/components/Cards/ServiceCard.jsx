import Image from "next/image"

const ServiceCard = ({service}) => {
  return (
    <>
        <div className="font-poppin block theme-shadow p-4 md:p-8 rounded-2xl">
            <h3 className="text-[26px] font-semibold mb-5">{service?.title}</h3>
            {
                service?.des &&
                <p className="text-gray-500 text-base mb-5">{service?.des}</p>
            }
            <div className="w-full">
                <div className="flex flex-wrap lg:mb-4">
                    <div className="w-1/2 lg:w-1/3 h-32 lg:h-64 p-2">
                      <Image
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                        src={service?.image1}
                        alt=""
                        width={450}
                        height={240}
                      />
                    </div>
                    <div className="w-1/2 lg:w-2/3 h-32 lg:h-64 p-2">
                      <Image
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                        src={service?.image2}
                        alt=""
                        width={450}
                        height={240}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap lg:mb-4">
                    <div className="w-1/2 lg:w-2/3 h-32 lg:h-64 p-2">
                      <Image
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                        src={service?.image3}
                        alt=""
                        width={450}
                        height={240}
                      />
                    </div>
                    <div className="w-1/2 lg:w-1/3 h-32 lg:h-64  p-2">
                      <Image
                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                        src={service?.image4}
                        alt=""
                        width={450}
                        height={240}
                      />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceCard