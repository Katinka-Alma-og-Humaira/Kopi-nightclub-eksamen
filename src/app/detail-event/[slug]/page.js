import { Suspense } from "react";
import { EventContent } from "@/components/single-event/EventContent";
import NavBar from "@/components/Navbar";
import BurgerMenu from "@/components/Burger";
const Page = ({ params }) => {
  return (
    <div>
      <Suspense fallback={<div>Loading event...</div>}>
        <NavBar />
        <BurgerMenu />
        <EventContent params={params} />
      </Suspense>
    </div>
  );
};

export default Page;
