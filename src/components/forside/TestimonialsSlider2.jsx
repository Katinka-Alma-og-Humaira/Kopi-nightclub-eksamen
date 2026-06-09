"use client";
import { LiaSnapchatSquare } from "react-icons/lia";
import { LiaTwitterSquare } from "react-icons/lia";
import { LiaFacebookSquare } from "react-icons/lia";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TestimonialsSlider2 = ({ testimonials }) => {
  return (
    <div className="max-w-5xl mx-auto overflow-auto">
      {/* AI generet: bulletClass og bulletActiveClass */}
      <Swiper className="text-white overflow-visible!" modules={[Navigation, Pagination]} navigation pagination={{ clickable: true, bulletClass: "!bg-white opacity-100 inline-block w-2 h-2 rounded-full mx-1 cursor-pointer", bulletActiveClass: "!bg-[var(--color-pink)]" }} spaceBetween={50} slidesPerView={1} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
        {testimonials.map((testimonials) => (
          <SwiperSlide key={testimonials.id}>
            <div className="flex flex-col items-center mb-10">
              <Image src={`${process.env.NEXT_PUBLIC_API_URL}${testimonials.asset.url}`} alt={testimonials.asset.alt} width={200} height={50} />
              <h2>{testimonials.name}</h2>
              <p className="text-center">{testimonials.content}</p>
              <div className="flex text-white">
                <LiaFacebookSquare size={50} />
                <LiaTwitterSquare size={50} />
                <LiaSnapchatSquare size={50} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider2;
