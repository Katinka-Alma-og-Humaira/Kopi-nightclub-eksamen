"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const tables = [
  { number: 1, type: "small", img: "/assets/table/table_1.png" },
  { number: 2, type: "small", img: "/assets/table/table_1.png" },
  { number: 3, type: "medium", img: "/assets/table/table_2.png" },
  { number: 4, type: "small", img: "/assets/table/table_1.png" },
  { number: 5, type: "large", img: "/assets/table/table_3.png" },
  { number: 6, type: "small", img: "/assets/table/table_1.png" },
  { number: 7, type: "small", img: "/assets/table/table_1.png" },
  { number: 8, type: "medium", img: "/assets/table/table_2.png" },
  { number: 9, type: "small", img: "/assets/table/table_1.png" },
  { number: 10, type: "large", img: "/assets/table/table_3.png" },
  { number: 11, type: "small", img: "/assets/table/table_1.png" },
  { number: 12, type: "small", img: "/assets/table/table_1.png" },
  { number: 13, type: "medium", img: "/assets/table/table_2.png" },
  { number: 14, type: "small", img: "/assets/table/table_1.png" },
  { number: 15, type: "large", img: "/assets/table/table_3.png" },
];

// ændret: tilføjet eventId prop
const Tables = ({ reservations = [], selectedTable, onSelectTable, eventId }) => {
  // ændret: filtrerer nu også på eventId
  const isBooked = (number) => reservations.some((r) => String(r.table) === String(number) && Number(r.eventId) === Number(eventId));

  return (
    <>
      <div className="md:hidden">
        <p className="text-center mb-6">Swipe to select a table</p>
        <Swiper spaceBetween={20} slidesPerView={1.2} centeredSlides={true}>
          {tables.map((table) => {
            const booked = isBooked(table.number);
            const selected = selectedTable === table.number;
            return (
              <SwiperSlide key={table.number}>
                <button disabled={booked} onClick={() => onSelectTable(table.number)} className={`w-full text-center ${booked ? "opacity-40" : ""} ${selected ? "ring-2 ring-[var(--color-pink)]" : ""}`}>
                  <img src={table.img} alt={`Table ${table.number}`} className="w-40 mx-auto" />
                  <p className="mt-2">Table {table.number}</p>
                  <p className="text-xs">{booked ? "Booked" : selected ? "Selected" : "Free"}</p>
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="hidden md:grid grid-cols-5 gap-4">
        {tables.map((table) => {
          const booked = isBooked(table.number);
          const selected = selectedTable === table.number;
          return (
            <button key={table.number} disabled={booked} onClick={() => onSelectTable(table.number)} className={`relative ${booked ? "opacity-40 cursor-not-allowed" : "cursor-pointer"} ${selected ? "ring-2 ring-[var(--color-pink)]" : ""}`}>
              <img src={table.img} alt={`Table ${table.number}`} className="w-full" />
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold">{table.number}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Tables;
