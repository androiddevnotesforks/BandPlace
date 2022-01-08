import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import EditProfile from "./edit_profile";
// import EditAlbum from "./edit_media";
import ArtistPageNavContainer from "../artist_page_nav_container";

class EditForm extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        if (!this.props.loggedInAsOwner) {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <div className="profile-main">
                < ArtistPageNavContainer />
                <div className="profile-tryptich"> 
                    <div className="profile-displaywindow edit">
                        <div className="edit-display">
                            <Switch>
                                <Route path='/edit/profile/:id' render={() => <EditProfile userData={this.props.currentUser} processForm={this.props.updateUser} backToStore={this.props.goToStorefront}/>} />
                                <Route path='/edit/album/:id' render={() => <EditMedia type={'album'} />} />
                                <Route path='/edit/track/:id' render={() => <EditMedia type={'track'} />} />
                            </Switch>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default EditForm;