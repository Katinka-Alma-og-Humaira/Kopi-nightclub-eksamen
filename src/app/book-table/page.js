import BookATableClient from "@/components/tables/BookATableClient";

const BookATablePage = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  const eventId = resolvedParams?.eventId ? Number(resolvedParams.eventId) : null;

  const eventsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  const events = await eventsRes.json();

  const reservationsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations`);
  const reservations = await reservationsRes.json();

  return <BookATableClient events={events} reservations={reservations} selectedEventFromBookNow={eventId} />;
};

export default BookATablePage;
