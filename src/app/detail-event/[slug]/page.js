import { Suspense } from "react";
import { EventContent } from "@/components/single-event/EventContent";
import NavBar from "@/components/Navbar";
import BurgerMenu from "@/components/Burger";
import Image from "next/image";
const Page = ({ params }) => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <Image src="/assets/loader/madbars.gif" alt="Loading..." width={80} height={80} unoptimized />
          </div>
        }
      >
        <NavBar />
        <BurgerMenu />
        <EventContent params={params} />
      </Suspense>
    </div>
  );
};

export default Page;
