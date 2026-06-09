import { Suspense } from "react";
import { cacheLife } from "next/cache";
import UpcommingEventSlider from "./UpcommingEventsSlider";
import Image from "next/image";

export async function getUpcommingEvents() {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  if (!response.ok) throw new Error("Could not loade events...");
  return response.json();
}

const UpcommingEventContent = async () => {
  try {
    const events = await getUpcommingEvents();
    return <UpcommingEventSlider events={events} />;
  } catch (error) {
    return <p>An error occured while loading upcomming events...</p>;
  }
};

const UpcommingEvents = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-20">
          <Image src="/assets/loader/madbars.gif" alt="Henter..." width={80} height={80} unoptimized />
        </div>
      }
    >
      <UpcommingEventContent />
    </Suspense>
  );
};
export default UpcommingEvents;
