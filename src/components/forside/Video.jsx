"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { div } from "framer-motion/client";

const Video = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  // ai har hjulpet med at få swiper til at fungere med pilene i bunden da det ikke er swipers standard styling
  return (
    <div className="w-full max-w-full lg:max-w-[1100px] max-h-[1000px] lg:mx-auto my-(--space-l)">
      <div className="flex flex-col items-center mb-6">
        <h1>LATEST VIDEO</h1>
        <img src="/assets/bottom_line2.png" alt="Billede af pink gradient linje" />
      </div>
      <div className="flex flex-col items-center px-4 gap-4">
        <div className="relative w-full max-w-[900px] overflow-hidden">
          <div className="absolute top-0 left-0 bg-[var(--color-pink)] w-16 h-16 md:w-30 md:h-30 z-2 rotate-45 -translate-x-8 -translate-y-8 md:-translate-x-15 md:-translate-y-15" />
          <div className="absolute bottom-0 right-0 bg-[var(--color-pink)] w-16 h-16 md:w-30 md:h-30 z-2 rotate-45 translate-x-8 translate-y-8 md:translate-x-15 md:translate-y-15" />
          <Swiper modules={[Navigation]} navigation={{ prevEl, nextEl }} spaceBetween={50} slidesPerView={1} className="w-full">
            <SwiperSlide>
              <video className="w-full aspect-video object-cover" src="/assets/media/video-crowd.mp4" controls />
            </SwiperSlide>
            <SwiperSlide>
              <video className="w-full aspect-video object-cover" src="/assets/media/video-dj-crowd-2.mp4" controls />
            </SwiperSlide>
            <SwiperSlide>
              <video className="w-full aspect-video object-cover" src="/assets/media/video-dj-crowd1.mp4" controls />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex gap-3">
          <button ref={setPrevEl} className="text-[var(--color-neutrals-200)] cursor-pointer border border-white py-2 px-3">
            ◀
          </button>
          <button ref={setNextEl} className="text-[var(--color-neutrals-200)] cursor-pointer border border-white py-2 px-3">
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
