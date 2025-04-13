const API_BASE = 'http://localhost:3000';

async function login(username, password) {
    try {
        const response = await fetch(`${API_BASE}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
            credentials: 'include' // Needed for cookies/sessions
        });

        if (!response.ok) throw new Error('Login failed');

        const data = await response.json();
        localStorage.setItem('token', data.token);
        document.getElementById('outcome').textContent = 'Login successful! Redirecting...';
        $('#outcome').css('color', 'green');
        window.location.href = 'profile.html'; // Redirect to profile page
    } catch (error) {
        console.error('Login error:', error);
        document.getElementById('outcome').textContent = 'Login failed. Please try again.';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        await login(username, password); // Call the login function
    });
});