"use client";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Tables from "@/components/tables/Tables";
import BookATable from "@/components/tables/BookATable";

const BookATableClient = ({ events, reservations, selectedEventFromBookNow }) => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedEventId, setSelectedEventId] = useState(selectedEventFromBookNow);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleReservationSuccess = () => {
    setSelectedTable(null);
    startTransition(() => {
      router.refresh();
    });
  };

  const handleEventChange = (eventId) => {
    setSelectedEventId(eventId);
    startTransition(() => {
      router.push(`?eventId=${eventId}`, { scroll: false });
    });
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-[var(--color-neutrals-200)]">
      <div className="flex flex-col gap-12">
        <div>
          <Tables reservations={reservations} selectedTable={selectedTable} onSelectTable={setSelectedTable} eventId={selectedEventId} />
        </div>
        <div>
          <h1 className="mb-8">Book a Table</h1>
          <BookATable events={events} selectedTable={selectedTable} selectedEventFromBookNow={selectedEventFromBookNow} onReservationSuccess={handleReservationSuccess} onEventChange={handleEventChange} />
        </div>
      </div>
    </section>
  );
};

export default BookATableClient;
