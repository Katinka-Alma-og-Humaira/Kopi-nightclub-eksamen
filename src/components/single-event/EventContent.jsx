import { cacheLife } from "next/cache";
import Button from "@/components/Button";
import Comments from "@/components/single-event/Comments";
import LeaveAComment from "@/components/single-event/LeaveAComment";
import Link from "next/link";
import Banner from "@/components/Banner";
import { FaArrowCircleLeft } from "react-icons/fa";

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
      <div>
        <Banner title={event?.title} />
        <div className="mb-(--space-l) min-[800px]:max-w-6xl min-[1000px]:mx-auto my-(--space-l)">
          <div className="relative">
            <Link href="/events">
              <FaArrowCircleLeft
                className="
        absolute top-3 left-3 text-4xl text-(--color-pink) cursor-pointer
        
      "
              />
            </Link>
            {event?.asset?.url && <img className="w-full object-top object-cover min-[800px]:h-145" src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} alt={event.asset.alt || "Event image"} />}
          </div>
          <div className="px-(--space-s) min-[800px]:px-0">
            <h1 className="text-2xl min-[800px]:text-3xl font-black uppercase tracking-wider mt-(--space-m) mb-(--space-s)">{event?.title}</h1>

            <h2 className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[--color-pink] mb-(--space-m)">
              <span className="text-(--color-pink)">
                {new Date(event?.date).toLocaleDateString("en-EN", { month: "long", day: "numeric" })}
                {" - "}
                {new Date(event?.date).toLocaleTimeString("en-EN", { hour: "2-digit", minute: "2-digit", hour12: false })}
              </span>
              <span className="text-neutral-600">|</span>
              <span className="text-(--color-pink)">Doors open: {new Date(event?.doorsOpen).toLocaleTimeString("en-EN", { hour: "2-digit", minute: "2-digit", hour12: false })}</span>
              <span className="text-neutral-600">|</span>
              <span className="text-(--color-pink)">{event?.location}</span>
            </h2>

            <h4>
              <span className="text-(--color-neutrals-200) border border-(--color-neutrals-100) px-2 py-2 mr-(--space-2xs)">{event?.ageLimit}</span>
              <span className="text-(--color-neutrals-200) border border-(--color-neutrals-100) px-2 py-2 mr-(--space-2xs)">{event?.price},-</span>
              <span className="text-(--color-neutrals-100)">Category: {event?.category}</span>
            </h4>

            <div className="my-(--space-l)">
              <Link href={`/book-table?eventId=${event.id}`}>
                <Button variant="pinkGradiant">BOOK TABLE</Button>
              </Link>
            </div>
            <div className="mt-(--space-l) mb-(--space-m)">
              <h2 className="mt-(--space-s) mb-(--space-3xs) ">Description </h2>
              <p className="max-w-200">{event?.description}</p>
            </div>

            <div className="border-y border-(--color-neutrals-100) py-(--space-s) mb-(--space-l)">
              <div className="grid grid-cols-1 min-[620px]:grid-cols-2 min-[620px]:divide-x divide-(--color-neutrals-100)">
                <div className="pl-(--space-l)">
                  <h4 className="mb-(--space-3xs)">PROGRAM</h4>
                  {event?.schedule?.map((item, i) => (
                    <div className="mb-(--space-2xs) flex gap-3 items-start" key={i}>
                      <p className="text-(--color-pink)!">{item.time}</p>
                      <p>{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="pl-(--space-l)">
                  <h4 className="mb-(--space-3xs)">LINEUP</h4>
                  <ul className="list-disc list-inside marker:text-(--color-pink) ">
                    {event?.lineup?.map((artist, i) => (
                      <li key={i} className="text-(--color-neutrals-100) mb-(--space-2xs) text-sm">
                        {artist}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-(--space-xl) min-[800px]:mx-0 mx-(--space-s)">
          <Comments eventId={event?.id} />
        </div>

        <div className="mt-(--space-xl) min-[800px]:mx-0 mx-(--space-s)">
          <LeaveAComment eventId={event?.id} />
        </div>
      </div>
    </>
  );
}
