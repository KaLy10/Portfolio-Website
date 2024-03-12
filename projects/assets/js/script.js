// HEADER
const toggleButton = document.getElementById('nav-toggle');
const navigationMenu = document.querySelector('.navigation-menu-phone');

toggleButton.addEventListener('click', () => {
    navigationMenu.style.transform = (navigationMenu.style.transform === 'translateX(100%)') ? 'translateX(0%)' : 'translateX(100%)';
});

// contain divs
const homecontain = document.querySelector('.home-contain');
const aboutcontain = document.querySelector('.about-contain');
const experiencescontain = document.querySelector('.experiences-contain');
const contactcontain = document.querySelector('.contact-contain');
const helpcontain = document.querySelector('.help-contain');

// Buttons
const homeButton = document.getElementById("homebtnID");
const aboutButton = document.getElementById("aboutbtnID");
const experiencesButton = document.getElementById("experiencesbtnID");
const contactButton = document.getElementById("contactbtnID");
const helpButton = document.getElementById("helpbtnID");

// Functions to show divs
function showHome() {
    hideAllcontaindivs();
    homecontain.style.display = 'flex';
}
function showAbout() {
    hideAllcontaindivs();
    aboutcontain.style.display = 'flex';
}
function showExperiences() {
    hideAllcontaindivs();
    experiencescontain.style.display = 'flex';
}
function showContact() {
    hideAllcontaindivs();
    contactcontain.style.display = 'flex';
}
function showHelp() {
    hideAllcontaindivs();
    helpcontain.style.display = 'flex';
}

// Function to hide all divs
function hideAllcontaindivs() {
    homecontain.style.display = 'none';
    aboutcontain.style.display = 'none';
    experiencescontain.style.display = 'none';
    contactcontain.style.display = 'none';
    helpcontain.style.display = 'none';
}

// Event listeners for buttons
homeButton.addEventListener("click", showHome);
aboutButton.addEventListener("click", showAbout);
experiencesButton.addEventListener("click", showExperiences);
contactButton.addEventListener("click", showContact);
helpButton.addEventListener("click", showHelp);

// phone Buttons
document.querySelectorAll('.phone-about-button').forEach(button => {
    button.addEventListener('click', showAbout);
});

document.querySelectorAll('.phone-experiences-button').forEach(button => {
    button.addEventListener('click', showExperiences);
});

document.querySelectorAll('.phone-contact-button').forEach(button => {
    button.addEventListener('click', showContact);
});

document.querySelectorAll('.phone-help-button').forEach(button => {
    button.addEventListener('click', showHelp);
});

// Must-action
let hasRun = false;

function runOnce() {
    if (!hasRun) {
        homeButton.classList.add('pressed');
        hasRun = true;
    }
}
// Call the function when the page loads
window.onload = runOnce;

// Animation
const alwaysContainer = document.querySelector('.always-container');

homeButton.addEventListener('click', function() {
    alwaysContainer.classList.toggle('open');
});
