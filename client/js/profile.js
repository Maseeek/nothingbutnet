import { isLoggedIn, getCurrentUser, logout, updateAuthUI } from '../auth.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize auth UI
    updateAuthUI();

    // Redirect if not logged in
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }
    try {
        if (isLoggedIn()) {
            const user = getCurrentUser();
            const username = user.username;
            document.getElementById('welcome').innerHTML = "Welcome " + user.username;
        }
    } catch {
        console.error("Error fetching user data: ", error);
        document.getElementById('welcome').innerHTML = "Welcome Guest";
    }
});
    // Display user data




