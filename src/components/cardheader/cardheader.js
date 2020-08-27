import React from 'react';


const CardHeader = (props) => {
    return (
        <div>
           Displaying <strong>{props.itemsCount}</strong> of <strong>{props.totalItems} </strong>
        </div>
    )

}


export default CardHeader;