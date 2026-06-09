import { LiaSnapchatSquare } from "react-icons/lia";
import { LiaTwitterSquare } from "react-icons/lia";
import { LiaFacebookSquare } from "react-icons/lia";

import { cacheLife } from "next/cache";

async function getFooterData() {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);
  return response.json();
}

const Footer = async () => {
  const FooterData = await getFooterData();
  console.log(FooterData);
  return (
    <footer className="flex flex-col justify-center items-center gap-3 py-10 m-5">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
        <div>
          <div className="flex justify-center items-center sm:text-left">
            <img className="mb-10" src="/assets/icon/Logo_main.svg" alt="Billede af Night Club logo" width={150} />
          </div>
          <div className="text-center mb-8 sm:text-left">
            <h3 className="text-(--color-pink)">LOCATION</h3>
            <p>Kompagnistræde 278</p>
            <p>1265 Købehavn K</p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-[--color-pink]">OPENING HOURS</h3>
            <p>WED - THU 10:30 PMTO 3 AM</p>
            <p>SAT - SUN: 11 PM TO 5 AM</p>
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-2 gap-8">
          <div className="max-w-110">
            <h3 className="mb-10 text-(--color-pink)">NEWS</h3>
            <div className="flex gap-5 mb-10">
              <img src="/assets/content-img/recent_post1.jpg" alt="dummy" width={110} height={120} />
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                <p className="text-(--color-pink)">April 17, 2026</p>
              </div>
            </div>
            <div className="flex gap-5">
              <img src="/assets/content-img/recent_post2.jpg" alt="dummy" width={110} height={120} />
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                <p className="text-(--color-pink)">April 17, 2026</p>
              </div>
            </div>
          </div>

          <div className="max-w-110">
            <h3 className="mb-10 text-(--color-pink)">RECENT POSTS</h3>
            <div className="flex gap-5 mb-10">
              <p>ICON</p>
              <div>
                <p>It is a long established fact that a reader will be distracted by the readable... </p>
                <p className="text-(--color-pink)">5 hours ago</p>
              </div>
            </div>
            <div className="flex gap-5">
              <p>ICON</p>
              <div>
                <p>It is a long established fact that a reader will be distracted by the readable... </p>
                <p className="text-(--color-pink)">5 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p>Stay Connected With Us</p>
        <div className="flex justify-center text-white">
          <LiaFacebookSquare size={60} />
          <LiaTwitterSquare size={60} />
          <LiaSnapchatSquare size={60} />
        </div>

        <div className="text-center">
          <p>Night Club All Rights Reserved</p>
        </div>
        <div className="text-center">
          <p>Copyright © NightClub</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
