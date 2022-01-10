import React from "react";


class PageColorsEditor extends React.Component {
    constructor(props){
        super(props);
        this.defaultState = {
            body: props.colorsArr[0],
            text: props.colorsArr[1],
            secondaryText: props.colorsArr[2],
            link: props.colorsArr[3],
            background: props.colorsArr[4],
            navBar: props.colorsArr[5]
        }
        this.state = this.defaultState;
        this.submitColors = this.submitColors.bind(this);
        this.cancelChanges = this.cancelChanges.bind(this);
        this.restoreDefaults = this.restoreDefaults.bind(this);
    }

    submitColors(e){
        e.preventDefault();
        const colorString = this.state.body
                                .concat(('/'), this.state.text)
                                    .concat(('/'), this.state.secondaryText)
                                        .concat(('/'), this.state.link)
                                            .concat(('/'), this.state.background)
                                                .concat(('/'), this.state.navBar);
        this.props.updateColors({id: this.props.currentUserId, color_profile: colorString}).then(() => this.props.closeModal());
    }

    updateColors(category){
        return e => this.setState({[category]: e.target.value});
    }

    restoreDefaults(){
        this.setState({
            body: '#ffffff',
            text: '#363636',
            secondaryText: '#888888',
            link: '#0687f5',
            background: '#f8f8f8',
            navBar: '#f2f2f2'
        })
    }

    cancelChanges(e){
        e.preventDefault();
        this.setState(this.defaultState);
        this.props.closeModal();
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
                                <input type="color" name="body" value={this.state.body} onChange={this.updateColors('body')}/> 
                            </label>
                            <label>Text Color:
                                <input type="color" name="text" value={this.state.text} onChange={this.updateColors('text')}/>
                            </label>
                            <label>Secondary Text Color:
                                <input type="color" name="alt-text" value={this.state.secondaryText} onChange={this.updateColors('secondaryText')}/>
                            </label>
                            <label>Link Color:
                                <input type="color" name="link" value={this.state.link} onChange={this.updateColors('link')}/>
                            </label>
                            <label>Background Color:
                                <input type="color" name="background" value={this.state.background} onChange={this.updateColors('background')} />
                            </label>
                            <label>Navigation Bar Color:
                                <input type="color" name="nav-bar" value={this.state.navBar} onChange={this.updateColors('navBar')}/>
                            </label>
                            <span onClick={this.restoreDefaults}> restore defaults </span>
                        </div>
                        <div className="colors-editor buttons">
                            <input type="submit" value="OK" />
                            <button onClick={this.cancelChanges}>
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