import Hero from "@/components/forside/Hero";
import GalleryData from "@/components/forside/GalleryData";
import BurgerMenu from "@/components/Burger";
import NavBar from "@/components/Navbar";
import WelcomeImg from "@/components/forside/WelcomeImg";
import FeautredEvents from "@/components/forside/FeautredEvents";
import Track from "@/components/forside/Track";
import Video from "@/components/forside/Video";
import Testimonials from "@/components/forside/Testimonials";
import RecentBlogs from "@/components/forside/RecentBlogs";
import Newsletter from "@/components/forside/Nyhedsbrev";

export default function Home() {
  return (
    <div>
      <Hero />
      <NavBar />
      <BurgerMenu />
      <WelcomeImg />
      <FeautredEvents />
      <GalleryData />
      <Track />
      <Video />
      <Testimonials />
      <RecentBlogs />
      <Newsletter />
    </div>
  );
}
