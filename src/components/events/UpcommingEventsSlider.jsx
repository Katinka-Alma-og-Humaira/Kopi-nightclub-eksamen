"use client";
import { useState } from "react";

const eventsPerPage = 3;

const UpcommingEventSlider = ({ events }) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(events.length / eventsPerPage);
  const currentEvents = events.slice(page * eventsPerPage, page * eventsPerPage + eventsPerPage);

  return (
    <div>
      {currentEvents.map((event) => (
        <div key={event.slug} className="my-20 grid grid-cols-1 min-[570px]:grid-cols-2 gap-5 items-start">
          <div>
            <img className="my-8 min-[570px]:my-0" src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} alt={event.asset.alt} />
          </div>
          <div>
            <h2 className="mb-2">{event.slug}</h2>
            <h3 className="mb-3 flex items-center gap-3">
              <span className="text-pink-500">{event.date}</span>
              <span className="text-pink-500">|</span>
              <span className="text-white">{event.location}</span>
            </h3>
            <p>{event.description}</p>
            <div className="flex justify-center items-center min-[570px]:justify-end">
              <button className="text-white py-3 px-8 border-y border-white my-8 cursor-pointer">read more</button>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center items-center gap-3">
        <div className="flex gap-4 text-white">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span key={i} onClick={() => setPage(i)} className={`cursor-pointer ${i === page ? "border-b border-white" : "opacity-40"}`}>
              {i + 1}
            </span>
          ))}
        </div>

        <button onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))} className={`cursor-pointer text-white ${page === totalPages - 1 ? "opacity-30 pointer-events-none" : ""}`}>
          næste
        </button>
      </div>
    </div>
  );
};

export default UpcommingEventSlider;
