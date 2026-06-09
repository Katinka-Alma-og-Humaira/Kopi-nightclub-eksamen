const Track = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1>NIGHT CLUB TRACK</h1>
        <img src="/assets/bottom_line2.png" alt="Billede af pink gradient linje" />
      </div>

      <h2 className="mb-10">NAME OF CURRENT SONG</h2>
      <div>
        <div className="self-start">
          <img src="/assets/content-img/track_thumb.jpg" alt="" width={280} />
        </div>

        {/* Her ligger musik player */}

        <section className="flex">
          <div>
            <img src="/assets/content-img/track1.jpg" alt="" />
          </div>
          <div>
            <img src="/assets/content-img/track2.jpg" alt="" />
          </div>
          <div>
            <img src="/assets/content-img/track2.jpg" alt="" />
          </div>
          <div>
            <img src="/assets/content-img/track4.jpg" alt="" />
          </div>
          <div>
            <img src="/assets/content-img/track5.jpg" alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Track;
