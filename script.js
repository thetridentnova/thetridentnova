// Script to Add Functionality and Interactivity

// Smooth Scrolling for Navigation
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Toggle Login/Sign Up Forms
const toggleLogin = document.getElementById('toggle-login');
const toggleSignup = document.getElementById('toggle-signup');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const formWrapper = document.querySelector('.form-wrapper');

// Event Listeners
toggleLogin.addEventListener('click', () => {
    if (!loginForm.classList.contains('hidden')) return;

    toggleLogin.classList.add('active');
    toggleSignup.classList.remove('active');

    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
});

toggleSignup.addEventListener('click', () => {
    if (!signupForm.classList.contains('hidden')) return;

    toggleSignup.classList.add('active');
    toggleLogin.classList.remove('active');

    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
});



// Booking Package Confirmation
document.querySelectorAll('.package-item button').forEach(button => {
    button.addEventListener('click', () => {
        const packageName = button.parentElement.querySelector('h3').textContent;
        alert(`You have booked the ${packageName}. Cashback will be credited soon!`);
    });
});

// Social Media Interaction
document.querySelectorAll('.social-media-icons a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.opacity = "0.8";
    });
    link.addEventListener('mouseout', () => {
        link.style.opacity = "1";
    });
});

// Dynamic Recommendations Highlight
const recommendations = document.querySelectorAll('.place-item');
recommendations.forEach((item, index) => {
    setTimeout(() => {
        item.classList.add('highlight');
        setTimeout(() => item.classList.remove('highlight'), 1500);
    }, index * 2000); // Sequential highlight
});

// Highlight Top 5 Most Visited Places
const topPlaces = document.querySelector('.top-places ol');
topPlaces.addEventListener('mouseover', () => {
    topPlaces.style.backgroundColor = '#f0f8ff';
});
topPlaces.addEventListener('mouseout', () => {
    topPlaces.style.backgroundColor = 'transparent';
});

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '⬆️';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.backgroundColor = '#ff6f61';
scrollToTopButton.style.color = '#fff';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.padding = '10px';
scrollToTopButton.style.borderRadius = '50%';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.display = 'none';
document.body.appendChild(scrollToTopButton);

// Show/Hide Scroll to Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to Top Functionality
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
