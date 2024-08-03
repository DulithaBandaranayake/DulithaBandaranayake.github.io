document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
    }
});

document.addEventListener('contextmenu', function(event) {
      event.preventDefault();
  });

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to hide the loading screen
function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
  }
}

// Hide the loading screen after the page loads
window.addEventListener('load', function() {
  hideLoadingScreen();
});

// Optional: Hide the loading screen after a specific delay (e.g., 3 seconds)
setTimeout(hideLoadingScreen, 3000); // Adjust the delay as needed