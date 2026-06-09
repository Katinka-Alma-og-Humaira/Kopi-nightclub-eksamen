"use client";
import { motion } from "motion/react";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

export default function NightclubGallery({ gallery }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const items = gallery.slice(0, 8);

  const prev = () => setSelectedIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setSelectedIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl tracking-[10px] mt-15">NIGHT CLUB</h1>
      <h1 className="text-3xl tracking-[10px] mb-4">GALLERY</h1>
      <img className="mb-15" src="/assets/bottom_line.png" alt="" width={300} height={300} />

      <div className="grid grid-cols-1 md:grid-cols-4 w-full">
        {gallery.slice(0, 8).map((item, index) => (
          <motion.div
            key={item.id}
            className="relative overflow-hidden"
            variants={{
              hidden: { x: -100, opacity: 0 },
              rest: { x: 0, opacity: 1 },
              hover: { x: 0, opacity: 1 },
            }}
            initial="hidden"
            whileInView="rest"
            whileHover="hover"
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            onClick={() => setSelectedIndex(index)}
          >
            <motion.div
              className="absolute inset-0 bg-black/50"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
            />

            <img className="w-full h-60 object-cover" src={`${process.env.NEXT_PUBLIC_API_URL}${item.asset.url}`} width={item.asset.width} height={item.asset.height} alt={item.asset.alt} />

            {/* Øverste venstre trekant */}
            <motion.div
              className="absolute top-0 left-0 w-0 h-0"
              style={{
                borderTop: "50px solid var(--color-pink)",
                borderRight: "50px solid transparent",
                transformOrigin: "top left",
              }}
              variants={{
                rest: { scale: 0 },
                hover: { scale: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />

            {/* Nederste højre trekant */}
            <motion.div
              className="absolute bottom-0 right-0 w-0 h-0"
              style={{
                borderBottom: "50px solid var(--color-pink)",
                borderLeft: "50px solid transparent",
                transformOrigin: "bottom right",
              }}
              variants={{
                rest: { scale: 0 },
                hover: { scale: 1 },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </div>

      <Dialog.Root open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 z-40" />
          <Dialog.Content className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-[90vw] bg-black outline-none overflow-visible">
            {selectedIndex !== null && (
              <>
                <button onClick={prev} className="absolute -left-55 top-1/2 -translate-y-1/2 text-white p-3 border border-white/40 bg-transparent">
                  ◀
                </button>
                <button onClick={next} className="absolute -right-55 top-1/2 -translate-y-1/2 text-white p-3 border border-white/40 bg-transparent">
                  ▶
                </button>

                <div className="relative">
                  <img src={`${process.env.NEXT_PUBLIC_API_URL}${items[selectedIndex].asset.url}`} alt={items[selectedIndex].asset.alt} className="w-full object-cover" />
                </div>

                <div className="p-6">
                  <Dialog.Title className="text-lg tracking-widest mb-3">{items[selectedIndex].asset.alt.toUpperCase()}</Dialog.Title>
                  <Dialog.Description className="text-sm text-gray-300 leading-relaxed">{items[selectedIndex].description}</Dialog.Description>
                  <div className="flex justify-end mt-6">
                    <Dialog.Close className="text-[var(--color-neutrals-200)] tracking-widest text-sm border-b border-t border-white pb-1 ">READ MORE</Dialog.Close>
                  </div>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
