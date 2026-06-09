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

const tracks = [
  { id: 1, name: "BLACK BOX FUNKY", src: "/assets/media/black-box-funky.mp3", img: "/assets/content-img/track1.jpg" },
  { id: 2, name: "FASHION RED TAPE", src: "/assets/media/fashion-red-tape.mp3", img: "/assets/content-img/track2.jpg" },
  { id: 3, name: "EUPHORIA", src: "/assets/media/euphoria.mp3", img: "/assets/content-img/track2.jpg" },
  { id: 4, name: "BLACK BOX FUNKY", src: "/assets/media/black-box-funky.mp3", img: "/assets/content-img/track4.jpg" },
  { id: 5, name: "FASHION RED TAPE", src: "/assets/media/fashion-red-tape.mp3", img: "/assets/content-img/track5.jpg" },
];

const TrackPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1>NIGHT CLUB TRACK</h1>
        <img src="/assets/bottom_line2.png" alt="Billede af pink gradient linje" />
      </div>

      <div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="self-start">
            <img src={currentTrack.img} alt="billede...." width={400} />
          </div>

          <div className="flex flex-col justify-center w-full">
            <h2>{currentTrack.name}</h2>
            <AudioPlayer
              key={currentTrack.id}
              src={currentTrack.src}
              autoPlay
              onPlay={(e) => console.log("onPlay")}
              showSkipControls={true}
              showJumpControls={false}
              showFilledVolume={true}
              layout="stacked"
              customProgressBarSection={["PROGRESS_BAR"]}
              customControlsSection={["CURRENT_TIME", "DURATION", "MAIN_CONTROLS", "LOOP", "VOLUME_CONTROLS"]}
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
        <section className="flex">
          {tracks.map((track) => (
            <TrackCard key={track.id} src={track.img} name={track.name} isActive={currentTrack.id === track.id} onClick={() => setCurrentTrack(track)} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default TrackPlayer;
