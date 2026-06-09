const WelcomeImg = () => {
  return (
    <div className="relative group w-[300px]">
      <img src="/img/dummy-img-welcome.jpg" alt="img" width={300} />
      <div className="absolute inset-0 opacity-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black">
        <h4>Hej</h4>
        <p className="text-white max-w-[20ch]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sit repellendus placeat nisi. Quod voluptas explicabo nihil officia. Mollitia sed ab nesciunt corrupti voluptas voluptatum nihil sint dolore repellendus nisi.</p>
      </div>
    </div>
  );
};

export default WelcomeImg;
