const Newsletter = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 py-10 m-5">
      <h2 className="text-center">WANT THE LATEST NIGHT CLUB NEWS</h2>

      <h3 className="text-center max-w-sm">
        Subscribe to our newsletter and never miss an <span>Event</span>
      </h3>

      <input className="border-b border-black outline-none p-2 w-full max-w-md " type="email" placeholder="Enter your Email" />
    </section>
  );
};

export default Newsletter;
