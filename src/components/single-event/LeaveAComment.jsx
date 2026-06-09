"use client";
import { useState } from "react";
import Button from "@/components/Button";
import { z } from "zod";
import { revalidateComments } from "@/components/single-event/CommentsActions";

// AI hjalp med at lave revalidateTag
const commentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  content: z.string().min(3, "Comment must be at least 3 characters"),
});

const LeaveAComment = ({ eventId }) => {
  const [form, setForm] = useState({ name: "", email: "", content: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setStatus(null);

    const resultat = commentSchema.safeParse(form);
    if (!resultat.success) {
      const feltFejl = {};
      resultat.error.issues.forEach((err) => {
        feltFejl[err.path[0]] = err.message;
      });
      setErrors(feltFejl);
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventId: Number(eventId),
          name: form.name,
          content: form.content,
          date: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", content: "" });
        await revalidateComments();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
      setStatus("error");
    }
  };

  const inputClass = "w-full px-4 py-3 border-2 border-[var(--color-neutrals-200)] bg-transparent placeholder-[var(--color-neutrals-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-pink)]";

  return (
    <section className="py-16 text-[var(--color-neutrals-200)] min-[800px]:max-w-6xl min-[1000px]:mx-auto mb-(--space-l)">
      <h1 className="mb-8">Leave a Comment</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className={inputClass} />
            {errors.name && <p className="mt-1 text-red-400!">{errors.name}</p>}
          </div>

          <div>
            <input name="email" placeholder="Your Email" value={form.email} onChange={handleChange} className={inputClass} />
            {errors.email && <p className="mt-1 text-red-400!">{errors.email}</p>}
          </div>
        </div>

        <div className="relative">
          <textarea name="content" placeholder="Your Comment" rows={5} value={form.content} onChange={handleChange} className={inputClass} />
          {errors.content && <p className="mt-1 text-red-400!">{errors.content}</p>}
        </div>

        {status === "success" && <p className="text-green-400!">Thank you! Your comment has been posted.</p>}
        {status === "error" && <p className="text-red-400!">Something went wrong. Please try again.</p>}

        <div className="flex justify-end">
          <Button type="submit" variant="whiteTopBottom">
            SEND
          </Button>
        </div>
      </form>
    </section>
  );
};

export default LeaveAComment;
