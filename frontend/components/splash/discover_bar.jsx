import React from "react";

class DiscoverBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            genre: '',
            subgenre: ''
        }
        this.genreList = this.genreList.bind(this);
        this.setFilters = this.setFilters.bind(this);
    }

    setFilters(type){
        return (e) => {
            this.setState({[type]: e.target.innerHTML});
        }
    }

    componentDidUpdate(){
        debugger
        const gen = document.getElementById(this.state.genre);
        const subGen = document.getElementById(this.state.subgenre);
        if (subGen) {
            subGen.setAttribute('className', 'genre-selected');
        }
        gen.setAttribute('className', 'genre-selected');
    }

    genreList(genres){
        if (genres) {
            return (
                <ul>
                    {genres.map ((genre, idx) => (
                        <li key={idx} className="genre-unselected" id={genre}>
                            {genre}
                        </li>
                    ))}
                </ul>
            )
        }
    }

    render() {
        return (
            <div className="discover-bar-container">
                <div className="discover-info">
                    <h3>Discover:</h3>
                </div>
                <div className="discover-filters">  
                    <div className="discover-maingenre" onClick={this.setFilters('genre')} >
                        {this.genreList(this.props.genres)}
                    </div>
                    <div className="discover-subgenre" onClick={this.setFilters('subgenre')}>
                        {this.genreList(this.props.subgenres[this.state.genre])}
                    </div>
                </div>
            </div>
        )
    }
}


export default DiscoverBar;