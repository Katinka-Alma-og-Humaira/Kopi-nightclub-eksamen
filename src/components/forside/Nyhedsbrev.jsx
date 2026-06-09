import Button from "@/components/Button";

const Newsletter = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-3 py-10 m-5">
      <h2 className="text-center">WANT THE LATEST NIGHT CLUB NEWS</h2>

      <p className="text-center max-w-l text-(--color-neutrals-200)!">
        Subscribe to our newsletter and never miss an <span className="text-(--color-pink)">Event</span>
      </p>
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-10 mt-10">
        <input className="border-b-2 border-white outline-none p-2 w-100 placeholder-white text-white" type="email" placeholder="Enter your Email" />
        <Button variant="whiteTopBottom">SUBSCRIBE</Button>
      </div>
    </section>
  );
};

export default Newsletter;
