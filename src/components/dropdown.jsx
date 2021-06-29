import React from 'react';
import "./searchcss.css"
import { } from "react-bootstrap";

const Dropdown = props => {    

    const dropdownChanged = e => {
        props.changed(e.target.value);

    }    

    return (
        <div>     
            <label className="dropdownlabel" >{props.label}</label>       
            <select className="select" value={props.selectedValue} onChange={dropdownChanged}>
                <option key={0}>Select...</option>
                {props.options.map((item, idx) => <option key={idx + 1} value={item.id}>{item.name}</option>)}
            </select>            
        </div>
    );
}

export default Dropdown;