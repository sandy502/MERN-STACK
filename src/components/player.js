// import React, { useState, useEffect, useRef } from "react";
// import AudioControls from "./controls";
// import Backdrop from "./backdrop";



// const AudioPlayer = ({ tracks }) => {
//   // State
//   const [trackIndex, setTrackIndex] = useState(0);
//   const [trackProgress, setTrackProgress] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // Destructure for conciseness
//   const { title, artist, color, image, audioSrc } = tracks[trackIndex];

//   // Refs
//   const audioRef = useRef(new Audio(audioSrc));
//   const intervalRef = useRef();
//   const isReady = useRef(false);

//   // Destructure for conciseness
//   const { duration } = audioRef.current;

//   const currentPercentage = duration
//     ? `${(trackProgress / duration) * 100}%`
//     : "0%";
//   const trackStyling = `
//     -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
//   `;

//   const startTimer = () => {
//     // Clear any timers already running
//     clearInterval(intervalRef.current);

//     intervalRef.current = setInterval(() => {
//       if (audioRef.current.ended) {
//         toNextTrack();
//       } else {
//         setTrackProgress(audioRef.current.currentTime);
//       }
//     }, [1000]);
//   };

//   const onScrub = (value) => {
//     // Clear any timers already running
//     clearInterval(intervalRef.current);
//     audioRef.current.currentTime = value;
//     setTrackProgress(audioRef.current.currentTime);
//   };

//   const onScrubEnd = () => {
//     // If not already playing, start
//     if (!isPlaying) {
//       setIsPlaying(true);
//     }
//     startTimer();
//   };

//   const toPrevTrack = () => {
//     if (trackIndex - 1 < 0) {
//       setTrackIndex(tracks.length - 1);
//     } else {
//       setTrackIndex(trackIndex - 1);
//     }
//   };

//   const toNextTrack = () => {
//     if (trackIndex < tracks.length - 1) {
//       setTrackIndex(trackIndex + 1);
//     } else {
//       setTrackIndex(0);
//     }
//   };

//   useEffect(() => {
//     if (isPlaying) {
//       audioRef.current.play();
//       startTimer();
//     } else {
//       audioRef.current.pause();
//     }
//   }, [isPlaying]);

//   // Handles cleanup and setup when changing tracks
//   useEffect(() => {
//     audioRef.current.pause();

//     audioRef.current = new Audio(audioSrc);
//     setTrackProgress(audioRef.current.currentTime);

//     if (isReady.current) {
//       audioRef.current.play();
//       setIsPlaying(true);
//       startTimer();
//     } else {
//       // Set the isReady ref as true for the next pass
//       isReady.current = true;
//     }
//   }, [trackIndex]);

//   useEffect(() => {
//     // Pause and clean up on unmount
//     return () => {
//       audioRef.current.pause();
//       clearInterval(intervalRef.current);
//     };
//   }, []);

//   return (
//     <div className="audio-player">
//       <div className="track-info">
//         <img
//           className="artwork"
//           src={image}
//           alt={`track artwork for ${title} by ${artist}`}
//         />
//         <h2 className="title">{title}</h2>
//         <h3 className="artist">{artist}</h3>
//         <AudioControls
//           isPlaying={isPlaying}
//           onPrevClick={toPrevTrack}
//           onNextClick={toNextTrack}
//           onPlayPauseClick={setIsPlaying}
//         />
//         <input
//           type="range"
//           value={trackProgress}
//           step="1"
//           min="0"
//           max={duration ? duration : `${duration}`}
//           className="progress"
//           onChange={(e) => onScrub(e.target.value)}
//           onMouseUp={onScrubEnd}
//           onKeyUp={onScrubEnd}
//           style={{ background: trackStyling }}
//         />
//       </div>
//       <Backdrop
//         trackIndex={trackIndex}
//         activeColor={color}
//         isPlaying={isPlaying}
//       />
//     </div>
//   );
// };

// export default AudioPlayer;

import React from "react";
// import "./Player.css";

const Player = props => {
  const backgroundStyles = {
    backgroundImage:`url(${props.item.album.images[0].url})`,
  };
  
  const progressBarStyles = {
    width: (props.progress_ms * 100 / props.item.duration_ms) + '%'
  };
  
  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="now-playing__img">
          <img src={props.item.album.images[0].url} />
        </div>
        <div className="now-playing__side">
          <div className="now-playing__name">{props.item.name}</div>
          <div className="now-playing__artist">
            {props.item.artists[0].name}
          </div>
          <div className="now-playing__status">
            {props.is_playing ? "Playing" : "Paused"}
          </div>
          <div className="progress">
            <div
              className="progress__bar"
              style={progressBarStyles}
            />
          </div>
        </div>
        <div className="background" style={backgroundStyles} />{" "}
      </div>
    </div>
  );
}
export default Player;