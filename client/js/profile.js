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
            document.getElementById('welcome').innerHTML = "Welcome, " + user.username;
            const ver = document.getElementById('email-verification');
            const verButton = document.getElementById('verify-button');
            if(user.verified === false) {
                console.error("Email not verified");
                ver.innerHTML = "Please verify your email address.";
                ver.style.color = "#ffc300";
                verButton.style.backgroundColor = "#ffc300";



            }
            else{
                console.log("Email verified: " + user.verified);
                ver.innerHTML = "Email verified.";
                ver.style.color = "#55a630";
                verButton.remove();
            }
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




