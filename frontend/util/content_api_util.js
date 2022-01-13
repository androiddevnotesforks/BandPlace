const postRelease = releaseFormData => (
    $.ajax({
        method: 'POST',
        url: '/api/releases',
        data: releaseFormData,
        contentType: false,
        processData: false
    })
);

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

const postSong = songFormData => (
    $.ajax({
        method: 'POST',
        url: '/api/songs',
        data: songFormData,
        contentType: false,
        processData: false
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

export { postRelease, getReleasesByArtist, getRelease, postSong, getSongsByRelease, getSong }