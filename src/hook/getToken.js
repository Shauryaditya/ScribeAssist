'use client'
const getToken = () => {
    const token = localStorage.getItem("access_token")
    return token
}
export default getToken;