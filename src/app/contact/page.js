import Newsletter from "@/components/forside/Nyhedsbrev";
import Testimonials from "@/components/forside/Testimonials";
import Footer from "@/components/Footer";
import UpcommingEvent from "@/components/events/UpcomingEvent";
import RecentBlogs from "@/components/forside/RecentBlogs";

export default function ContactPage() {
  return (
    <div>
      <Newsletter />
      <RecentBlogs />
      <section>
        <Testimonials />
      </section>
      <UpcommingEvent />
      <Footer />
    </div>
  );
}
