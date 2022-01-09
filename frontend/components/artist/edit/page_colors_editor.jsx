import React from "react";


class PageColorsEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: props.colorsArr[0],
            text: props.colorsArr[1],
            secondaryText: props.colorsArr[2],
            link: props.colorsArr[3],
            background: props.colorsArr[4],
            navBar: props.colorsArr[5]
        }
        this.submitColors = this.submitColors.bind(this);
    }

    submitColors(e){
        e.preventDefault();
        const colorString = this.state.body
                                .concat(('/'), this.state.text)
                                    .concat(('/'), this.state.secondaryText)
                                        .concat(('/'), this.state.link)
                                            .concat(('/'), this.state.background)
                                                .concat(('/'), this.state.navBar);
        this.props.updateColors({id: this.props.currentUserId, color_profile: colorString});
    }

    updateColors(category){
        return e => this.setState({[category]: e.target.value});
    }

    render(){
        return (
            <div className="colors-editor">
                <div className="modal-title">
                    <h3>Edit Design</h3>
                    <span>X</span>
                </div>
                <div className="colors-editor box">
                    <form onSubmit={this.submitColors}>
                        <div className="color-pickers">
                            <label>Body Color:
                                <input type="color" name="body" /> 
                            </label>
                            <label>Text Color:
                                <input type="color" name="text" />
                            </label>
                            <label>Secondary Text Color:
                                <input type="color" name="alt-text" />
                            </label>
                            <label>Link Color:
                                <input type="color" name="link" />
                            </label>
                            <label>Background Color:
                                <input type="color" name="background" value={this.state.background} onChange={this.updateColors('background')} />
                            </label>
                            <label>Navigation Bar Color:
                                <input type="color" name="nav-bar" />
                            </label>
                        </div>
                        <div className="colors-editor buttons">
                            <input type="submit" value="OK" />
                            <button>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default PageColorsEditor;