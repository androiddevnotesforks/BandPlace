const signupAjax = (userData) => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: userData
    })
)

const loginAjax = (userData) => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: userData
    })
)

const logoutAjax = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
)

export { signupAjax, loginAjax, logoutAjax }