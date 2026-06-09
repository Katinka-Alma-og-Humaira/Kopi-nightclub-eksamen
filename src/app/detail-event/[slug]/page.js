import { cacheLife } from "next/cache";
import Button from "@/components/Button";

async function getEvent(slug) {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${slug}`);
  return response.json();
}

const Page = async ({ params }) => {
  const { slug } = await params;
  const event = await getEvent(slug);
  console.log("slug:", slug);
  console.log("event:", event);
  return (
    <div className="min-[800px]:max-w-6xl min-[1000px]:mx-auto">
      <img className="w-full object-cover min-[800px]:h-125" src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} alt={event.asset.alt} />
      <h1 className="mt-(--space-s)">
        {event.title} — {event.date}, {event.time}
      </h1>
      <h2 className="mb-(--space-l)">
        <span className="text-(--color-pink)">Doors open: {event.doorsOpen}</span>
        <span> | </span>
        <span>{event.location}</span>
      </h2>
      <div className=" min-[800px]:mx-0 mx-(--space-s) grid grid-cols-1 min-[800px]:grid-cols-2 min-[800px]:gap-x-30">
        <div>
          <h3 className="mb-(--space-xs)">Category: {event.category}</h3>
          <h3>
            <span className="text-(--color-pink)">{event.ageLimit}</span>
            <span> | </span>
            <span className="text-(--color-pink)">{event.price},-</span>
          </h3>
          <div className="border-y border-(--color-neutrals-200) text-center mt-(--space-s) mb-(--space-xl) py-(--space-xs)">
            <h3 className="mb-(--space-3xs)">Lineup</h3>
            <ul className="text-(--color-neutrals-200) ">
              {event.lineup.map((artist, i) => (
                <li key={i}>{artist}</li>
              ))}
            </ul>
          </div>
          <Button variant="transparent">BOOK TABLE</Button>
        </div>
        <div>
          <h2 className="mb-(--space-3xs)">Program</h2>
          {event.schedule.map((item, i) => (
            <div className="mb-(--space-2xs)" key={i}>
              <p className="text-(--color-pink)!">{item.time}</p>
              <p>{item.label}</p>
            </div>
          ))}

          <h2 className="mt-(--space-s) mb-(--space-3xs)">Description </h2>
          <p>{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
