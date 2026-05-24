// Right Click Disable
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// Key Disable
document.onkeydown = function (e) {

  // F12
  if (e.keyCode == 123) {
    return false;
  }

  // Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }

  // Ctrl+U
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
};