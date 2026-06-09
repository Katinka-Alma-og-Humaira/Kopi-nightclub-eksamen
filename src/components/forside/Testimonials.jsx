// import Image from "next/image";
// import { LiaSnapchatSquare } from "react-icons/lia";
// import { LiaTwitterSquare } from "react-icons/lia";
// import { LiaFacebookSquare } from "react-icons/lia";
import { cacheLife } from "next/cache";
// import TestimonialsSlideshow from "./TestimonialsSlideshow";
import TestimonialsSlider2 from "./TestimonialsSlider2";

async function getTestimonials() {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);
  return response.json();
}

const Testimonials = async () => {
  const testimonials = await getTestimonials();
  console.log(testimonials);
  return (
    <>
      <TestimonialsSlider2 testimonials={testimonials} />
    </>
  );
};

export default Testimonials;
