import UpcommingEvent from "@/components/events/UpcomingEvent";
import NavBar from "@/components/Navbar";
import BurgerMenu from "@/components/Burger";
import Banner from "@/components/Banner";

export default function EventsPage({ searchParams }) {
  return (
    <div>
      <NavBar />
      <BurgerMenu />
      <Banner title="EVENTS" />
      <UpcommingEvent searchParams={searchParams} />
    </div>
  );
}
