import React, { useState } from "react";
import "./Songs.css";

const Songs = ({ moodSongs }) => {
  const [isPlaying, setIsPlaying] = useState(null);

  function handlePlayPause(index) {
    if (isPlaying === index) {
      setIsPlaying(null);
    } else {
      setIsPlaying(index);
    }
  }
  return (
    <div className="mood-songs">
      <h2>Recommended Songs</h2>

      {moodSongs.map((song, index) => {
        return (
          <div className="song" key={index}>
            <div className="title">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
            <div className="play-pause-button">
              {isPlaying === index && (
                <audio
                  src={song.audio}
                  style={{
                    display: "none",
                  }}
                  autoPlay={isPlaying === index}
                />
              )}
              <button onClick={() => handlePlayPause(index)}>
                {isPlaying === index ? (
                  <i className="ri-pause-line"></i>
                ) : (
                  <i className="ri-play-line"></i>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Songs;
