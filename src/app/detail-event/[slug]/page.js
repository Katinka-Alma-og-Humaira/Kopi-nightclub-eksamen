import { Suspense } from "react";
import { EventContent } from "@/components/single-event/EventContent";

const Page = ({ params }) => {
  return (
    <div className="min-[800px]:max-w-6xl min-[1000px]:mx-auto">
      <Suspense fallback={<div>Loading event...</div>}>
        <EventContent params={params} />
      </Suspense>
    </div>
  );
};

export default Page;
