import React from "react";


const CarouselListItem = (props) => (
    <li className="carousel-item" id={`carousel-${props.idx}`}>
        <div className="album-cover">
            {props.record}
        </div>
    </li>
) 


export default CarouselListItem;