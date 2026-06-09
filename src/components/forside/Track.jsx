"use client";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCirclePause } from "react-icons/fa6";
import { GrChapterPrevious } from "react-icons/gr";
import { GrChapterNext } from "react-icons/gr";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import TrackCard from "@/components/forside/TrackCard";
import { useState } from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

// ai har hjulpet med at få implementeret Audioplayer og lavet props
const tracks = [
  { id: 1, name: "BLACK BOX FUNKY", src: "/assets/media/black-box-funky.mp3", img: "/assets/content-img/track1.jpg" },
  { id: 2, name: "FASHION RED TAPE", src: "/assets/media/fashion-red-tape.mp3", img: "/assets/content-img/track2.jpg" },
  { id: 3, name: "EUPHORIA", src: "/assets/media/euphoria.mp3", img: "/assets/content-img/track2.jpg" },
  { id: 4, name: "BLACK BOX FUNKY", src: "/assets/media/black-box-funky.mp3", img: "/assets/content-img/track4.jpg" },
  { id: 5, name: "FASHION RED TAPE", src: "/assets/media/fashion-red-tape.mp3", img: "/assets/content-img/track5.jpg" },
  { id: 6, name: "EUPHORIA", src: "/assets/media/euphoria.mp3", img: "/assets/content-img/track2.jpg" },
  { id: 7, name: "FASHION RED TAPE", src: "/assets/media/fashion-red-tape.mp3", img: "/assets/content-img/track5.jpg" },
];

const TrackPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const playerRef = useRef(null);

  const handleTrackClick = (track) => {
    setCurrentTrack(track);
    setTimeout(() => {
      playerRef.current?.audio?.current?.play();
    }, 100);
  };
  return (
    <div className="flex flex-col items-center lg:max-w-[1000px] max-h-[1000px] lg:mx-auto my-(--space-l)">
      <div className="flex flex-col items-center mb-6">
        <h1>NIGHT CLUB TRACK</h1>
        <img src="/assets/bottom_line2.png" alt="Billede af pink gradient linje" />
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="hidden md:block shrink-0">
            <img src={currentTrack.img} alt="billede...." width={300} />
          </div>

          <div className="flex flex-col justify-center w-full">
            <h2 className="mb-(--space-s)">{currentTrack.name}</h2>
            <AudioPlayer
              ref={playerRef}
              key={currentTrack.id}
              src={currentTrack.src}
              onPlay={(e) => console.log("onPlay")}
              showSkipControls={true}
              showJumpControls={false}
              showFilledVolume={true}
              layout="stacked"
              customProgressBarSection={["PROGRESS_BAR"]}
              customControlsSection={[
                "CURRENT_TIME",
                <span key="separator" style={{ color: "white" }}>
                  {" "}
                  /{" "}
                </span>,
                "DURATION",
                "MAIN_CONTROLS",
                "LOOP",
                "VOLUME_CONTROLS",
              ]}
              style={{
                background: "transparent",
                boxShadow: "none",
              }}
              customIcons={{
                play: <FaRegPlayCircle color="white" size={40} />,
                pause: <FaRegCirclePause color="white" size={40} />,
                previous: <GrChapterPrevious color="white" size={24} />,
                next: <GrChapterNext color="white" size={24} />,
                volume: <FaVolumeUp color="white" />,
                volumeMute: <FaVolumeMute color="white" />,
                loop: <FaShuffle color="white" />,
                loopOff: <FaShuffle color="gray" />,
              }}
              // other props here
            />
          </div>
        </div>

        <section className="flex flex-col items-center">
          <Swiper
            modules={[Navigation]}
            navigation={{ prevEl, nextEl }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              340: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              900: { slidesPerView: 4 },
              1300: { slidesPerView: 5 },
            }}
            className="w-full"
          >
            {tracks.map((track) => (
              <SwiperSlide key={track.id}>
                <TrackCard key={track.id} src={track.img} name={track.name} isActive={currentTrack.id === track.id} onClick={() => handleTrackClick(track)} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex gap-3 mt-(--space-s)">
            <button ref={setPrevEl} className="text-(--color-neutrals-200) cursor-pointer border border-white py-2 px-3">
              ◀
            </button>
            <button ref={setNextEl} className="text-(--color-neutrals-200) cursor-pointer border border-white py-2 px-3">
              ▶
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrackPlayer;
