import { postRelease, getReleasesByArtist, getRelease, patchRelease, deleteRelease } from "../util/content_api_util";

export const RECEIVE_RELEASE = "RECEIVE_RELEASE";
export const RECEIVE_ARTIST_RELEASES = "RECEIVE_ARTIST_RELEASES";
export const DELETE_RELEASE = "DELETE_RELEASE";
export const RECEIVE_RELEASE_ERRORS = "RECEIVE_RELEASE_ERRORS";

const receiveRelease = (release) => ({
    type: RECEIVE_RELEASE,
    release
})

const receiveArtistReleases = (releases) => ({
    type: RECEIVE_ARTIST_RELEASES,
    releases
})

const removeRelease = (release) => ({
    type: DELETE_RELEASE,
    release
}) 

const receiveErrors = (errorsArr) => ({
    type: RECEIVE_RELEASE_ERRORS,
    errors: errorsArr
})

const createRelease = release => dispatch => {
    return postRelease(release).then(release => dispatch(receiveRelease(release)), errors => dispatch(receiveErrors(errors.responseJSON)))
}

const fetchArtistReleases = artistId => dispatch => (
    getReleasesByArtist(artistId).then(releases => dispatch(receiveArtistReleases(releases)), errors => dispatch(receiveErrors(errors.responseJSON)))
);

const fetchRelease = releaseId => dispatch => (
    getRelease(releaseId).then(release => dispatch(receiveRelease(release)), error => dispatch(receiveErrors(error.statusText)))
);

const updateRelease = (releaseId, releaseData) => dispatch => (
    patchRelease(releaseId, releaseData).then(release => dispatch(receiveRelease(release)), errors => dispatch(receiveErrors(errors.responseJSON)))
)

const destroyRelease = releaseId => dispatch => (
    deleteRelease(releaseId).then(release => dispatch(removeRelease(release)), errors => dispatch(receiveErrors(errors.responseJSON)))
)

export { createRelease, fetchArtistReleases, fetchRelease, updateRelease, destroyRelease };