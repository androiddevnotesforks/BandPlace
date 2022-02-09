const searchUsers = query => (
    $.ajax({
        method: 'GET',
        url: '/api/users/search',
        data: {q: query}
    })   
)
const searchReleases = query => (
    $.ajax({
        method: 'GET',
        url: '/api/releases/search',
        data: {q: query}
    })   
)
const searchTracks = query => (
    $.ajax({
        method: 'GET',
        url: '/api/songs/search',
        data: {q: query}
    })   
)

export { searchUsers, searchReleases, searchTracks }