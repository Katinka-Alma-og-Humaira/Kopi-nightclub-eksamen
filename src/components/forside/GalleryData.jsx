"use server";
import { cacheLife } from "next/cache";
import { Suspense } from "react";
import Image from "next/image";
import NightclubGallery from "./NightclubGallery";

async function fetchGallery() {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`);
  if (!response.ok) throw new Error("Kunne ikke hente galleri");
  return response.json();
}

const GalleryContent = async () => {
  try {
    const gallery = await fetchGallery();
    return <NightclubGallery gallery={gallery} />;
  } catch (error) {
    return <p className="text-white text-center">Kunne ikke hente galleri - prøv igen senere.</p>;
  }
};

export default async function GalleryData() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-20">
          <Image src="/assets/loader/madbars.gif" alt="Henter..." width={80} height={80} unoptimized />
        </div>
      }
    >
      <GalleryContent />
    </Suspense>
  );
}
