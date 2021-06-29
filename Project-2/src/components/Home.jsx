import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./searchcss.css";

class Home extends Component {
    render() {
        return (
            <div className="flex-box-container">
                <div className="headings">
                    <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBsb3ZlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="image"></img>
                    <h1 className="centered">GO WITH THE FLOW OF MUSIC</h1>
                    <Button className="buttonjoin" href="./Signup" >JOIN NOW</Button>
                    <h4>STREAM THE LATEST HITS AND ENJOY THE MADNESS FOR RYTHMS</h4>
                </div>
            </div>
        );
    }
}

export default Home;
