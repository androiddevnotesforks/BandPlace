import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import EditProfile from "./edit_profile";
import EditMediaContainer from "./edit_media_container";
import ArtistPageNavContainer from "../artist_page_nav_container";
import { StorefrontFooter } from "../storefront_footer";

class EditForm extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="profile-main">
                < ArtistPageNavContainer />
                <div className="profile-tryptich"> 
                    <div className="profile-displaywindow edit">
                        <div className="edit-display">
                            <Switch>
                                <Route path='/edit/profile/:id' render={() => <EditProfile userData={this.props.currentUser} processForm={this.props.updateUser} backToStore={this.props.goToStorefront}/>} />
                                <Route path='/edit/album/:albumId' render={() => <EditMediaContainer type={'album'} />} />
                                <Route path='/edit/track/:trackId' render={() => <EditMediaContainer type={'track'} />} />
                            </Switch>
                        </div>
                    </div>
                </div>
                < StorefrontFooter />
            </div>
        )
    }
}

export default EditForm;