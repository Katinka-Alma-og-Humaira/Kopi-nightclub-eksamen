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

  // AI har hjulpet med at lave swiper-funktionen og med at skifte rækkefølgen på hver 2 card og til pagination
  return (
    <div>
      {events.map((event, index) => (
        <div key={event.slug} className={`mb-(--space-s) lg:max-w-[1500px] max-h-[1000px] lg:mx-auto grid grid-cols-1 min-[570px]:grid-cols-2 gap-8 items-start ${index % 2 !== 0 ? "min-[570px]:[&>*:first-child]:order-2" : ""}`}>
          <div>
            <Link href={`/detail-event/${event.slug}`}>
              <Image className="my-8 min-[570px]:my-0 w-full h-full object-cover" src={`${process.env.NEXT_PUBLIC_API_URL}${event.asset.url}`} alt={event.asset.alt} width={event.asset.width} height={event.asset.height} />
            </Link>
          </div>
          <div className={`mt-(--space-m) ${index % 2 === 0 ? "pr-6 lg:pr-16 xl:pr-24" : "pl-6 lg:pl-16 xl:pl-24"}`}>
            <h1 className="mb-2">{event.title}</h1>
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
            <h4 className="mb-(--space-xs) text-(--color-neutrals-200) border border-(--color-neutrals-100) px-2 py-2 w-fit ">{event.price},-</h4>
            <p>{event.description}</p>
            <div className="flex justify-center items-center min-[570px]:justify-end mt-8 ">
              <Link href={`/detail-event/${event.slug}`}>
                <Button variant="whiteTopBottom" href={`/detail-event/${event.slug}`}>
                  READ MORE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center items-center gap-3 mt-(--space-l)">
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
