'use client'
const getToken = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const token = window.sessionStorage.getItem("access_token");
        return token;
    }
    return null; // Return a default value or handle the absence of localStorage
};

export default getToken;
