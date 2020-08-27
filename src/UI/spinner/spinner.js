import React from 'react';
import './spinner.css';
// import { spinnerServices } from '../../services/spinnerServices';

export const Spinner = (props) => {
   
    let showSpinner = false;
    
    document.addEventListener("spinnerEvent", (e) => {
        console.log("Spinner STATE :: " + e.detail);
        showSpinner = e.detail === "open" ? true : false;
    });

    return (
        showSpinner ? (<div className="spinner">Loading... </div>) : null
    )

}
