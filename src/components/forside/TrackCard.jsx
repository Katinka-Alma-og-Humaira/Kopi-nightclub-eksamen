"use client";
import { motion } from "motion/react";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCirclePause } from "react-icons/fa6";
import Image from "next/image";

//AI har hjulpet med opsætningen, men motion div kommer fra andre gruppemedlemmmers kode
const TrackCard = ({ src, name, isActive, onClick }) => {
  return (
    <motion.div className="relative overflow-hidden" initial="rest" whileHover="hover" animate="rest">
      <div className="relative overflow-hidden">
        <Image src={src} alt={name} width={300} height={300} className="object-cover" />

        <>
          <motion.div
            className="absolute inset-0 bg-black/50"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
          >
            {isActive ? <FaRegCirclePause color="var(--color-pink)" size={40} onClick={onClick} /> : <FaRegPlayCircle color="var(--color-pink)" size={40} onClick={onClick} />}
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-black p-1"
            variants={{
              rest: { y: isActive ? 0 : "100%" },
              hover: { y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="text-white text-xs text-center">{name}</p>
          </motion.div>

          <motion.div className="absolute top-0 left-0 bg-(--color-pink) w-16 h-16" variants={{ rest: { y: -200, opacity: 0 }, hover: { y: -32, opacity: 1 } }} transition={{ duration: 0.3, ease: "easeOut" }} animate={{ x: -32, rotate: 45 }} />

          <motion.div className="absolute bottom-0 right-0 bg-(--color-pink) w-16 h-16" variants={{ rest: { y: 200, opacity: 0 }, hover: { y: 32, opacity: 1 } }} transition={{ duration: 0.3, ease: "easeOut" }} animate={{ x: 32, rotate: 45 }} />
        </>
      </div>
    </motion.div>
  );
};

export default TrackCard;
