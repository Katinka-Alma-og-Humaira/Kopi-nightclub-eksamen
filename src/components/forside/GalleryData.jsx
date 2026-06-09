"use server";
import NightclubGallery from "./NightclubGallery";

async function fetchGallery() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`);
  return response.json();
}

export default async function GalleryData() {
  const gallery = await fetchGallery();
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
  console.log("gallery:", gallery);
  return <NightclubGallery gallery={gallery} />;
}
