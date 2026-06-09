import { cacheLife } from "next/cache";
import { Suspense } from "react";
import Image from "next/image";
import FeautredEvents2 from "./FeautredEvents2";

async function getEvents() {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?isFeatured=true`);
  if (!response.ok) throw new Error("Could not load events");
  return response.json();
}

const FeautredEventsContent = async () => {
  try {
    const feauturedevents = await getEvents();
    return <FeautredEvents2 feauturedevents={feauturedevents} />;
  } catch (error) {
    return <p>An error occured while loading featured events...</p>;
  }
};

const FeautredEvents = async () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-20">
          <Image src="/assets/loader/madbars.gif" alt="Henter..." width={80} height={80} unoptimized />
        </div>
      }
    >
      <FeautredEventsContent />
    </Suspense>
  );
};

export default FeautredEvents;
