import { cacheLife } from "next/cache";
import FeautredEvents2 from "./FeautredEvents2";

async function getEvents() {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?isFeatured=true`);
  return response.json();
}

const FeautredEvents = async () => {
  const feauturedevents = await getEvents();
  return <FeautredEvents2 feauturedevents={feauturedevents} />;
};

export default FeautredEvents;
