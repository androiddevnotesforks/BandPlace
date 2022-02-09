import React from "react";


const CarouselListItem = (props) => (
    <li className="carousel-item" id={`carousel-${props.idx}`}>
        <div className="album-cover" style={{backgroundImage: `url(${props.record.coverArtUrl})`, backgroundSize: 'cover'}}>
            {/* {props.record.title} */}
        </div>
    </li>
) 


export default CarouselListItem;