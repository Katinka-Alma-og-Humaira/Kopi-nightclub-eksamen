import { cacheLife } from "next/cache";

async function getEvent(id) {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${id}`);
  return response.json();
}

const SingleEvent = async ({ params }) => {
  const { id } = params;
  const event = await getEvent(id);
  console.log("slug:", slug);
  console.log("event:", event);
  return (
    <div>
      <img src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} alt={event.asset.alt} />
      <h2>
        {event.title} — {event.Date}, {event.Time}
      </h2>
      <h3>
        <span>Doors open: {event.doorsOpen}</span>
        <span>|</span>
        <span>{event.location}</span>
      </h3>
      <h4>{event.category}</h4>
      <h4>
        <span>{event.ageLimit}</span>
        <span>|</span>
        <span>{event.price},-</span>
      </h4>
      <div>
        <h3>Lineup</h3>
        <ul>
          {event.lineup.map((artist, i) => (
            <li key={i}>{artist}</li>
          ))}
        </ul>
      </div>
      <h3>Program</h3>
      {event.schedule.map((item, i) => (
        <div key={i}>
          <h4>{item.time}</h4>
          <p>{item.label}</p>
        </div>
      ))}

      <h3>Description </h3>
      <p>{event.description}</p>
    </div>
  );
};

export default SingleEvent;
