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
import { Suspense } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <Image src="/assets/loader/madbars.gif" alt="Henter..." width={80} height={80} unoptimized />
          </div>
        }
      >
        <Hero />
      </Suspense>
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
