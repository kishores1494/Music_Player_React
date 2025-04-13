import React from "react";
import { GrChapterPrevious ,GrPause, GrPlay, GrChapterNext} from "react-icons/gr";

function Footer({ prevTrack, togglePlayPause, nextTrack, isPlaying }) {
  return (
    <footer className="footer">
      <button className="footer-btn" onClick={prevTrack}><GrChapterPrevious />Previous</button>
      <button className="footer-btn play-btn" onClick={togglePlayPause}>
        {isPlaying ?<><GrPause /> Pause</>: <><GrPlay />Play</>}
      </button>
      <button className="footer-btn" onClick={nextTrack}>Next </button>
    </footer>
  );
}

export default Footer;
