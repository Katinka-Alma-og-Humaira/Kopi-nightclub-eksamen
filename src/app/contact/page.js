import Newsletter from "@/components/forside/Nyhedsbrev";
import Testimonials from "@/components/forside/Testimonials";
import Footer from "@/components/Footer";
import UpcommingEvent from "@/components/events/UpcomingEvent";

export default function ContactPage() {
  return (
    <div>
      <Newsletter />
      <section>
        <Testimonials />
      </section>
      <UpcommingEvent />
      <Footer />
    </div>
  );
}
