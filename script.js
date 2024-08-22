function animateProgressBar(id, percentage) {
    const circle = document.getElementById(id);
    const percentageText = document.getElementById(`${id}-percentage`);
  
    let progressValue = 0;
    let progressEndValue = percentage;
    let speed = 10; // Lower value = faster
  
    let progress = setInterval(() => {
      progressValue++;
      percentageText.textContent = `${progressValue}%`;
      circle.style.background = `conic-gradient(
        #00aaff ${progressValue * 3.6}deg,
        #444 ${progressValue * 3.6}deg
      )`;
      if (progressValue == progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
  }
  
  window.onload = () => {
    animateProgressBar('communication', 85);
    animateProgressBar('public-speaking', 70);
    animateProgressBar('management', 90);
  };
  