import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./root";
import { login, logout, signup } from "./actions/session_actions";
import { createRelease, fetchArtistReleases, fetchRelease } from "./actions/release_actions";
import { createSong, fetchReleaseSongs, fetchSong } from "./actions/song_actions";
import { getRelease, getReleasesByArtist } from "./util/content_api_util";
import { patchUser, updateColors } from "./util/user_api_util";



document.addEventListener("DOMContentLoaded", () => {

    // -----------------------FOR TESTING ONLY, REMOVE AFTER TESTING------------------------------------------------------------
        [window.login, window.logout, window.signup] = [login, logout, signup];
        [window.createRelease, window.fetchArtistReleases, window.fetchRelease, window.getRelease, window.getReleasesByArtist] = [createRelease, fetchArtistReleases, fetchRelease, getRelease, getReleasesByArtist];
        [window.createSong, window.fetchReleaseSongs, window.fetchSong] = [createSong, fetchReleaseSongs, fetchSong];
        [window.patchUser, window.updateColors] = [patchUser, updateColors];
    // -------------------------------------------------------------------------------------------------------------------------
        
    const rootEl = document.getElementById('root');

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id, currentUserType: window.currentUser.is_artist }
        };
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }
    
    // -----------------------FOR TESTING ONLY, REMOVE AFTER TESTING------------------------------------------------------------
        window.getState = store.getState;
        window.dispatch = store.dispatch;
    // --------------------------------------------------------------------------------------------------------------------------  

    ReactDOM.render(<Root store={store} />, rootEl);
})