import React from 'react';
import { Button } from "react-bootstrap";
import "./searchcss.css"
const Listbox = props => {

    const clicked = e => {
        e.preventDefault();
        props.clicked(e.target.id);
    }    

    return (
        <div>
            <div id = "listbox">
                {
                    props.items.map((item, idx) => 
                    <Button key={idx}
                        onClick={clicked}
                        className="list-group-item list-group-item-action list-group-item-light"
                        id={item.track.id}>
                            
                            {item.track.name}
                    </Button>)
                }
            </div>
        </div>
        

    );
}

export default Listbox;