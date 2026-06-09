"use client";

import React from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Video = () => {
  return (
    <div className="flex justify-center px-4">
      <motion.div className="relative w-full max-w-[900px] overflow-hidden mb-16" initial="rest" whileHover="hover" animate="rest">
        <motion.div
          className="absolute top-0 left-0 bg-[var(--color-pink)] w-27 h-27 z-20"
          variants={{
            rest: { y: -200, opacity: 0 },
            hover: { y: -60, opacity: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          animate={{ x: -50, rotate: 50 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 bg-[var(--color-pink)] w-27 h-27 z-20"
          variants={{
            rest: { y: 200, opacity: 0 },
            hover: { y: 60, opacity: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          animate={{ x: 50, rotate: 50 }}
        />
        <Swiper modules={[Navigation]} navigation spaceBetween={50} slidesPerView={1} className="w-full">
          <SwiperSlide>
            <video className="w-full aspect-video object-cover rounded-2xl" src="/assets/media/video-crowd.mp4" controls />
          </SwiperSlide>
          <SwiperSlide>
            <video className="w-full aspect-video object-cover rounded-2xl" src="/assets/media/video-dj-crowd-2.mp4" controls />
          </SwiperSlide>
          <SwiperSlide>
            <video className="w-full aspect-video object-cover rounded-2xl" src="/assets/media/video-dj-crowd1.mp4" controls />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Video;
