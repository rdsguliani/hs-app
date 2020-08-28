import React, { useState } from 'react';
import './spinner.css';
// import { spinnerServices } from '../../services/spinnerServices';

export const Spinner = (props) => {
   
    // let showSpinner = false;
    const [showSpinner, setSpinner] = useState(false);
    
    document.addEventListener("spinnerEvent", (e) => {
        console.log("Spinner STATE :: " + e.detail);
        const s = e.detail === "open" ? true : false;
        setSpinner(s);
    });

    return (
        showSpinner ? (<div className="spinner">Loading... </div>) : null
    )

}
