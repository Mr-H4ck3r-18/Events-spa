import { redirect } from "react-router-dom";

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();

    const duration = expirationDate.getTime() - now.getTime()
    return duration
}

export function getAuth() {
    const token = localStorage.getItem('token')
    const tokenDuration = getTokenDuration()
    if (!token) {
        return null
    }
    if (tokenDuration < 0) {
        return 'EXPIRED';
    }

    return token
}

export function tokenLoader() {
    return getAuth()
}

export function checkAuthLoader() {
    // this function will be added in the next lecture
    // make sure it looks like this in the end
    const token = getAuth();

    if (!token) {
        return redirect('/auth');
    }

    return null; // this is missing in the next lecture video and should be added by you
}