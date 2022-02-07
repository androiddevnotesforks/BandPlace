// POST

const postRelease = releaseFormData => (
    $.ajax({
        method: 'POST',
        url: '/api/releases',
        data: releaseFormData,
        contentType: false,
        processData: false
    })
);
const postSong = songFormData => (
    $.ajax({
        method: 'POST',
        url: '/api/songs',
        data: songFormData,
        contentType: false,
        processData: false
    })
);

// GET
const getReleasesByArtist = artistId => (
    $.ajax({
        method: 'GET',
        url: '/api/releases',
        data: {artist_id: artistId}
    })
);

const getRelease = releaseId => (
    $.ajax({
        method: 'GET',
        url: `/api/releases/${releaseId}`
    })
);


const getSongsByRelease = releaseId => (
    $.ajax({
        method: 'GET',
        url: '/api/songs',
        data: {release_id: releaseId}
    })
);

const getSong = songId => (
    $.ajax({
        method: 'GET',
        url: `/api/songs/${songId}`
    })
);

// EDIT
const patchRelease = (releaseId, releaseFormData) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/releases/${releaseId}`,
        data: releaseFormData,
        contentType: false,
        processData: false
    })
);
const patchSong = (songId, songFormData) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/songs/${songId}`,
        data: songFormData,
        contentType: false,
        processData: false
    })
);

// DESTROY

const deleteRelease = releaseId => (
    $.ajax({
        method: 'DESTROY',
        url: `/api/releases/${releaseId}`
    })
);
const deleteSong = songId => (
    $.ajax({
        method: 'DESTROY',
        url: `/api/songs/${songId}`
    })
);

export { postRelease, getReleasesByArtist, getRelease, 
    postSong, getSongsByRelease, getSong,
    patchRelease, patchSong, deleteRelease, deleteSong}