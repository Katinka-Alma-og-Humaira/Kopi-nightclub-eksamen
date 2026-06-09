import { cacheLife } from "next/cache";
import UpcommingEventSlider from "./UpcommingEventsSlider";

async function getUpcommingEvents() {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  return response.json();
}

const UpcommingEvent = async () => {
  const events = await getUpcommingEvents();
  return <UpcommingEventSlider events={events} />;
};

export default UpcommingEvent;
