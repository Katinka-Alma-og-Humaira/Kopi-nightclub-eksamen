import Image from "next/image";
import { Suspense } from "react";
import { cacheLife } from "next/cache";

async function getRecentEventsWithComments() {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events?_limit=3`, {
    next: { tags: ["comments"] },
  });
  const events = await response.json();

  return Promise.all(
    events.map(async (event) => {
      const detailRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${event.id}?_embed=comments`, {
        next: { tags: ["comments"] },
      });
      return detailRes.json();
    }),
  );
}
// Ai hjalp os med at få /events/:id?_embed=comments implementeret

const RecentBlogsContent = async () => {
  const eventsWithComments = await getRecentEventsWithComments();

  return (
    <div className=" mx-5 sm:hidden">
      <div className="flex flex-col items-center mb-(--space-xs)">
        <h1>RECENT EVENTS</h1>
        <img src="/assets/bottom_line2.png" alt="Billede af pink gradient linje" />
      </div>
      <div className="mb-30">
        {eventsWithComments.map((event) => (
          <div key={event.slug} className="mb-10">
            <Image src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} alt={event.asset.alt} width={event.asset.width} height={event.asset.height} />
            <h2 className="my-(--space-xs)">{event.title}</h2>
            <h3 className="mb-(--space-m) text-(--color-pink)!">
              <span>BY: Admin </span>
              <span>/ </span>
              <span>{event.comments?.length > 0 ? `${event.comments.length} ${event.comments.length === 1 ? "Comment" : "Comments"}` : "No Comments"}</span>
              <span> / </span>
              <span>{new Date(event.date).toLocaleDateString("en-EN", { day: "numeric", month: "short", year: "numeric" })} </span>
            </h3>
            <p className="text-(--color-neutrals-200)!">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const RecentBlogs = () => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center py-20">
          <Image src="/assets/loader/madbars.gif" alt="Henter..." width={80} height={80} unoptimized />
        </div>
      }
    >
      <RecentBlogsContent />
    </Suspense>
  );
};

export default RecentBlogs;
