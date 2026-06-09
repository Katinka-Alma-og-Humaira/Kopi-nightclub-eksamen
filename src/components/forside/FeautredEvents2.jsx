"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Button from "@/components/Button";
import Link from "next/link";
import { div } from "framer-motion/client";

const FeautredEvents2 = ({ feauturedevents }) => {
  return (
    // AI hjalp mig med at bytte rundt på cardsene rækkefølge
    <div>
      <div className="relative min-h-[600px] w-full max-w-full lg:max-w-[1500px] max-h-[1000px] lg:mx-auto my-(--space-l)">
        <img src="/assets/bg/slider_bg_overlay.png" alt="baggrunsbillede med blå farver" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative flex flex-col items-center mb-6 z-10 pt-8">
          <h1>FEATRED EVENTS</h1>
          <img src="/assets/bottom_line2.png" alt="Billede af pink gradient linje" />
        </div>

        <div className="relative flex flex-col md:flex-row gap-14 items-center justify-center z-20 px-4">
          {feauturedevents.map((event) => (
            <motion.div key={event.id} className="relative w-[350px] md:w-[450px]" initial="rest" whileHover="hover" animate="rest">
              <div className="relative overflow-hidden">
                <Image className="w-[350px] md:w-[450px]" src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} alt={event.asset.alt} width={400} height={300} />
                <motion.div
                  className="absolute inset-0 bg-black/50"
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 flex flex-col bg-black p-4"
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
                  className="absolute bottom-45 left-0 right-0 flex justify-center"
                  variants={{
                    rest: { opacity: 0, y: -40 },
                    hover: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Link href={`/book-table?eventId=${event.id}`}>
                    <Button variant="pinkGradiant" href={`/detail-event/${event.slug}`}>
                      BOOK NOW
                    </Button>
                  </Link>
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
                    rest: { y: 200, opacity: 0 },
                    hover: { y: 60, opacity: 1 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  animate={{ x: 50, rotate: 50 }}
                ></motion.div>
              </div>

              <div className="flex justify-between p-2 bg-[var(--color-pink)]">
                <h4>{event.location}</h4>
                <h4>
                  {new Date(event.date)
                    .toLocaleDateString("en-EN", {
                      day: "2-digit",
                      month: "long",
                    })
                    .replace(/\b\w/, (c) => c.toUpperCase())}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeautredEvents2;
