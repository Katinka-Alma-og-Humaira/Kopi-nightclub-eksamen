import Newsletter from "@/components/forside/Nyhedsbrev";
import Testimonials from "@/components/forside/Testimonials";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div>
      <Newsletter />
      <sektion>
        <Testimonials />
      </sektion>
      <Footer />
    </div>
  );
}
