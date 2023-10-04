/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("const butInstall = document.getElementById('buttonInstall');\nlet deferredPrompt; // Store the deferred prompt for later use\n\n// Logic for installing the PWA\n// Add an event handler to the `beforeinstallprompt` event\nwindow.addEventListener('beforeinstallprompt', event => {\n  // Prevent the default browser installation prompt\n  event.preventDefault();\n\n  // Store the event for later use\n  deferredPrompt = event;\n\n  // Show the custom installation button\n  butInstall.style.display = 'block';\n});\n\n// Implement a click event handler on the `butInstall` element\nbutInstall.addEventListener('click', async () => {\n  if (deferredPrompt) {\n    // Show the installation prompt\n    deferredPrompt.prompt();\n\n    // Wait for the user to respond to the prompt\n    const choiceResult = await deferredPrompt.userChoice;\n    if (choiceResult.outcome === 'accepted') {\n      console.log('User accepted the installation prompt');\n    } else {\n      console.log('User declined the installation prompt');\n    }\n\n    // Clear the deferred prompt reference\n    deferredPrompt = null;\n\n    // Hide the custom installation button\n    butInstall.style.display = 'none';\n  }\n});\n\n// Add an event handler for the `appinstalled` event\nwindow.addEventListener('appinstalled', event => {\n  // The app has been successfully installed\n  console.log('App has been installed.', event);\n});\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;