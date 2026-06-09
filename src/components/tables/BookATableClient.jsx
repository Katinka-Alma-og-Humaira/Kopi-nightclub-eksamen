"use client";
import { useState } from "react";
import Tables from "@/components/tables/Tables";
import BookATable from "@/components/tables/BookATable";

const BookATableClient = ({ events, reservations, selectedEventFromBookNow }) => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [currentReservations, setCurrentReservations] = useState(reservations);
  const [selectedEventId, setSelectedEventId] = useState(selectedEventFromBookNow);

  const handleReservationSuccess = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations`);
    const updated = await res.json();
    setCurrentReservations(updated);
    setSelectedTable(null);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-[var(--color-neutrals-200)]">
      <div className="flex flex-col gap-12">
        <div className="">
          <Tables reservations={currentReservations} selectedTable={selectedTable} onSelectTable={setSelectedTable} eventId={selectedEventId} />
        </div>
        <div className="">
          <h1 className="mb-8">Book a Table</h1>
          <BookATable events={events} selectedTable={selectedTable} selectedEventFromBookNow={selectedEventFromBookNow} onReservationSuccess={handleReservationSuccess} onEventChange={setSelectedEventId} />
        </div>
      </div>
    </section>
  );
};

export default BookATableClient;
