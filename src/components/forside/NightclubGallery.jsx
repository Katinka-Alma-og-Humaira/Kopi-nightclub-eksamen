"use client";
import { motion } from "motion/react";

export default function NightclubGallery({ gallery }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl tracking-[10px] mt-15">NIGHT CLUB</h1>
      <h1 className="text-3xl tracking-[10px] mb-4">GALLERY</h1>
      <img className="mb-15" src="/assets/bottom_line.png" alt="" width={300} height={300} />

      <motion.div key="1" className="hidden md:grid md:grid-cols-4" initial="rest" whileHover="hover" animate="rest">
        {gallery.slice(0, 8).map((item) => (
          <img className="w-full h-60 object-cover" key={item.id} src={`${process.env.NEXT_PUBLIC_API_URL}${item.asset.url}`} width={item.asset.width} height={item.asset.height} alt={item.asset.alt} />
        ))}
        <motion.div
          className="absolute bottom-0 right-0 bg-[var(--color-pink)] w-25 h-25"
          variants={{
            rest: { y: 200, opacity: 0 }, // starter nedenfor
            hover: { y: 60, opacity: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          animate={{ x: 50, rotate: 50 }}
        ></motion.div>
      </motion.div>
    </div>
  );
}

/* 
<div className="relative group w-[300px] overflow-hidden">
          <img src="/assets/content-img/thumb1.jpg" alt="Billede af bord fra klubben" />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black">
            <img src="/assets/icon/favicon.png" alt="Food from restaurant" />
            <h4 className="pb-1 scale-30 group-hover:scale-100 transition-all duration-900 ease-out">NIGHTCLUB</h4>
            <p className="text-sm! text-center max-w-[35ch] translate-x-10 group-hover:translate-x-0 transition-all duration-900 ease-out">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sit repellendus placeat nisi. Quod voluptas explicabo nihil officia. Mollitia sed ab nesciunt corrupti voluptas voluptatum nihil sint dolore repellendus nisi.</p>
          </div>
          
          <motion.div
            className="absolute bottom-0 right-0 bg-[var(--color-pink)] w-25 h-25"
            variants={{
              rest: { y: 200, opacity: 0 }, // starter nedenfor
              hover: { y: 60, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            animate={{ x: 50, rotate: 50 }}
          ></motion.div>
        </div>*/
