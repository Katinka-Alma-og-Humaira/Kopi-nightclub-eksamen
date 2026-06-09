"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";

const UpcommingEventSlider = ({ events, page, totalPages }) => {
  const router = useRouter();
  console.log("page:", page, "totalPages:", totalPages);
  const handlePage = (newPage) => {
    router.push(`?page=${newPage}`);
  };
  return (
    <div>
      {events.map((event, index) => (
        <div key={event.slug} className={`my-20 grid grid-cols-1 min-[570px]:grid-cols-2 gap-8 items-start ${index % 2 !== 0 ? "min-[570px]:[&>*:first-child]:order-2" : ""}`}>
          <div>
            <Link href={`/detail-event/${event.slug}`}>
              <Image className="my-8 min-[570px]:my-0 w-full h-full object-cover" src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} alt={event.asset.alt} width={event.asset.width} height={event.asset.height} />
            </Link>
          </div>
          <div>
            <h2 className="mb-2">{event.title}</h2>
            <h3 className="mb-3 flex items-center gap-3">
              <span className="text-(--color-pink)">
                {new Date(event.date).toLocaleDateString("en-EN", {
                  month: "short",
                  day: "numeric",
                })}{" "}
                ·{" "}
                {new Date(event.doorsOpen).toLocaleTimeString("en-EN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </span>
              <span className="text-(--color-pink)">|</span>
              <span>{event.location}</span>
            </h3>
            <p>{event.description}</p>
            <div className="flex justify-center items-center min-[570px]:justify-end mt-8 ">
              <Button variant="whiteTopBottom" href={`/detail-event/${event.slug}`}>
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center items-center gap-3">
        <div className="flex gap-4 text-white">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => handlePage(i + 1)} className={`cursor-pointer ${i + 1 === page ? "border-b border-white" : "opacity-40"}`}>
              {i + 1}
            </button>
          ))}
        </div>

        <button onClick={() => handlePage(page + 1)} disabled={page >= totalPages} className={`cursor-pointer text-white ${page >= totalPages ? "opacity-30 pointer-events-none" : ""}`}>
          næste
        </button>
      </div>
    </div>
  );
};

export default UpcommingEventSlider;
