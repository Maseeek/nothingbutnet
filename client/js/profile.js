import { isLoggedIn, getCurrentUser, logout, updateAuthUI } from '../auth.js';
import {displayFGResults} from '../index.js';

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
            document.getElementById('welcome').innerHTML = "Welcome, " + user.username;
            // Fetch user data from the server
            // const data = getdata  // going to make a collection which has all user shots and can get it from there
            // displayFGResults(data);
        }
    } catch {
        console.error("Error fetching user data: ", error);
        document.getElementById('welcome').innerHTML = "Welcome Guest";
    }
});
    // Display user data




