import ContactUs from "@/components/contactus/ContactUs";
import NavBar from "@/components/Navbar";
import BurgerMenu from "@/components/Burger";
import Banner from "@/components/Banner";

export default function ContactPage() {
  return (
    <div>
      <NavBar />
      <BurgerMenu />
      <Banner title="CONTACT US" />
      <ContactUs />
    </div>
  );
}
