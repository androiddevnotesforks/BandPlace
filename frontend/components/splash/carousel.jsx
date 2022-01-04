import React from "react";

class Carousel extends React.Component {
    constructor(props){
        super(props);
    }

    renderSales() {
        return (
            <ul className="carousel-list">
                <li className="carousel-list-item">
                    (these)
                </li>
                <li className="carousel-list-item">
                    (are)
                </li>
                <li className="carousel-list-item">
                    (albums,)
                </li>
                <li className="carousel-list-item">
                    (they'll)
                </li>
                <li className="carousel-list-item">
                    (move)
                </li>
                <li className="carousel-list-item">
                    (once)
                </li>
                <li className="carousel-list-item">
                    (that)
                </li>
                <li className="carousel-list-item">
                    (MVP's)
                </li>
                <li className="carousel-list-item">
                    (implemented)
                </li>
            </ul>
        )
    }

    render() {
        // const bold = () => (<h3 className="bold-insert">number one</h3>);
        return (
            <div className="sales-carousel-bar">
                <h3>Fans have rated bandplace the #1 place for bands this year</h3>
                <div className="sales-carousel-container">
                    <h4>SELLING RIGHT NOW:</h4>
                    <div className="sales-carousel"> 
                        {this.renderSales()}
                    </div>
                </div>
            </div>
        )
    }
}


export default Carousel;