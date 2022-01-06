import React from "react";
import { Route, Switch } from "react-router-dom";
import ArtistPageNav from "../artist_page_nav";
import EditProfile from "./edit_profile";
import EditAlbum from "./edit_album";
import EditTrack from "./edit_track";

class EditForm extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="profile-main">
                < ArtistPageNav />
                <div className="profile-tryptich"> 
                    <div className="profile-displaywindow edit">
                        <div className="edit-display">
                            <Switch>
                                <Route path='/edit/profile/:id' component={EditProfile} />
                                <Route path='/edit/album/:id' component={EditAlbum} />
                                <Route path='/edit/track/:id' component={EditTrack} />
                            </Switch>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default EditForm;