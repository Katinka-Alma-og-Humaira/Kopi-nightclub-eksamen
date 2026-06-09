"use client";
import { z } from "zod";
import { useState } from "react";
import Button from "@/components/Button";

const reservationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 characters"),
  table: z.string().min(1, "Please select a table"),
  guests: z.string().min(1, "Please enter number of guests"),
  eventId: z.number().min(1, "Please select an event"),
});

const BookATable = ({ events, selectedTable, selectedEventFromBookNow, onReservationSuccess, onEventChange }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    table: selectedTable ? String(selectedTable) : "",
    guests: "",
    eventId: selectedEventFromBookNow ?? "",
    comment: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const tableValue = selectedTable ? String(selectedTable) : form.table;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parsed = {
      ...form,
      table: tableValue,
      eventId: Number(form.eventId),
    };

    const resultat = reservationSchema.safeParse(parsed);
    if (!resultat.success) {
      const feltFejl = {};
      resultat.error.issues.forEach((err) => {
        feltFejl[err.path[0]] = err.message;
      });
      setErrors(feltFejl);
      return;
    }
    // ai hjælp

    const selectedEvent = events.find((e) => e.id === Number(form.eventId));
    const date = selectedEvent?.doorsOpen || selectedEvent?.date;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed, date }),
      });

      if (res.ok) {
        setStatus("success");
        onReservationSuccess?.();
        setForm({ name: "", email: "", phone: "", table: "", guests: "", eventId: "", comment: "" });
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // ændret: kalder onEventChange når brugeren skifter event i dropdown
    if (e.target.name === "eventId") {
      onEventChange?.(Number(e.target.value));
    }
  };

  const inputClass = "w-full px-4 py-3 border-2 border-[var(--color-neutrals-200)] bg-transparent placeholder-[var(--color-neutrals-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-neutrals-200)]";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className={inputClass} />
          {errors.name && <p className="mt-1 text-red-400!">{errors.name}</p>}
        </div>
        <div>
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className={inputClass} />
          {errors.email && <p className="mt-1 text-red-400!">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <input name="table" placeholder="Table number" value={tableValue} readOnly className={inputClass} />
          {errors.table && <p className="mt-1 text-red-400!">{errors.table}</p>}
        </div>
        <div>
          <input name="guests" type="number" placeholder="Number of guests" value={form.guests} onChange={handleChange} className={inputClass} />
          {errors.guests && <p className="mt-1 text-red-400!">{errors.guests}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <select name="eventId" value={form.eventId} onChange={handleChange} disabled={!!selectedEventFromBookNow} className={`${inputClass} text-[var(--color-neutrals-200)]`}>
            <option value="" disabled className="bg-black">
              Choose Night
            </option>
            {events?.map((event) => (
              <option key={event.id} value={event.id} className="bg-black">
                {event.title} —{" "}
                {new Date(event.date).toLocaleDateString("en-EN", {
                  day: "2-digit",
                  month: "long",
                })}
              </option>
            ))}
          </select>
          {errors.eventId && <p className="mt-1 text-red-400!">{errors.eventId}</p>}
        </div>
        <div>
          <input name="phone" placeholder="Your Contact Number" value={form.phone} onChange={handleChange} className={inputClass} />
          {errors.phone && <p className="mt-1 text-red-400!">{errors.phone}</p>}
        </div>
      </div>

      <textarea name="comment" placeholder="Your Comment" value={form.comment} onChange={handleChange} className={`${inputClass} resize-y min-h-[160px]`} />

      {status === "success" && <p className="text-green-400!">Reservation confirmed! See you at Night Club.</p>}
      {status === "error" && <p className="text-red-400!">Something went wrong. Please try again.</p>}

      <div className="flex justify-end">
        <Button type="submit" variant="whiteTopBottom">
          RESERVE
        </Button>
      </div>
    </form>
  );
};

export default BookATable;
