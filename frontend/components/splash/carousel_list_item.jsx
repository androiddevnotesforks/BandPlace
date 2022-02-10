import React, { forwardRef } from "react";

const CarouselListItem = forwardRef((props, ref) => (
        <li className={`carousel-item ${props.idx}`} key={`carousel-${props.idx}`} ref={ref} onClick={() => props.goToRecord(props.record.artist_id, props.record.id)}>
            <div className="album-cover" style={{backgroundImage: `url(${props.record.coverArtUrl})`, backgroundSize: 'cover'}}>
            </div>
            <h5>{props.record.title}</h5>
            <span>by {props.record.artist.username}</span>
        </li>
)); 


export default CarouselListItem;