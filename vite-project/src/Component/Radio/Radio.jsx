import React, { useState, useRef } from "react";
import '../../Style/Radio.css'

const radioStations = [
  { name: "Tamil FM", url: "https://stream-151.zeno.fm/y8mkw0rskxhvv?zs=FwnDRNUXShO02Ug_Yg16Hw" },
  { name: "Radio Mirchi", url: "https://stream-51.zeno.fm/6r5yfb7zsnruv?zs=az-9FtxaSXKZ5PV4rKkENw" },
  { name: "Suryan FM", url: "https://stream-151.zeno.fm/6r5yfb7zsnruv?zs=xyz" }, 
];

function Radio() {
  const [currentStation, setCurrentStation] = useState(radioStations[0].url);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(currentStation));

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const changeStation = (url) => {
    audioRef.current.pause();
    audioRef.current.src = url;
    audioRef.current.play();
    setCurrentStation(url);
    setIsPlaying(true);
  };

  return (
    <div className="radio-container">
      <h2>🎵 Tamil Online Radio</h2>
      <div className="station-list">
        {radioStations.map((station) => (
          <button key={station.url} onClick={() => changeStation(station.url)}>
            {station.name}
          </button>
        ))}
      </div>
      <button onClick={togglePlayPause} className="play-pause-btn">
        {isPlaying ? "⏸ Pause" : "▶ Play"}
      </button>
    </div>
  );
}

export default Radio;
