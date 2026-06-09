"use client";

import { motion } from "motion/react";
import { useState } from "react";

const WelcomeImg = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <div className="w-full max-w-full lg:max-w-[1100px]s lg:mx-auto my-(--space-l)">
      <div className="flex flex-col items-center mb-6">
        <h1>WELCOME IN NIGHT CLUB</h1>
        <img src="/assets/bottom_line2.png" alt="Billede af pink gradient linje" />
      </div>
      {/* AI har hjulpet motion */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <motion.div key="1" className="relative w-[300px]" initial="rest" animate={activeCard === 1 ? "hover" : "rest"} onHoverStart={() => setActiveCard(1)} onHoverEnd={() => setActiveCard(null)}>
          <div className="relative group w-[300px] overflow-hidden cursor-pointer" onClick={() => handleCardClick(1)}>
            {/* ai hjulpet med on hover */}
            <img src="/assets/content-img/thumb1.jpg" alt="Billede af bord fra klubben" />
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 bg-black ${activeCard === 1 ? "opacity-100" : "opacity-0"} md:opacity-0 md:group-hover:opacity-100`}>
              <img className="border border-(--color-pink) rounded-xs w-15 p-3 mb-(--space-2xs)" src="/assets/icon/favicon.png" alt="fav icon logo" />
              <h3 className={`pb-(--space-3xs) transition-all duration-[1500ms] ease-out ${activeCard === 1 ? "scale-80" : "scale-30"} md:scale-30 md:group-hover:scale-80`}>NIGHTCLUB</h3>
              <p className={`text-sm! text-center max-w-[35ch] transition-all duration-[1500ms] ease-out ${activeCard === 1 ? "translate-x-0" : "translate-x-10"} md:translate-x-10 md:group-hover:translate-x-0`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sit repellendus placeat nisi. Quod voluptas explicabo nihil officia. Mollitia sed ab nesciunt corrupti voluptas voluptatum nihil sint dolore repellendus nisi.</p>
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
                rest: { y: 200, opacity: 0 },
                hover: { y: 60, opacity: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              animate={{ x: 50, rotate: 50 }}
            ></motion.div>
          </div>
        </motion.div>

        <motion.div key="2" className="relative w-[300px]" initial="rest" animate={activeCard === 2 ? "hover" : "rest"} onHoverStart={() => setActiveCard(2)} onHoverEnd={() => setActiveCard(null)}>
          <div className="relative group w-[300px] overflow-hidden cursor-pointer" onClick={() => handleCardClick(2)}>
            {/* ai hjulpet med on hover */}
            <img src="/assets/content-img/reastaurant_1.jpg" alt="Mad fra restaurant" />
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 bg-black ${activeCard === 2 ? "opacity-100" : "opacity-0"} md:opacity-0 md:group-hover:opacity-100`}>
              <img className="border border-(--color-pink) rounded-xs w-15 p-3 mb-(--space-2xs)" src="/assets/icon/restaurant-icon2.svg" alt="Food from restaurant" />
              <h3 className={`pb-(--space-3xs) transition-all duration-[1500ms] ease-out ${activeCard === 2 ? "scale-80" : "scale-30"} md:scale-30 md:group-hover:scale-80`}>RESTAURANT</h3>
              <p className={`text-sm! text-center max-w-[35ch] transition-all duration-[1500ms] ease-out ${activeCard === 2 ? "translate-x-0" : "translate-x-10"} md:translate-x-10 md:group-hover:translate-x-0`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sit repellendus placeat nisi. Quod voluptas explicabo nihil officia. Mollitia sed ab nesciunt corrupti voluptas voluptatum nihil sint dolore repellendus nisi.</p>
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
                rest: { y: 200, opacity: 0 },
                hover: { y: 60, opacity: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              animate={{ x: 50, rotate: 50 }}
            ></motion.div>
          </div>
        </motion.div>

        <motion.div key="3" className="relative w-[300px]" initial="rest" animate={activeCard === 3 ? "hover" : "rest"} onHoverStart={() => setActiveCard(3)} onHoverEnd={() => setActiveCard(null)}>
          <div className="relative group w-[300px] overflow-hidden cursor-pointer" onClick={() => handleCardClick(3)}>
            {/* ai hjulpet med on hover */}
            <img src="/assets/content-img/thumb2.jpg" alt="Billede af kvinde i bar" />
            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 bg-black ${activeCard === 3 ? "opacity-100" : "opacity-0"} md:opacity-0 md:group-hover:opacity-100`}>
              <img className="border border-(--color-pink) rounded-xs w-15 p-3 mb-(--space-2xs)" src="/assets/icon/drink-icon.svg" alt="Food from restaurant" />
              <h3 className={`pb-1 transition-all duration-[1500ms] ease-out ${activeCard === 3 ? "scale-80" : "scale-30"} md:scale-30 md:group-hover:scale-80`}>BAR</h3>
              <p className={`text-sm! text-center max-w-[35ch] transition-all duration-[1500ms] ease-out ${activeCard === 3 ? "translate-x-0" : "translate-x-10"} md:translate-x-10 md:group-hover:translate-x-0`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sit repellendus placeat nisi. Quod voluptas explicabo nihil officia. Mollitia sed ab nesciunt corrupti voluptas voluptatum nihil sint dolore repellendus nisi.</p>
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
                rest: { y: 200, opacity: 0 },
                hover: { y: 60, opacity: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              animate={{ x: 50, rotate: 50 }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeImg;
