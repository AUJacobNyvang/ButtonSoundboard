function playSound(soundFile) {
    const audio = new Audio(`sounds/${soundFile}`);
    audio.play();
  }
  