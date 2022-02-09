import React from "react";
import CarouselListItem from "./carousel_list_item";

class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            randRecs: []
        }
    }

    componentDidMount(){
        this.fillCatalog();
    }

    componentDidUpdate(prevProps){
        if (prevProps.record !== this.props.record) {
            const newCatalog = this.state.randRecs.slice();
            newCatalog.push(this.props.record);
            if (newCatalog.length > 5) newCatalog.shift();
            this.setState({
                randRecs: newCatalog
            })
        }
    }

    getRandomRec(){
        this.props.getRandom();
    }


    fillCatalog(){
        for (let i = 0; i <= 5; i++) {
            this.props.getRandom();
        }
    }

    fillCarousel() {
        return (
            <div className="carousel-list">
               {this.state.randRecs.map ((record, idx) => (
                   <CarouselListItem record={record} idx={idx} key={idx}/>
               ))}
            </div>
        )
    }

    // rollCarousel(){
    //     const nextRecs = this.state.randRecs.slice(1).concat(this.state.randRecs.shift());
    //     this.setState({randRecs: nextRecs});
    // }

    pauseCarousel(){

    }

    render() {
        // const bold = () => (<h3 className="bold-insert">number one</h3>);
        console.log(this.state.randRecs);
        return (
            <div className="sales-carousel-bar">
                <div className="carousel-brag">
                    <h3>Fans have rated bandplace the</h3> 
                    <h3 className="bold">#1 place</h3><h3>for</h3><h3 className="bold">bands</h3><h3>this year</h3>
                </div>
                <div className="sales-carousel-container">
                    <h4>AVAILABLE TO STREAM RIGHT NOW:</h4>
                    <div className="sales-carousel"> 
                        {this.fillCarousel()}
                    </div>
                </div>
            </div>
        )
    }
}


export default Carousel;