"use client";

import React, { useRef } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

const Video = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="flex flex-col items-center px-4 gap-4">
      <motion.div className="relative w-full max-w-[900px] overflow-hidden" initial="rest" whileHover="hover" animate="rest">
        <motion.div className="absolute top-0 left-0 bg-[var(--color-pink)] w-27 h-27 z-20" variants={{ rest: { y: -200, opacity: 0 }, hover: { y: -60, opacity: 1 } }} transition={{ duration: 0.3, ease: "easeOut" }} animate={{ x: -50, rotate: 50 }} />
        <motion.div className="absolute bottom-0 right-0 bg-[var(--color-pink)] w-27 h-27 z-20" variants={{ rest: { y: 200, opacity: 0 }, hover: { y: 60, opacity: 1 } }} transition={{ duration: 0.3, ease: "easeOut" }} animate={{ x: 50, rotate: 50 }} />
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          spaceBetween={50}
          slidesPerView={1}
          className="w-full"
        >
          {/* ai brugt her til at manipulere ved swipers snimation */}
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
      </motion.div>

      <div className="flex gap-3">
        <button ref={prevRef} className="text-[var(--color-neutrals-200)] cursor-pointer border border-white py-2 px-3">
          ◀
        </button>
        <button ref={nextRef} className="text-[var(--color-neutrals-200)] cursor-pointer border border-white py-2 px-3">
          ▶
        </button>
      </div>
    </div>
  );
};

export default Video;
