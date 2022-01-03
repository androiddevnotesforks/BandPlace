import React from "react";

class Carousel extends React.Component {
    constructor(props){
        super(props);
    }

    renderSales() {
        return (
            <ul className="carousel-list">
                <li className="carousel-list-item">
                    1
                </li>
                <li className="carousel-list-item">
                    2
                </li>
                <li className="carousel-list-item">
                    3
                </li>
                <li className="carousel-list-item">
                    4
                </li>
                <li className="carousel-list-item">
                    5
                </li>
                <li className="carousel-list-item">
                    6
                </li>
                <li className="carousel-list-item">
                    7
                </li>
                <li className="carousel-list-item">
                    8
                </li>
                <li className="carousel-list-item">
                    9
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