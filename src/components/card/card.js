import React from 'react';
import './card.css';

export const Card = (props) => {
    // console.log(props);
    
    return (
        <div className="card">
            <img src={props.imageUrl} alt={props.name} className="img">
            </img>
            <ul className="list">
                <li><strong>Name:</strong> {props.name}</li>
                <li><strong>Text:</strong> {props.text}</li>
                <li><strong>Set Name:</strong> {props.set.name}</li>
                <li><strong>Type:</strong> {props.type}</li>
            </ul>
        </div>
    )

}


// export default Card;