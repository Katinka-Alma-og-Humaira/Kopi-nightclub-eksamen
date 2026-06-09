import { cacheLife } from "next/cache";
import { Suspense } from "react";
import Image from "next/image";
import TestimonialsSlider2 from "./TestimonialsSlider2";

async function getTestimonials() {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);
  if (!response.ok) throw new Error("Could not load testimonials");
  return response.json();
}

const TestimonialsContent = async () => {
  try {
    const testimonials = await getTestimonials();
    return <TestimonialsSlider2 testimonials={testimonials} />;
  } catch (error) {
    return <p>An error occured while loading testimonials...</p>;
  }
};

const Testimonials = async () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-20">
          <Image src="/assets/loader/madbars.gif" alt="Henter..." width={80} height={80} unoptimized />
        </div>
      }
    >
      <TestimonialsContent />
    </Suspense>
  );
};

export default Testimonials;
