import { LiaSnapchatSquare } from "react-icons/lia";
import { LiaTwitterSquare } from "react-icons/lia";
import { LiaFacebookSquare } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-3 py-10 m-5">
      section
      <div>
        <h2>HER ER LOGO</h2>
        <div className="text-center">
          <h3>LOCATION</h3>
          <p>Kompagnistræde 278</p>
          <p>1265 Købehavn K</p>
        </div>
        <div className="text-center">
          <h3>OPENING HOURS</h3>
          <p>WED - THU 10:30 PMTO 3 AM</p>
          <p>SAT - SUN: 11 PM TO 5 AM</p>
        </div>
      </div>
      <div>
        <h3>NEWS</h3>
        <img src="" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem rerum voluptas modi totam distinctio sed, qui dignissimos, veritatis, suscipit esse molestias reiciendis inventore cum pariatur. Ipsa esse voluptates impedit!</p>
        <p>April 17, 2026</p>
        <img src="" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem rerum voluptas modi totam distinctio sed, qui dignissimos, veritatis, suscipit esse molestias reiciendis inventore cum pariatur. Ipsa esse voluptates impedit!</p>
        <p>April 17, 2026</p>
      </div>
      <div>
        <h3>RECENT POSTS</h3>
        <p>ICON</p>
        <p>It is a long established fact that a reader will be distracted by the readable... </p>
        <p>5 hours ago</p>
        <p>ICON</p>
        <p>It is a long established fact that a reader will be distracted by the readable... </p>
        <p>5 hours ago</p>
      </div>
      <div className="text-center">
        <p>Stay Connected With Us</p>
        <div className="flex justify-center">
          <LiaFacebookSquare size={50} />
          <LiaTwitterSquare size={50} />
          <LiaSnapchatSquare size={50} />
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
