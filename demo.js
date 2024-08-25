document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
        bar.style.opacity = '1';

        setTimeout(() => {
            bar.style.opacity = '1';
            bar.style.transition = 'opacity 0.5s ease-in-out';
            bar.style.setProperty('--percentage', percentage);
        }, 500);
    });
});
