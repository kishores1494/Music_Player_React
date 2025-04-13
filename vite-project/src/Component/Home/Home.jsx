import React, { useState, useRef, useEffect } from "react";
import "../../Style/Style.css";
import { one,two,three,four,five,six,seven } from "../../assets/assets";

function AudioPlayer() {
  
  const tracks = [
    { name: "Dharala Prabhu Title Track", src: "/src/assets/audio/Dharala Prabhu Title Track.mp3", img: one },
    { name: "Kathalikkum", src: "/src/assets/audio/Kathalikkum.mp3", img: two },
    { name: "Minnalgal Koothadum", src: "/src/assets/audio/Minnalgal Koothadum.mp3", img: three },
    { name: "Un mele oru kannu", src: "src/assets/audio/Un Mele Oru Kannu.flac", img: four },
    { name: "Bang bang ", src: "/src/assets/audio/Bang Bang Bang.flac", img: five },
    { name: "Agayam Theepiditha", src: "/src/assets/audio/Agayam Theepiditha.flac", img: six },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  
  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

 
  const nextTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === tracks.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(false);
  };


  const prevTrack = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? tracks.length - 1 : prevIndex - 1
    );
    setIsPlaying(false);
  };

 
  useEffect(() => {
    const audioElement = audioRef.current;
    const handleEnded = () => {
      nextTrack();
    };
    audioElement.addEventListener("ended", handleEnded);
    return () => {
      audioElement.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="player-container">
      <h2>Now Playing: {tracks[currentTrackIndex].name}</h2>
      <div className="music-box">
        <img src={tracks[currentTrackIndex].img} alt="Album Cover" />
        <audio ref={audioRef} src={tracks[currentTrackIndex].src} />
      </div>
      <div className="controls">
        <button onClick={prevTrack}>⏮ Previous</button>
        <button onClick={togglePlayPause}>{isPlaying ? "⏸ Pause" : "▶ Play"}</button>
        <button onClick={nextTrack}>Next ⏭</button>
      </div>
    </div>
  );
}

export default AudioPlayer;
