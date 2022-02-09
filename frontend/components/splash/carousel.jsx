import React from "react";
import FlipMove from "react-flip-move";
// import { TransitionGroup } from "react-transition-group";
// import AliceCarousel from "react-alice-carousel";
import CarouselListItem from "./carousel_list_item";

class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            randRecs: [],
            recTrack: 0
        }
        this.fillCatalog = this.fillCatalog.bind(this);
        this.getRandomRec = this.getRandomRec.bind(this);
    }

    componentDidMount(){
        this.fillCatalog();
    }

    componentDidUpdate(prevProps){
        if (prevProps.record !== this.props.record) {
            const newRecord = this.props.record;
            newRecord.key = this.state.recTrack;
            const newCatalog = this.state.randRecs.slice();
            newCatalog.push(newRecord);
            if (newCatalog.length > 5) newCatalog.shift();
            this.setState({
                randRecs: newCatalog,
                recTrack: (this.state.recTrack + 1)
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
                this.state.randRecs.map ((record, idx) => (
                         <CarouselListItem record={record} idx={idx} key={record.key} />
                ))
        )
    }

    pauseCarousel(){

    }

    render() {
        // const bold = () => (<h3 className="bold-insert">number one</h3>);
        const carouselItems = this.fillCarousel();
        return (
            <div className="sales-carousel-bar">
                <div className="carousel-brag">
                    <h3>Fans have rated bandplace the</h3> 
                    <h3 className="bold">#1 place</h3><h3>for</h3><h3 className="bold">bands</h3><h3>this year</h3>
                </div>
                <div className="sales-carousel-container">
                    <h4 onClick={this.getRandomRec}>AVAILABLE TO STREAM RIGHT NOW:</h4>
                    <FlipMove className="carousel-list" typeName="ul">
                        {carouselItems}
                    </FlipMove>
                </div>
            </div>
        )
    }
}


export default Carousel;