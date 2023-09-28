const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // Store the deferred prompt for later use

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser installation prompt
  event.preventDefault();
  
  // Store the event for later use
  deferredPrompt = event;

  // Show the custom installation button
  butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the installation prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the installation prompt');
    } else {
      console.log('User declined the installation prompt');
    }

    // Clear the deferred prompt reference
    deferredPrompt = null;

    // Hide the custom installation button
    butInstall.style.display = 'none';
  }
});

// Add an event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // The app has been successfully installed
  console.log('App has been installed.', event);
});
