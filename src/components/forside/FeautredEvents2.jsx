"use client";

import Image from "next/image";
import { motion } from "motion/react";

const FeautredEvents2 = ({ feauturedevents }) => {
  return (
    <div className="relative flex flex-col md:flex-row gap-8 items-center justify-center">
      <img src="/assets/bg/slider_bg_overlay.png" alt="baggrunsbillede med blå farver" className="absolute" />
      {feauturedevents.map((event) => (
        <motion.div key={event.id} className="relative w-[400px]" initial="rest" whileHover="hover" animate="rest">
          <div className="relative overflow-hidden">
            <Image className="w-[400px]" src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} alt={event.asset.alt} width={300} height={50} />
            <motion.div
              className="absolute inset-0 bg-black/50"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 flex flex-col bg-black p-2"
              variants={{
                rest: { y: "100%" },
                hover: { y: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h4 className="text-left">{event.title}</h4>
              <p className="text-left text-sm! max-w-[45ch]">{event.description}</p>
            </motion.div>

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

          <div className="flex justify-between p-1 bg-[var(--color-pink)]">
            <h4>{event.location}</h4>
            <h4>
              {new Date(event.date)
                .toLocaleDateString("en-EN", {
                  day: "2-digit",
                  month: "long",
                })
                .replace(/\b\w/, (c) => c.toUpperCase())}
            </h4>
            {/*fundet fra research og ai */}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeautredEvents2;
