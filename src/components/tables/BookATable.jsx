"use client";
import { z } from "zod";
import { useState } from "react";
import Button from "@/components/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 characters"),
  tableNumber: z.number().min(1, "Please select a table number"),
  guests: z.number().min(1, "There must be at least 1 guest"),
  event: z.string().min(1, "Please select an evening"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const BookATable = ({ events }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", tableNumber: "", guests: "", event: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsed = {
      ...form,
      tableNumber: Number(form.tableNumber),
      guests: Number(form.guests),
    };
    const resultat = contactSchema.safeParse(parsed);
    if (resultat.success) {
      console.log("data godkendt", resultat.data);
    } else {
      const feltFejl = {};
      resultat.error.issues.forEach((err) => {
        feltFejl[err.path[0]] = err.message;
      });
      setErrors(feltFejl);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-4 py-3 border-2 border-[var(--color-neutrals-200)] bg-transparent placeholder-[var(--color-neutrals-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-neutrals-200)]";

  return (
    <section className="max-w-xl mx-auto px-4 py-16 text-[var(--color-neutrals-200)]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          {/* ✅ ÆNDRET: dansk → engelsk */}
          <input name="name" placeholder="Name" onChange={handleChange} className={inputClass} />
          {errors.name && <p className="mt-1">{errors.name}</p>}
        </div>

        <div>
          <input name="email" placeholder="Email" onChange={handleChange} className={inputClass} />
          {errors.email && <p className="mt-1">{errors.email}</p>}
        </div>

        <div>
          <input name="phone" placeholder="Phone number" onChange={handleChange} className={inputClass} />
          {errors.phone && <p className="mt-1">{errors.phone}</p>}
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <input name="tableNumber" type="number" placeholder="Table number" onChange={handleChange} className={inputClass} />
            {errors.tableNumber && <p className="mt-1">{errors.tableNumber}</p>}
          </div>
          <div className="flex-1">
            <input name="guests" type="number" placeholder="Number of guests" onChange={handleChange} className={inputClass} />
            {errors.guests && <p className="mt-1">{errors.guests}</p>}
          </div>
        </div>

        <div>
          <select name="event" onChange={handleChange} className={`${inputClass} text-[var(--color-neutrals-200)]`}>
            <option value="" disabled selected className="bg-black">
              Select an evening
            </option>
            {events?.map((event) => (
              <option key={event.id} value={event.slug} className="bg-black">
                {event.title} —{" "}
                {new Date(event.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                })}
              </option>
            ))}
          </select>
          {errors.event && <p className="mt-1">{errors.event}</p>}
        </div>

        <div className="relative">
          <textarea name="message" placeholder="Message" rows={5} onChange={handleChange} className={inputClass} />
          <div className="absolute bottom-4 right-1 w-4 border-t-2 border-white rotate-130" />
          <div className="absolute bottom-5 right-1 w-6 border-t-2 border-white rotate-130" />
          {errors.message && <p className="mt-1">{errors.message}</p>}
        </div>

        <div className="flex justify-end">
          <Button type="submit" variant="whiteTopBottom">
            SEND
          </Button>
        </div>
      </form>
    </section>
  );
};

export default BookATable;
