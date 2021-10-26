export const http = async (dataUser, endpoint) => {
    const url = `https://lit-stream-68081.herokuapp.com/${endpoint}`
    const data = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        method: "POST",
        body: JSON.stringify(dataUser)
    }
    const res = await fetch(url, data)
    return await res.json()
}

export const getToken = () => {
    return JSON.parse(localStorage.getItem('user')) || false
}
export const setToken = (user) => {
    delete user.password
    localStorage.setItem('user',JSON.stringify(user))
}
export const logout = () => {
    localStorage.removeItem('user')
}