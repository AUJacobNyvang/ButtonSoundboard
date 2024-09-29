// Function to play a specific sound file
function playSound(soundFile) {
    const audio = new Audio(`sounds/${soundFile}`);
    audio.play();
  }
  
  // Function to play one of the five random Slytherin sounds
  function playRandomSlytherinSound() {
    // Array containing the Slytherin sound files
    const slytherinSounds = [
      'Slytherin1.mp3',
      'Slytherin2.mp3',
      'Slytherin3.mp3',
      'Slytherin4.mp3',
      'Slytherin5.mp3'
    ];
  
    // Generate a random index between 0 and 4
    const randomIndex = Math.floor(Math.random() * slytherinSounds.length);
  
    // Play the randomly selected sound
    playSound(slytherinSounds[randomIndex]);
  }

  function playRandomGryffindorSound() {
    // Array containing the Slytherin sound files
    const slytherinSounds = [
      'Gryffindor1.mp3',
      'Gryffindor2.mp3',
      'Gryffindor3.mp3',
      'Gryffindor4.mp3',
      'Gryffindor5.mp3'
    ];
  
    // Generate a random index between 0 and 4
    const randomIndex = Math.floor(Math.random() * slytherinSounds.length);
  
    // Play the randomly selected sound
    playSound(slytherinSounds[randomIndex]);
  }

  function playRandomRavenclawSound() {
    // Array containing the Slytherin sound files
    const slytherinSounds = [
      'Ravenclaw1.mp3',
      'Ravenclaw2.mp3',
      'Ravenclaw3.mp3',
      'Ravenclaw4.mp3',
      'Ravenclaw5.mp3'
    ];
  
    // Generate a random index between 0 and 4
    const randomIndex = Math.floor(Math.random() * slytherinSounds.length);
  
    // Play the randomly selected sound
    playSound(slytherinSounds[randomIndex]);
  }
  
  function playRandomHuffelpufSound() {
    // Array containing the Slytherin sound files
    const slytherinSounds = [
      'Hyffelpuf1.mp3',
      'Hyffelpuf2.mp3',
      'Hyffelpuf3.mp3',
      'Hyffelpuf4.mp3',
      'Hyffelpuf5.mp3'
    ];
  
    // Generate a random index between 0 and 4
    const randomIndex = Math.floor(Math.random() * slytherinSounds.length);
  
    // Play the randomly selected sound
    playSound(slytherinSounds[randomIndex]);
  }