const postRelease = release => (
    $.ajax({
        method: 'POST',
        url: '/api/releases',
        data: { release }
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

const postSong = song => (
    $.ajax({
        method: 'POST',
        url: '/api/songs',
        data: { song }
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