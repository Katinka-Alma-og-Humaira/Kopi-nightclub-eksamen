import { Suspense } from "react";
import { cacheLife } from "next/cache";
import UpcommingEventSlider from "./UpcommingEventsSlider";
import Image from "next/image";

export async function getUpcommingEvents(page = 1) {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?_page=${page}&_limit=3`);
  if (!response.ok) throw new Error("Could not loade events...");
  return response.json();
}

const UpcommingEventContent = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  const page = Number(resolvedParams?.page) || 1;
  try {
    const [events, allEvents] = await Promise.all([getUpcommingEvents(page), fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`).then((r) => r.json())]);
    const totalPages = Math.ceil(allEvents.length / 3);
    return <UpcommingEventSlider events={events} page={page} totalPages={totalPages} />;
  } catch (error) {
    return <p>An error occured while loading upcomming events...</p>;
  }
};

const UpcommingEvents = ({ searchParams }) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-20">
          <Image src="/assets/loader/madbars.gif" alt="Henter..." width={80} height={80} unoptimized />
        </div>
      }
    >
      <UpcommingEventContent searchParams={searchParams} />
    </Suspense>
  );
};
export default UpcommingEvents;
