import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./root";
import { login, logout, signup } from "./actions/session_actions";
import { createRelease, fetchArtistReleases, fetchRelease, updateRelease, destroyRelease } from "./actions/release_actions";
import { createSong, fetchReleaseSongs, fetchSong, updateSong, destroySong } from "./actions/song_actions";
import { getRelease, getReleasesByArtist } from "./util/content_api_util";
import { patchUser } from "./util/user_api_util";



document.addEventListener("DOMContentLoaded", () => {

    // -----------------------FOR TESTING ONLY, REMOVE AFTER TESTING------------------------------------------------------------
        [window.login, window.logout, window.signup] = [login, logout, signup];
        [window.createRelease, window.fetchArtistReleases, window.fetchRelease, window.getRelease, window.getReleasesByArtist, window.updateRelease, window.destroyRelease] = [createRelease, fetchArtistReleases, fetchRelease, getRelease, getReleasesByArtist, updateRelease, destroyRelease];
        [window.createSong, window.fetchReleaseSongs, window.fetchSong, window.updateSong, window.destroySong] = [createSong, fetchReleaseSongs, fetchSong, updateSong, destroySong];
        [window.patchUser, window.updateColors] = [patchUser];
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