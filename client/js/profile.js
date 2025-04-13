import { isLoggedIn, getCurrentUser, logout, updateAuthUI } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize auth UI
    updateAuthUI();

    // Redirect if not logged in
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }

    // Display user data
    const user = getCurrentUser();
    if (user) {
        document.getElementById('username-display').textContent = user.username;
        document.getElementById('join-date').textContent = new Date().toLocaleDateString();

        // Show profile content
        document.querySelector('.profile-content').classList.remove('hidden');
    }

    // Dropdown menu toggle (using your existing nav)
    const profileButton = document.getElementById('profile-button');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (profileButton && dropdownMenu) {
        profileButton.addEventListener('click', () => {
            dropdownMenu.classList.toggle('hidden');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#profile-button') && !e.target.closest('#dropdown-menu')) {
            dropdownMenu?.classList.add('hidden');
        }
    });
});