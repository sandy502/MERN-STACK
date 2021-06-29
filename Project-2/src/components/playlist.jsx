import React, { Component } from "react";
import { Button, Jumbotron, Card, ProgressBar, CardColumns, form } from "react-bootstrap";
import SongCard from "./Songcards";
import "./Homecss.css";

function Playlist(props) {
  return (
      <div className="c-player--details">
          <div className="details-img">
              <img src={props.song.img_src} alt="" />
          </div>
          <h3 className="details-title">{props.song.title}</h3>
          <h4 className="details-artist">{props.song.artist}</h4>
      </div>
  )
}

export default Playlist;