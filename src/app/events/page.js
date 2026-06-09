import UpcommingEvent from "@/components/events/UpcomingEvent";
import NavBar from "@/components/Navbar";
import BurgerMenu from "@/components/Burger";

export default function EventsPage({ searchParams }) {
  return (
    <div>
      <NavBar />
      <BurgerMenu />
      <UpcommingEvent searchParams={searchParams} />
    </div>
  );
}
