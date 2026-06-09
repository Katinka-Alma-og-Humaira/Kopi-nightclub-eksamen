import { div } from "framer-motion/client";
import Image from "next/image";

const RecentBlogs = () => {
  return (
    <div className="sm:hidden">
      <h1>RECENT BLOGS</h1>
      <img src="/assets/bottom_line2.png" alt="Billede af pink gradient linje" />
      <div className="mb-20">
        <img src="/assets/content-img/blog_full1.jpg" alt="Billede af dj-pult" />
        <h2>more than 20 yea...</h2>
        <h3>
          <span>BY: Admin </span>
          <span>|</span>
          <span>3 Comments </span>
          <span>|</span>
          <span>16 Nov 2018</span>
        </h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
      </div>
      <div className="mb-20">
        <img src="/assets/content-img/blog_full2.jpg" alt="Billede af mand ved dj-pult" />
        <h2>more than 20 yea...</h2>
        <h3>
          <span>BY: Admin </span>
          <span>|</span>
          <span>3 Comments </span>
          <span>|</span>
          <span>16 Nov 2018</span>
        </h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
      </div>
      <div className="mb-20">
        <img src="/assets/content-img/blog_full3.jpg" alt="Billede af mand der pejer" />
        <h2>more than 20 yea...</h2>
        <h3>
          <span>BY: Admin </span>
          <span>|</span>
          <span>3 Comments </span>
          <span>|</span>
          <span>16 Nov 2018</span>
        </h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
      </div>
    </div>
  );
};

export default RecentBlogs;
