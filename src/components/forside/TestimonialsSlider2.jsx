"use client";
import { LiaTwitterSquare } from "react-icons/lia";
import { LiaFacebookSquare } from "react-icons/lia";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const TestimonialsSlider2 = ({ testimonials }) => {
  return (
    <div className="relative bg-[url('/assets/bg/footerbg.jpg')] pt-10 pb-10 bg-cover bg-center bg-no-repeat lg:max-w-[1500px] max-h-[1000px] lg:mx-auto">
      <div className="absolute inset-0 bg-black/90" />
      <div className="max-w-5xl mx-auto overflow-auto">
        <Swiper className="text-white overflow-visible!" modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={50} slidesPerView={1}>
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col items-center mb-(--space-l)">
                <Image src={`${process.env.NEXT_PUBLIC_API_URL}${testimonial.asset.url}`} alt={testimonial.asset.alt} width={200} height={50} />
                <h2 className="my-(--space-s)">{testimonial.name}</h2>
                <p className="text-center ">{testimonial.content}</p>
                <div className="flex text-white my-(--space-s)">
                  {testimonial.facebook && (
                    <a href={testimonial.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <LiaFacebookSquare size={50} />
                    </a>
                  )}
                  {testimonial.twitter && (
                    <a href={testimonial.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <LiaTwitterSquare size={50} />
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsSlider2;
