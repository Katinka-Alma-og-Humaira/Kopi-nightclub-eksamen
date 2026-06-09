const Banner = async ({ title }) => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-[url('/assets/bg/footerbg.jpg')] bg-center min-h-[250px] w-full max-w-full lg:max-w-[1500px] lg:mx-auto">
      <div className="absolute inset-0 bg-black/85" />
      <div className="z-2">
        <h1 className="flex justify-center">{title}</h1>
        <img className="" src="/assets/bottom_line2.png" alt="Billede af pink gradient linje" />
      </div>
    </div>
  );
};

export default Banner;
