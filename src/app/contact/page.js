import Newsletter from "@/components/forside/Nyhedsbrev";
import Testimonials from "@/components/forside/Testimonials";
import Footer from "@/components/Footer";
import UpcommingEvent from "@/components/events/UpcomingEvent";
import RecentBlogs from "@/components/forside/RecentBlogs";
import Track from "@/components/forside/Track";

export default function ContactPage({ searchParams }) {
  return (
    <div>
      <Track />
      <Newsletter />
      <RecentBlogs />
      <section>
        <Testimonials />
      </section>
      <UpcommingEvent searchParams={searchParams} />
      <Footer />
    </div>
  );
}
