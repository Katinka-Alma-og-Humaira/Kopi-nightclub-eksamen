import Hero from "@/components/forside/Hero";
import GalleryData from "@/components/forside/GalleryData";
import BurgerMenu from "@/components/Burger";
export default function Home() {
  return (
    <div>
      <Hero />
      <BurgerMenu />
      <GalleryData />
    </div>
  );
}
