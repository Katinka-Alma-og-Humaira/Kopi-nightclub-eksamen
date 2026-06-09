import Image from "next/image";
import { LiaSnapchatSquare } from "react-icons/lia";
import { LiaTwitterSquare } from "react-icons/lia";
import { LiaFacebookSquare } from "react-icons/lia";
import { cacheLife } from "next/cache";

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
    <div className="flex flex-col justify-center items-center gap-3 py-10 m-5">
      {testimonials.map((testimonials) => (
        <div key={testimonials.id} className="flex flex-col justify-center items-center gap-3">
          <Image src={`${process.env.NEXT_PUBLIC_API_URL}${testimonials.asset.url}`} alt={testimonials.asset.alt} width={200} height={50} />
          <h2>{testimonials.name}</h2>
          <p className="text-center">{testimonials.content}</p>
          <div className="flex text-white">
            <LiaFacebookSquare size={50} />
            <LiaTwitterSquare size={50} />
            <LiaSnapchatSquare size={50} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
