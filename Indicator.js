const navLinks = document.querySelectorAll('.nav-link');
const indicator = document.querySelector('.indicator');

// Function to set the position of the indicator
function setIndicatorPosition(target) {
    const link = target;
    const linkRect = link.getBoundingClientRect();
    const navRect = document.querySelector('nav').getBoundingClientRect();

    indicator.style.width = `${linkRect.width}px`;
    indicator.style.left = `${linkRect.left - navRect.left}px`;
}

// Automatically set the indicator position based on the current URL
function setIndicatorToActiveLink() {
    const currentPath = window.location.pathname; // Get current URL path
    let activeLink = navLinks[0]; // Default to the first link

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.includes(linkPath)) {
            activeLink = link;
        }
    });

    // Set the position of the indicator to the active link
    setIndicatorPosition(activeLink);
}

// Set the initial position of the indicator
setIndicatorToActiveLink();

// Move the indicator when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Let the link behave normally (removing preventDefault)
        setIndicatorPosition(e.currentTarget); // Move indicator to the clicked link
    });
});
