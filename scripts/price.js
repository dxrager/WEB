document.getElementById('subscribeButton').addEventListener('click', function() {
    // Add confetti effect
    confetti();
});

function confetti() {
    var confettiElements = [];
    var colors = ['#FFA07A', '#FFD700', '#FF69B4', '#7B68EE', '#00FFFF', '#7FFF00'];

    for (var i = 0; i < 200; i++) {
        var confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 'px';
        confetti.style.height = Math.random() * 10 + 'px';
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = -Math.random() * window.innerHeight + 'px';
        confetti.style.opacity = Math.random();
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        confetti.style.transition = 'all 3s ease-out ' + Math.random() * 2 + 's';

        confettiElements.push(confetti);
        document.body.appendChild(confetti);
    }

    confettiElements.forEach(function(element) {
        setTimeout(function() {
            element.style.top = window.innerHeight + 'px';
        }, 100);
    });

    setTimeout(function() {
        confettiElements.forEach(function(element) {
            document.body.removeChild(element);
        });
    }, 5000);
}