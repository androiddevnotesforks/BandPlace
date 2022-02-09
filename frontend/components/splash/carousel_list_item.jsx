import React, { forwardRef } from "react";
// import { CSSTransition } from "react-transition-group";

const CarouselListItem = forwardRef((props, ref) => (
        <li className={`carousel-item ${props.idx}`} key={`carousel-${props.idx}`} ref={ref}>
            <div className="album-cover" style={{backgroundImage: `url(${props.record.coverArtUrl})`, backgroundSize: 'cover'}}>
            </div>
        </li>
)); 


export default CarouselListItem;