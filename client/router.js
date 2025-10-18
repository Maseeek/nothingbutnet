// Simple SPA Router for Nothing But Net
// This router intercepts link clicks and uses the History API for navigation
(function() {
    'use strict';

    // Initialize navigation event handlers
    function initializeNavigation() {
        // Handle all anchor clicks
        document.addEventListener('click', (e) => {
            // Find the clicked anchor element (could be child of anchor)
            const anchor = e.target.closest('a');
            
            if (!anchor) return;
            
            const href = anchor.getAttribute('href');
            
            // Only handle internal navigation (not external links, # anchors, or mailto)
            if (!href || 
                href.startsWith('http') || 
                href.startsWith('//') || 
                href.startsWith('#') ||
                href.startsWith('mailto:')) {
                return;
            }
            
            // Prevent default navigation
            e.preventDefault();
            
            // Navigate using History API
            const url = href.startsWith('/') ? href : '/' + href.replace('.html', '');
            navigate(url);
        }, true); // Use capture phase to catch all clicks
    }

    // Navigate to a new URL
    function navigate(url) {
        // Update browser history
        history.pushState({ url }, '', url);
        
        // Load the new page
        loadPage(url);
    }

    // Load page content
    function loadPage(url) {
        // Normalize URL to map to HTML file
        let htmlFile = url;
        
        if (url === '/' || url === '') {
            htmlFile = '/index.html';
        } else if (!url.endsWith('.html')) {
            // Remove leading slash and add .html extension
            htmlFile = url.replace(/^\//, '') + '.html';
        }
        
        // Fetch and load the page
        fetch(htmlFile)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${htmlFile}`);
                }
                return response.text();
            })
            .then(html => {
                // Parse the HTML
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                
                // Replace body content
                document.body.innerHTML = doc.body.innerHTML;
                
                // Update page title
                if (doc.title) {
                    document.title = doc.title;
                }
                
                // Re-execute inline scripts
                const scripts = document.body.querySelectorAll('script');
                scripts.forEach(oldScript => {
                    if (!oldScript.src) {
                        // Only re-execute inline scripts
                        const newScript = document.createElement('script');
                        newScript.textContent = oldScript.textContent;
                        oldScript.parentNode.replaceChild(newScript, oldScript);
                    }
                });
                
                // Reinitialize navigation
                initializeNavigation();
                
                // Trigger DOMContentLoaded event for the new content
                const event = new Event('DOMContentLoaded');
                document.dispatchEvent(event);
            })
            .catch(error => {
                console.error('Error loading page:', error);
                // On error, fall back to full page load
                window.location.href = htmlFile;
            });
    }

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
        const url = e.state?.url || window.location.pathname;
        loadPage(url);
    });

    // Initialize on page load
    window.addEventListener('DOMContentLoaded', () => {
        // Set initial history state
        const currentPath = window.location.pathname;
        history.replaceState({ url: currentPath }, '', currentPath);
        
        // Initialize navigation handlers
        initializeNavigation();
        
        // If we're on a non-standard route, ensure content is loaded
        if (currentPath !== '/' && currentPath !== '/index.html' && !currentPath.endsWith('.html')) {
            loadPage(currentPath);
        }
    });

    // Export navigate function for programmatic navigation
    window.navigateTo = navigate;

})();
