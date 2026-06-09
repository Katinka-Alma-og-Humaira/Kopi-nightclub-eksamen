import WelcomeImg from "@/components/forside/WelcomeImg";
import FeautredEvents from "@/components/forside/FeautredEvents";
import Video from "@/components/forside/Video";
import ContactUs from "@/components/contactus/ContactUs";
import BookATable from "@/components/tables/BookATable";

export default function EventsPage() {
  return (
    <div>
      <WelcomeImg />
      <FeautredEvents />
      <Video />
      <ContactUs />
      <BookATable />
    </div>
  );
}
