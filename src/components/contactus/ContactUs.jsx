"use client";
import { z } from "zod";
import { useState } from "react";
import Button from "@/components/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  content: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", content: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const resultat = contactSchema.safeParse(form);
    if (resultat.success) {
      console.log("data godkendt", resultat.data);

      setIsLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact_messages`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...resultat.data,
            date: new Date().toISOString(),
          }),
        });

        if (res.ok) {
          setStatus("success");
          setForm({ name: "", email: "", content: "" });
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Error:", error);
        setStatus("error");
      } finally {
        setIsLoading(false);
      }
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

  const inputClass = "w-full px-4 py-3 border-2 border-[var(--color-neutrals-200)] bg-transparent placeholder-[var(--color-neutrals-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-pink)]";

  return (
    <section className="max-w-xl mx-auto px-4 py-16 text-[var(--color-neutrals-200)]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className={inputClass} disabled={isLoading} />
          {errors.name && <p className="mt-1 text-red-400!">{errors.name}</p>}
        </div>

        <div>
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className={inputClass} disabled={isLoading} />
          {errors.email && <p className="mt-1 text-red-400!">{errors.email}</p>}
        </div>

        <div className="relative">
          <textarea name="content" placeholder="Your Comment" rows={5} value={form.content} onChange={handleChange} className={inputClass} disabled={isLoading} />
          <div className="absolute bottom-4 right-1 w-4 border-t-2 border-white rotate-130" />
          <div className="absolute bottom-5 right-1 w-6 border-t-2 border-white rotate-130" />
        </div>
        {errors.content && <p className="text-red-400!">{errors.content}</p>}

        {status === "success" && <p className="text-green-400!">Message sent successfully!</p>}
        {status === "error" && <p className="text-red-400!">Something went wrong. Please try again.</p>}

        <div className="flex justify-end">
          <Button type="submit" variant="whiteTopBottom" disabled={isLoading}>
            {isLoading ? "SENDING..." : "SEND"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
