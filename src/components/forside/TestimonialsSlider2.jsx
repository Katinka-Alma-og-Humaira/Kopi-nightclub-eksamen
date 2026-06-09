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
    <div>
      <div className="max-w-5xl mx-auto overflow-auto">
        <Swiper className="text-white overflow-visible!" modules={[Pagination]} pagination={{ clickable: true }} spaceBetween={50} slidesPerView={1}>
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col items-center mb-10">
                <Image src={`${process.env.NEXT_PUBLIC_API_URL}${testimonial.asset.url}`} alt={testimonial.asset.alt} width={200} height={50} />
                <h2>{testimonial.name}</h2>
                <p className="text-center">{testimonial.content}</p>
                <div className="flex text-white">
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
