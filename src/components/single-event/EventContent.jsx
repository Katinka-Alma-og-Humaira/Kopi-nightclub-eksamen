import { cacheLife } from "next/cache";
import Button from "@/components/Button";
import Comments from "@/components/single-event/Comments";
import LeaveAComment from "@/components/single-event/LeaveAComment";
import Link from "next/link";

async function getEvent(slug) {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${slug}`);
  return response.json();
}

export async function EventContent({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const event = await getEvent(slug);
  console.log("slug:", slug);
  console.log("event:", event);

  return (
    <>
      <div className="mb-(--space-l)">
        {event?.asset?.url && <img className="w-full object-cover min-[800px]:h-125" src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} alt={event.asset.alt || "Event image"} />}
        <h1 className="mt-(--space-s)">
          {event?.title} —{" "}
          {new Date(event?.date).toLocaleDateString("en-EN", {
            month: "short",
            day: "numeric",
          })}{" "}
          ·{" "}
          {new Date(event?.date).toLocaleTimeString("en-EN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </h1>
        <h2 className="mb-(--space-l)">
          <span className="text-(--color-pink)">
            Doors open:{" "}
            {new Date(event?.doorsOpen).toLocaleTimeString("en-EN", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </span>
          <span> | </span>
          <span>{event?.location}</span>
        </h2>
        <div className=" min-[800px]:mx-0 mx-(--space-s) grid grid-cols-1 min-[800px]:grid-cols-2 min-[800px]:gap-x-30">
          <div>
            <h3 className="mb-(--space-xs)">Category: {event?.category}</h3>
            <h3>
              <span className="text-(--color-pink)">{event?.ageLimit}</span>
              <span> | </span>
              <span className="text-(--color-pink)">{event?.price},-</span>
            </h3>
            <div className="border-y border-(--color-neutrals-200) text-center mt-(--space-s) mb-(--space-xl) py-(--space-xs)">
              <h3 className="mb-(--space-3xs)">Lineup</h3>
              <ul className="text-(--color-neutrals-200) ">
                {event?.lineup?.map((artist, i) => (
                  <li key={i}>{artist}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center my-(--space-l)">
              <Link href={`/book-table?eventId=${event.id}`}>
                <Button variant="pinkGradiant">BOOK TABLE</Button>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="mb-(--space-3xs)">Program</h2>
            {event?.schedule?.map((item, i) => (
              <div className="mb-(--space-2xs)" key={i}>
                <p className="text-(--color-pink)!">{item.time}</p>
                <p>{item.label}</p>
              </div>
            ))}

            <h2 className="mt-(--space-s) mb-(--space-3xs)">Description </h2>
            <p>{event?.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-(--space-xl) min-[800px]:mx-0 mx-(--space-s)">
        <Comments eventId={event?.id} />
      </div>

      <div className="mt-(--space-xl) min-[800px]:mx-0 mx-(--space-s)">
        <LeaveAComment eventId={event?.id} />
      </div>
    </>
  );
}
