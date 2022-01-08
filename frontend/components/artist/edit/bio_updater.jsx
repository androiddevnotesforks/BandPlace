import React from "react";

class BioUpdater extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.artist.id,
            bio: this.props.artist.bio
        }
        this.updateField = this.updateField.bind(this);
        this.processForm = this.processForm.bind(this);
    }

    processForm(e){
        e.preventDefault();
        this.props.updateBio(this.state);
    }

    updateField(e){
        this.setState({bio: e.target.value});
    }

    render() {
        if (!this.props.isOwner) {
            return null;
        } else {
            return (
                <div className="bio-updater box">
                    <form className="bio-updater form">
                        <input type="textbox" value={this.state.bio} onChange={this.updateField}/>
                        <button onClick={this.processForm}>
                            Save
                        </button>
                        {/* <button>
                            <Link to={`/storefront/${this.props.userData.id}`}>
                                Cancel
                            </Link>
                        </button>  */}
                    </form>
                </div>
            )
        }
    }
}

export default BioUpdater;