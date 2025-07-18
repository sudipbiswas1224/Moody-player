import React, { useState } from "react";
import "./Songs.css";

const Songs = () => {
  const [moodSongs, setmoodSongs] = useState([
    {
      title: "test_title",
      artist: "song_artist",
      url: "example_url",
    },
    {
      title: "test_title",
      artist: "song_artist",
      url: "example_url",
    },
    {
      title: "test_title",
      artist: "song_artist",
      url: "example_url",
    },
  ]);
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
              <i className="ri-pause-line"></i>
              <i className="ri-play-line"></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Songs;
