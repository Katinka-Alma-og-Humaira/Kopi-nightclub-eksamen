import { LiaSnapchatSquare } from "react-icons/lia";
import { LiaTwitterSquare } from "react-icons/lia";
import { LiaFacebookSquare } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";

const Footer = async () => {
  return (
    <footer className="relative flex flex-col justify-center items-center gap-3 bg-[url('/assets/bg/footerbg.jpg')] bg-no-repeat mt-20 pt-20 pb-5">
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative z-10 flex flex-col justify-center items-center gap-3 w-full px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-20">
          <div>
            <div className="flex justify-center lg:justify-start items-center">
              <img className="mb-10" src="/assets/icon/Logo_main.svg" alt="Billede af Night Club logo" width={180} />
            </div>
            <div className="text-center mb-8 lg:text-left">
              <h3 className="text-(--color-pink)!">LOCATION</h3>
              <p className="text-(--color-neutrals-200)!">Kompagnistræde 278</p>
              <p className="text-(--color-neutrals-200)!">1265 Købehavn K</p>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-(--color-pink)!">OPENING HOURS</h3>
              <p className="text-(--color-neutrals-200)!">WED - THU 10:30 PMTO 3 AM</p>
              <p className="text-(--color-neutrals-200)!">SAT - SUN: 11 PM TO 5 AM</p>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-10">
            <div className="max-w-110">
              <h3 className="mb-10 text-(--color-pink)!">NEWS</h3>
              <div className="flex gap-5 mb-10">
                <img src="/assets/content-img/recent_post1.jpg" alt="dummy" width={110} height={120} className="shrink-0" />
                <div>
                  <p className="text-(--color-neutrals-200)!">Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                  <p className="text-(--color-pink)!">April 17, 2026</p>
                </div>
              </div>
              <div className="flex gap-5">
                <img src="/assets/content-img/recent_post2.jpg" alt="dummy" width={110} height={120} className="shrink-0" />
                <div>
                  <p className="text-(--color-neutrals-200)!">Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
                  <p className="text-(--color-pink)!">April 17, 2026</p>
                </div>
              </div>
            </div>

            <div className="max-w-110">
              <h3 className="mb-10 text-(--color-pink)!">RECENT POSTS</h3>
              <div className="flex gap-5 mb-10">
                <FaXTwitter className="text-(--color-pink)" size={35} />
                <div>
                  <p className="text-(--color-neutrals-200)!">It is a long established fact that a reader will be distracted by the readable... </p>
                  <p className="text-(--color-pink)!">5 hours ago</p>
                </div>
              </div>
              <div className="flex gap-5">
                <FaXTwitter className="text-(--color-pink)" size={35} />
                <div>
                  <p className="text-(--color-neutrals-200)!">It is a long established fact that a reader will be distracted by the readable... </p>
                  <p className="text-(--color-pink)!">5 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center grid lg:grid-cols-3 lg:items-center w-full mt-20">
          <div className="lg:col-start-2 sm:text-center">
            <p className="text-(--color-neutrals-200)!">Stay Connected With Us</p>
            <div className="flex justify-center text-(--color-neutrals-200)">
              <LiaFacebookSquare size={60} />
              <LiaTwitterSquare size={60} />
              <LiaSnapchatSquare size={60} />
            </div>
          </div>

          <div className="lg:order-first lg:text-left">
            <p className="text-(--color-neutrals-100)!">Night Club All Rights Reserved</p>
          </div>

          <div className="lg:text-right">
            <p className="text-(--color-neutrals-100)!">Copyright © NightClub</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
