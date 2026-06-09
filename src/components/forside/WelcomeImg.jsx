"use client";

import { motion } from "motion/react";

const WelcomeImg = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
      <motion.div key="1" className="relative w-[300px]" initial="rest" whileHover="hover" animate="rest">
        <div className="relative group w-[300px] overflow-hidden">
          <img src="/assets/content-img/thumb1.jpg" alt="Food from restaurant" />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black">
            <img src="/assets/icon/favicon.png" alt="Food from restaurant" />
            <h4 className="text-white scale-30 group-hover:scale-100 transition-all duration-900 ease-out">Hej</h4>
            <p className="max-w-[20ch] text-white translate-x-10 group-hover:translate-x-0 transition-all duration-900 ease-out">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sit repellendus placeat nisi. Quod voluptas explicabo nihil officia. Mollitia sed ab nesciunt corrupti voluptas voluptatum nihil sint dolore repellendus nisi.</p>
          </div>
          <motion.div
            className="absolute top-0 left-0 bg-[var(--color-pink)] w-25 h-25"
            variants={{
              rest: { y: -200, opacity: 0 },
              hover: { y: -60, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            animate={{ x: -50, rotate: 50 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 right-0 bg-[var(--color-pink)] w-25 h-25"
            variants={{
              rest: { y: 200, opacity: 0 }, // starter nedenfor
              hover: { y: 60, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            animate={{ x: 50, rotate: 50 }}
          ></motion.div>
        </div>
      </motion.div>

      <motion.div key="2" className="relative w-[300px]" initial="rest" whileHover="hover" animate="rest">
        <div className="relative group w-[300px] overflow-hidden">
          <img src="/assets/content-img/reastaurant_1.jpg" alt="Food from restaurant" />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black">
            <img src="/assets/icon/favicon.png" alt="Food from restaurant" />
            <h4 className="text-white scale-30 group-hover:scale-100 transition-all duration-900 ease-out">Hej</h4>
            <p className="max-w-[20ch] text-white translate-x-10 group-hover:translate-x-0 transition-all duration-900 ease-out">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sit repellendus placeat nisi. Quod voluptas explicabo nihil officia. Mollitia sed ab nesciunt corrupti voluptas voluptatum nihil sint dolore repellendus nisi.</p>
          </div>
          <motion.div
            className="absolute top-0 left-0 bg-[var(--color-pink)] w-25 h-25"
            variants={{
              rest: { y: -200, opacity: 0 },
              hover: { y: -60, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            animate={{ x: -50, rotate: 50 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 right-0 bg-[var(--color-pink)] w-25 h-25"
            variants={{
              rest: { y: 200, opacity: 0 }, // starter nedenfor
              hover: { y: 60, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            animate={{ x: 50, rotate: 50 }}
          ></motion.div>
        </div>
      </motion.div>

      <motion.div key="3" className="relative w-[300px]" initial="rest" whileHover="hover" animate="rest">
        <div className="relative group w-[300px] overflow-hidden">
          <img src="/assets/content-img/thumb2.jpg" alt="Food from restaurant" />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black">
            <img src="/assets/icon/favicon.png" alt="Food from restaurant" />
            <h4 className="text-white scale-30 group-hover:scale-100 transition-all duration-900 ease-out">Hej</h4>
            <p className="max-w-[20ch] text-white translate-x-10 group-hover:translate-x-0 transition-all duration-900 ease-out">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sit repellendus placeat nisi. Quod voluptas explicabo nihil officia. Mollitia sed ab nesciunt corrupti voluptas voluptatum nihil sint dolore repellendus nisi.</p>
          </div>
          <motion.div
            className="absolute top-0 left-0 bg-[var(--color-pink)] w-25 h-25"
            variants={{
              rest: { y: -200, opacity: 0 },
              hover: { y: -60, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            animate={{ x: -50, rotate: 50 }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 right-0 bg-[var(--color-pink)] w-25 h-25"
            variants={{
              rest: { y: 200, opacity: 0 }, // starter nedenfor
              hover: { y: 60, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            animate={{ x: 50, rotate: 50 }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeImg;
