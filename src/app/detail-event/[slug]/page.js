import { cacheLife } from "next/cache";

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
    <div>
      <img src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} alt={event.asset.alt} />
      <div className="mx-(--space-s)">
        <h1>
          {event.title} — {event.date}, {event.time}
        </h1>
        <h2>
          <span className="text-(--color-pink)">Doors open: {event.doorsOpen}</span>
          <span> | </span>
          <span>{event.location}</span>
        </h2>
        <h3>{event.category}</h3>
        <h3>
          <span>{event.ageLimit}</span>
          <span>|</span>
          <span>{event.price},-</span>
        </h3>
        <div className="border-y border-(--color-neutrals-200) text-center">
          <h3>Lineup</h3>
          <ul className="text-(--color-neutrals-200)">
            {event.lineup.map((artist, i) => (
              <li key={i}>{artist}</li>
            ))}
          </ul>
        </div>
        <h2>Program</h2>
        {event.schedule.map((item, i) => (
          <div key={i}>
            <p className="text-(--color-pink)!">{item.time}</p>
            <p>{item.label}</p>
          </div>
        ))}

        <h2>Description </h2>
        <p>{event.description}</p>

        <button className="text-white">BOOK NOW</button>
      </div>
    </div>
  );
};

export default Page;
