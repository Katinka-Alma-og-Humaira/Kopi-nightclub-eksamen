import Image from "next/image";
import { cacheLife } from "next/cache";

export async function getEvents() {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?isFeatured=true`);
  return response.json();
}

const FeautredEvents = async () => {
  const feauturedevents = await getEvents();
  console.log(feauturedevents);
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
      {feauturedevents.map((event) => (
        <div key={event.id} className="relative group w-[400px]">
          <div className="relative overflow-hidden">
            <Image className="w-[400px]" src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} alt={event.asset.alt} width={300} height={50} />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <button>BOOK NOW</button>
            </div>
            x
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-all duration-300 bg-black p-2">
              <h2>{event.title}</h2>
              <p className="text-center">{event.description}</p>
            </div>
          </div>
          <div className="flex justify-between p-1 bg-[var(--color-pink)]">
            <h2>{event.location}</h2>
            <h2>{event.date}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeautredEvents;
