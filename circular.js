document.addEventListener("DOMContentLoaded", function () {
    const circularProgressBars = document.querySelectorAll(".circular-progress");

    circularProgressBars.forEach(progressBar => {
        const progress = progressBar.getAttribute("data-progress");
        const skillPercent = progressBar.querySelector(".skill-percent");
        let currentPercent = 0;

        // Animate the circular progress bar and percentage
        const animateProgress = setInterval(() => {
            if (currentPercent >= progress) {
                clearInterval(animateProgress);
            } else {
                currentPercent++;
                skillPercent.textContent = `${currentPercent}%`;
                progressBar.style.setProperty("--progress", `${currentPercent * 3.6}deg`);
            }
        }, 20);
    });
});
