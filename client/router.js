// Simple SPA Router for Nothing But Net
(function() {
    'use strict';

    // Define routes mapping paths to HTML files
    const routes = {
        '/': 'index.html',
        '/index.html': 'index.html',
        '/profile.html': 'profile.html',
        '/profile': 'profile.html',
        '/settings.html': 'settings.html',
        '/settings': 'settings.html',
        '/statistics.html': 'statistics.html',
        '/statistics': 'statistics.html',
        '/login.html': 'login.html',
        '/login': 'login.html',
        '/register.html': 'register.html',
        '/register': 'register.html'
    };

    // Content container where pages will be loaded
    let contentContainer = null;

    // Load page content
    async function loadPage(path) {
        // Normalize path
        let normalizedPath = path;
        if (!normalizedPath.startsWith('/')) {
            normalizedPath = '/' + normalizedPath;
        }

        // Get the HTML file for this route
        const htmlFile = routes[normalizedPath] || routes[path] || 'index.html';
        
        try {
            const response = await fetch(htmlFile);
            if (!response.ok) {
                throw new Error(`Failed to load ${htmlFile}`);
            }
            
            const html = await response.text();
            
            // Parse the HTML to extract body content
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            
            // Replace the entire body content
            document.body.innerHTML = doc.body.innerHTML;
            
            // Re-execute scripts in the new content
            const scripts = doc.body.querySelectorAll('script');
            scripts.forEach(oldScript => {
                const newScript = document.createElement('script');
                Array.from(oldScript.attributes).forEach(attr => {
                    newScript.setAttribute(attr.name, attr.value);
                });
                newScript.textContent = oldScript.textContent;
                document.body.appendChild(newScript);
            });

            // Update page title
            if (doc.title) {
                document.title = doc.title;
            }

            // Initialize navigation after page load
            initializeNavigation();

        } catch (error) {
            console.error('Error loading page:', error);
            // Fallback to regular navigation if loading fails
            window.location.href = htmlFile;
        }
    }

    // Navigate to a new page
    function navigate(path, pushState = true) {
        if (pushState) {
            history.pushState({ path }, '', path);
        }
        loadPage(path);
    }

    // Initialize navigation event handlers
    function initializeNavigation() {
        // Handle all anchor clicks
        document.querySelectorAll('a').forEach(link => {
            const href = link.getAttribute('href');
            
            // Only handle internal navigation (not external links or #)
            if (href && 
                !href.startsWith('http') && 
                !href.startsWith('//') && 
                !href.startsWith('#') &&
                !href.startsWith('mailto:')) {
                
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    navigate(href);
                });
            }
        });
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
        const path = e.state?.path || window.location.pathname;
        loadPage(path);
    });

    // Initialize router on page load
    window.addEventListener('DOMContentLoaded', () => {
        // Set initial state
        const currentPath = window.location.pathname;
        history.replaceState({ path: currentPath }, '', currentPath);
        
        // If we're on a route that's not the default, load that page
        if (currentPath !== '/' && currentPath !== '/index.html') {
            loadPage(currentPath);
        } else {
            // Initialize navigation for current page
            initializeNavigation();
        }
    });

    // Export navigate function for programmatic navigation
    window.navigateTo = navigate;

})();
