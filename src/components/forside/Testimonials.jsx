import Image from "next/image";
import { LiaSnapchatSquare } from "react-icons/lia";
import { LiaTwitterSquare } from "react-icons/lia";
import { LiaFacebookSquare } from "react-icons/lia";

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-10 m-5">
      <Image src="/img/dummybillede.png" alt="" width={200} height={50} />
      <h2>NAME</h2>
      <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut omnis vitae dolor quia harum iste quidem nemo, labore modi molestiae animi atque, dolores laboriosam magnam deserunt voluptate aspernatur aliquam vel.</p>
      <div className="flex">
        <LiaFacebookSquare size={50} />
        <LiaTwitterSquare size={50} />
        <LiaSnapchatSquare size={50} />
      </div>
    </div>
  );
};

export default Testimonials;
