export const getUserInfo = (userId) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
);
