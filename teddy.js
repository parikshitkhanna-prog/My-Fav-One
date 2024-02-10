document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    const defaultText = document.getElementById('default-text');
    const activatedText = document.getElementById('activated-text');
    const toggleOnSound = document.getElementById('toggle-on-sound');
    const toggleOffSound = document.getElementById('toggle-off-sound');
    
    toggle.addEventListener('change', function () {
      if (this.checked) {
        activatedText.style.display = 'block'; // Show activated text
        defaultText.style.display = 'none'; // Hide default text
        toggleOnSound.play(); // Play sound for toggle on state
        setTimeout(function () {
          toggle.checked = false; // Turn off the toggle after 2 seconds
          defaultText.style.display = 'block'; // Show default text again
          activatedText.style.display = 'none'; // Hide activated text
          toggleOffSound.play(); // Play sound for toggle off state
        }, 2000);
      } else {
        toggleOffSound.play(); // Play sound for toggle off state
      }
    });
  });
  