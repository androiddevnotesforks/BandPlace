import React from "react";

class DiscoverBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            genre: 'all',
            subgenre: ''
        }
        this.genreList = this.genreList.bind(this);
        this.setFilters = this.setFilters.bind(this);
    }

    setFilters(type){
        return (e) => {
            e.stopPropagation();
            if (e.target.localName === 'li') {
                this.setState({[type]: e.target.innerHTML});
            }
        }
    }

    componentDidUpdate(){
        const gen = document.getElementById(this.state.genre);
        const subGen = document.getElementById(this.state.subgenre);
        const allGens = Array.from(document.querySelectorAll('ul.genre-list li'));
        allGens.forEach (gen => gen.setAttribute('class', 'genre-unselected'));
        if (subGen) {
            subGen.setAttribute('class', 'genre-selected');
        }
        if (gen) {
            gen.setAttribute('class', 'genre-selected');
        }
    }

    genreList(genres){
        if (genres) {
            return (
                <ul className="genre-list">
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
                    <div className="discover-maingenre" onClick={this.setFilters('genre')} id={`filter-${this.state.genre}`}>
                        {this.genreList(this.props.genres)}
                        <div className="discover-subgenre" onClick={this.setFilters('subgenre')}>
                            {this.genreList(this.props.subgenres[this.state.genre])}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default DiscoverBar;