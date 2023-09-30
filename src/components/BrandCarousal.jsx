"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css'
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const BrandCarousal = ({brands}) => {

  return (
    <>
        {
            brands &&
            <div className="bg-white py-8">
                <div className="container">
                    <Swiper
                        slidesPerView={2}
                        navigation={false}
                        pagination={false}
                        rewind={true}
                        allowTouchMove={false}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints= {{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {
                            brands?.map((brand) => (
                                <SwiperSlide key={brand?.id}>
                                    <Image src={brand?.image} alt={brand?.name} width={178} height={30} className="w-auto h-7 mx-auto" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        }
    </>
  )
}

export default BrandCarousal