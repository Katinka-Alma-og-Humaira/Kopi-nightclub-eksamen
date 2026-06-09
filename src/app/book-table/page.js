import { Suspense } from "react";
import BookATableClient from "@/components/tables/BookATableClient";
import NavBar from "@/components/Navbar";
import BurgerMenu from "@/components/Burger";
import Image from "next/image";

const BookATableContent = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  const eventId = resolvedParams?.eventId ? Number(resolvedParams.eventId) : null;

  const eventsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  const events = await eventsRes.json();

  const reservationsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations`);
  const reservations = await reservationsRes.json();

  return <BookATableClient events={events} reservations={reservations} selectedEventFromBookNow={eventId} />;
};

const BookATablePage = ({ searchParams }) => {
  return (
    <div>
      <NavBar />
      <BurgerMenu />
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <Image src="/assets/loader/madbars.gif" alt="Henter..." width={80} height={80} unoptimized />
          </div>
        }
      >
        <BookATableContent searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default BookATablePage;
