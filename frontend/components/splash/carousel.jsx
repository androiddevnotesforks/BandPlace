import React from "react";
import CarouselListItem from "./carousel_list_item";

class Carousel extends React.Component {
    constructor(props){
        super(props);
        const randRecs = this.shuffleRecords();
        this.state = {
            randRecs
        }
        this.fillCarousel = this.fillCarousel.bind(this);
        this.rollCarousel = this.rollCarousel.bind(this);
    }

    shuffleRecords() {
        let i = this.props.records.length;
        let recsArr = [].concat(this.props.records);
        const randRecs = [];
        for (i; i > 0; i--) {
            const randNum = Math.floor(Math.random() * i);
            randRecs.push(recsArr[randNum]);
            recsArr = recsArr.slice(0, randNum).concat(recsArr.slice(randNum + 1));
        }
        return randRecs;
    }

    componentDidMount(){
        this.intervalId = setInterval(this.rollCarousel, 2000);
    }

    componentDidUpdate(){
        clearInterval(this.intervalId);
        this.intervalId = setInterval(this.rollCarousel, 2000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
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

    rollCarousel(){
        const nextRecs = this.state.randRecs.slice(1).concat(this.state.randRecs.shift());
        this.setState({randRecs: nextRecs});
    }

    pauseCarousel(){

    }

    render() {
        // const bold = () => (<h3 className="bold-insert">number one</h3>);
        return (
            <div className="sales-carousel-bar">
                <h3>Fans have rated bandplace the #1 place for bands this year</h3>
                <div className="sales-carousel-container">
                    <h4>SELLING RIGHT NOW:</h4>
                    <div className="sales-carousel"> 
                        {this.fillCarousel()}
                    </div>
                </div>
            </div>
        )
    }
}


export default Carousel;