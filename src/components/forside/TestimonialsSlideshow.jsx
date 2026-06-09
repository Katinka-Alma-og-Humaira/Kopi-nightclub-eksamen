"use client";

import Image from "next/image";
import { LiaSnapchatSquare } from "react-icons/lia";
import { LiaTwitterSquare } from "react-icons/lia";
import { LiaFacebookSquare } from "react-icons/lia";
import { useState, useEffect } from "react"; //

const TestimonialsSlideshow = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => {
        setPrev(c);
        return (c + 1) % testimonials.length;
      });
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="flex flex-col justify-center items-center gap-3 py-10 m-5">
      {testimonials.map((testimonials, index) => (
        <div key={testimonials.id} className={`transition-all duration-1000 flex flex-col justify-center items-center gap-3 max-w-4xl ${index === current ? "opacity-100 translate-x-0" : index === prev ? "opacity-0 -translate-x-full absolute" : "opacity-0 translate-x-full absolute"}`}>
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

export default TestimonialsSlideshow;
