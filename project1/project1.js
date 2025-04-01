/* Jaden Wiltshires project */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function playSound(soundFile) {
    var audio = new Audio(`sounds/${button}`);
    audio.play();
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    playSound('button-click.mp3'); 
}

function imageClicked(imageName) {
    if (imageName === 'backpack') {
        playSound('button.mp3');
    } else if (imageName === 'math') {
        playSound('button.mp3');
    } else if (imageName === 'game') {
        playSound('button.mp3');
    }
    alert(`Great choice! You clicked on ${imageName.charAt(0).toUpperCase() + imageName.slice(1)}! 🎉`);
}

function addHoverEffect() {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        container.addEventListener('mouseover', () => {
            container.querySelector('img').style.transform = 'scale(1.1)';
        });

        container.addEventListener('mouseout', () => {
            container.querySelector('img').style.transform = 'scale(1)';
        });
    });
}

document.querySelectorAll('.image-container').forEach(container => {
    container.addEventListener('click', function () {
        const imageAlt = container.querySelector('img').alt.toLowerCase();
        imageClicked(imageAlt);
    });
});

document.querySelector('.scroll-to-top').addEventListener('click', scrollToTop);

addHoverEffect();