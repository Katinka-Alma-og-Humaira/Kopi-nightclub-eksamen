const WelcomeImg = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
      <div className="relative group w-[300px]">
        <img src="/assets/content-img/thumb1.jpg" alt="Food from restaurant" />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black">
          <img src="/assets/icon/favicon.png" alt="Food from restaurant" />
          <h4 className="text-white scale-30 group-hover:scale-100 transition-all duration-900 ease-out">Hej</h4>
          <p className="max-w-[20ch] text-white translate-x-10 group-hover:translate-x-0 transition-all duration-900 ease-out">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sit repellendus placeat nisi. Quod voluptas explicabo nihil officia. Mollitia sed ab nesciunt corrupti voluptas voluptatum nihil sint dolore repellendus nisi.</p>
        </div>
      </div>
      <div className="relative group w-[300px]">
        <img src="/assets/content-img/reastaurant_1.jpg" alt="Food from restaurant" />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black">
          <img src="/assets/icon/favicon.png" alt="Food from restaurant" />
          <h4 className="text-white scale-30 group-hover:scale-100 transition-all duration-900 ease-out">Hej</h4>
          <p className="max-w-[20ch] text-white translate-x-10 group-hover:translate-x-0 transition-all duration-900 ease-out">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sit repellendus placeat nisi. Quod voluptas explicabo nihil officia. Mollitia sed ab nesciunt corrupti voluptas voluptatum nihil sint dolore repellendus nisi.</p>
        </div>
      </div>
      <div className="relative group w-[300px]">
        <img src="/assets/content-img/thumb2.jpg" alt="Food from restaurant" />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black">
          <img src="/assets/icon/favicon.png" alt="Food from restaurant" />
          <h4 className="text-white scale-30 group-hover:scale-100 transition-all duration-900 ease-out">Hej</h4>
          <p className="max-w-[20ch] text-white translate-x-10 group-hover:translate-x-0 transition-all duration-900 ease-out">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sit repellendus placeat nisi. Quod voluptas explicabo nihil officia. Mollitia sed ab nesciunt corrupti voluptas voluptatum nihil sint dolore repellendus nisi.</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeImg;
