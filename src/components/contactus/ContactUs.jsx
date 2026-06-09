"use client";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Navn skal være mindst 2 tegn"),
  email: z.string().email("Ugyldig e-mailadresse"),
  message: z.string().min(10, "Beskeden skal være mindst 5 tegn"),
});

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultat = contactSchema.safeParse(form);
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

  const inputClass = "w-full px-4 py-3 border border-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white";

  return (
    <section className="max-w-xl mx-auto px-4 py-16">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <input name="name" placeholder="Navn" onChange={handleChange} className={inputClass} />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <input name="email" placeholder="E-mail" onChange={handleChange} className={inputClass} />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="relative">
          <textarea name="message" placeholder="Besked" rows={5} onChange={handleChange} className={inputClass} />
          <div className="absolute bottom-4 right-1 w-4 border-t-2 border-white rotate-130" />
          <div className="absolute bottom-5 right-1 w-6 border-t-2 border-white rotate-130" />
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
        </div>

        <div className="flex justify-end">
          <button type="submit" className="px-10 py-3 cursor-pointer border-t border-b border-white w-fit text-white">
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
