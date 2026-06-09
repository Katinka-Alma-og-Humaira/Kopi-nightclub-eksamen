import Hero from "@/components/forside/Hero";
import GalleryData from "@/components/forside/GalleryData";
import BurgerMenu from "@/components/Burger";
import NavBar from "@/components/Navbar";
import Tables from "@/components/tables/Tables";
export default function Home() {
  return (
    <div>
      <Hero />
      <NavBar />
      <Tables />
      <BurgerMenu />
      <GalleryData />
    </div>
  );
}
