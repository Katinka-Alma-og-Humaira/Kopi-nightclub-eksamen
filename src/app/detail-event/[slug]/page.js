import { Suspense } from "react";
import { EventContent } from "@/components/single-event/EventContent";
import NavBar from "@/components/Navbar";
import BurgerMenu from "@/components/Burger";
const Page = ({ params }) => {
  return (
    <div className="min-[800px]:max-w-6xl min-[1000px]:mx-auto">
      <NavBar />
      <BurgerMenu />
      <Suspense fallback={<div>Loading event...</div>}>
        <EventContent params={params} />
      </Suspense>
    </div>
  );
};

export default Page;
