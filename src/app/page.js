import Hero from "@/components/forside/Hero";
import GalleryData from "@/components/forside/GalleryData";
import BurgerMenu from "@/components/Burger";
import NavBar from "@/components/Navbar";
export default function Home() {
  return (
    <div>
      <Hero />
      <NavBar />
      <BurgerMenu />
      <GalleryData />
    </div>
  );
}
