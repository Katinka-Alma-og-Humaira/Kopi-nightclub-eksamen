"use client";

import { motion } from "framer-motion";
import CustomButton from "@/components/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img src="/assets/bg/header_bg_2.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
        <div className="block md:hidden">
          <img src="/assets/icon/Logo.svg" alt="Night Club" width={500} height={58} />
        </div>

        <div className="hidden md:block" style={{ perspective: "900px" }}>
          <motion.div initial={{ opacity: 0, rotateX: 100 }} animate={{ opacity: 1, rotateX: 0 }} transition={{ duration: 1.2, ease: [, 1, 0.36, 1] }} style={{ transformOrigin: "center bottom" }}>
            <img src="/assets/icon/Logo.svg" alt="Night Club" width={500} height={58} />
          </motion.div>
        </div>

        <div className="flex flex-col items-center md:hidden">
          <p className="text-white/85 tracking-[14px] uppercase mt-1">Have a good time</p>
          <img src="/assets/bottom_line.png" alt="" aria-hidden="true" className="mt-2 w-full max-w-sm" style={{ mixBlendMode: "screen" }} />
        </div>

        <motion.div className="hidden md:flex flex-col items-center" initial={{ opacity: 0, y: -20, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}>
          <p className="text-white tracking-[14px] uppercase mt-1">Have a good time</p>
          <img src="/assets/bottom_line.png" alt="" aria-hidden="true" className="mt-2 w-full max-w-sm" style={{ mixBlendMode: "screen" }} />
        </motion.div>

        <div className="flex gap-4 mt-8 md:hidden">
          <Link href="/events">
            <CustomButton variant="transparent">VIEW EVENTS</CustomButton>
          </Link>

          <Link href="/book-table">
            <CustomButton variant="pinkGradiant">BOOK TABLE</CustomButton>
          </Link>
        </div>

        <motion.div className="hidden md:flex gap-4 mt-8" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut", delay: 1.85 }}>
          <Link href="/events">
            <CustomButton variant="transparent">VIEW EVENTS</CustomButton>
          </Link>
          <Link href="/book-table">
            <CustomButton variant="pinkGradiant">BOOK TABLE</CustomButton>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
