let isRunning = false;

const lightSwitch = document.getElementById('lightSwitch');
const lamp = document.querySelector('.lamp');
const backgroundSound = document.getElementById('backgroundSound');

const lampContainer = document.getElementById('lampContainer');

// Set initial state based on checkbox
if (!lightSwitch.checked) {
  lamp.classList.add('off');
  backgroundSound.pause();
} else {
  backgroundSound.pause.play();
}

lightSwitch.addEventListener('change', function() {
  if (this.checked) {
    lamp.classList.remove('off');
    backgroundSound.play(); // Mainkan suara saat lampu menyala
  } else {
    lamp.classList.add('off');
    backgroundSound.pause(); // Hentikan suara saat lampu mati
  }
});