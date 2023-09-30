import Image from "next/image"

const TestimonialCard = ({testimonial}) => {
  return (
    <>
        <div
            className="font-poppin px-6 py-10 bg-white theme-shadow rounded-2xl hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
            data-wow-delay=".1s"
        >
            <div className="w-full flex flex-col items-center mb-4 gap-10">
                <Image
                    className="h-[100px] w-[100px] rounded-3xl object-cover"
                    width={100}
                    height={100}
                    src={testimonial?.image}
                    alt={testimonial?.name}
                />
                <p className="text-center leading-loose text-blueGray-400">
                    {testimonial?.msg}
                </p>
                <div className="pl-4 text-center">
                    <h4 className="text-lg lg:text-[26px] font-semibold mb-2 text-md">
                        {testimonial?.name}
                    </h4>
                    {
                        testimonial?.designation &&
                        <p className="text-base">
                            {testimonial?.designation}
                        </p>
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default TestimonialCard