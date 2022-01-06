export const getArtist = (artistId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${artistId}`
    })
);
