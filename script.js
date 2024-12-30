// Countdown Script
document.addEventListener("DOMContentLoaded", function () {
    const countdown = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date();
        const christmas = new Date(now.getFullYear(), 11, 25); // December 25

        if (now.getMonth() === 11 && now.getDate() > 25) {
            christmas.setFullYear(christmas.getFullYear() + 1);
        }

        const diff = christmas - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdown.innerHTML = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
