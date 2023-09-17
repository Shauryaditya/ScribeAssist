'use client'
const getToken = () => {
    const token = sessionStorage.getItem("access_token")
    return token
}
export default getToken;