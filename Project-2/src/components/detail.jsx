import React, { Component } from 'react';
import "./searchcss.css"

import { Button } from "react-bootstrap";

const Detail = ({album, artists, name}) => {

    return (
        <div id="imageblock">
                <img 
                    src={album.images[0].url}
                    alt={name}>                    
                </img>
                <label htmlFor={name} className="imagelabel" >
                    {name}
                </label>
                <label htmlFor={artists[0].name} className="imagelabel">
                    {artists[0].name}
                </label>
        </div>
    );
}

export default Detail;