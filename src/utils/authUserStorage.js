export default function getAuthUser() {
    return localStorage.getItem('authUser');
}

export default function setAuthser(authUser) {
    localStorage.setItem('authUser', token);
}

export default function removeAuthUser() {
    localStorage.removeItem('authUser');
}

