"use client";
import Button from "@/components/Button";
import { z } from "zod";
import { useState } from "react";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    const result = emailSchema.safeParse({ email });

    if (!result.success) {
      setStatus({ type: "invalid", message: result.error.errors[0].message });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletters`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "You're subscribed!" });
        setEmail("");
      } else if (res.status === 409) {
        setStatus({ type: "duplicate", message: "This email is already subscribed." });
      }
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  const statusColors = {
    success: "text-green-500",
    duplicate: "text-yellow-400",
    error: "text-red-500",
    invalid: "text-red-500",
  };

  // og i JSX:
  {
    status && (
      <p className="text-sm mt-2" style={{ color: statusColors[status.type] }}>
        {status.message}
      </p>
    );
  }

  return (
    <section className="flex flex-col justify-center items-center gap-3 py-10 m-5">
      <h2 className="text-center">WANT THE LATEST NIGHT CLUB NEWS</h2>

      <p className="text-center max-w-l text-(--color-neutrals-200)!">
        Subscribe to our newsletter and never miss an <span className="text-(--color-pink)">Event</span>
      </p>
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-10 mt-10">
        <input className="border-b-2 border-white outline-none p-2 w-100 placeholder-white text-white" type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSubscribe()} disabled={loading} />
        <Button variant="whiteTopBottom" onClick={handleSubscribe} disabled={loading}>
          {loading ? "SUBSCRIBING..." : "SUBSCRIBE"}
        </Button>
      </div>
      {status && <p className={`text-sm mt-2 ${statusColors[status.type]}`}>{status.message}</p>}
    </section>
  );
};

export default Newsletter;
