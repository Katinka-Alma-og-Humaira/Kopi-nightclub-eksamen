"use client";

import Image from "next/image";
import { motion } from "motion/react";

const FeautredEvents2 = ({ feauturedevents }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
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
              className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-black p-2"
              variants={{
                rest: { y: "100%" },
                hover: { y: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h2>{event.title}</h2>
              <p className="text-center">{event.description}</p>
            </motion.div>

            <motion.div
              className="absolute top-0 left-0 bg-[var(--color-pink)] w-25 h-25"
              variants={{
                rest: { y: -200, opacity: 0 },
                hover: { y: -60, opacity: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              animate={{ x: -50, rotate: 50 }}
            >
              <p className="!text-[var(--color-pink)]">hej</p>
            </motion.div>
          </div>

          <div className="flex justify-between p-1 bg-[var(--color-pink)]">
            <h2>{event.location}</h2>
            <h2>{event.date}</h2>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeautredEvents2;
