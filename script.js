const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const yearMarkers = document.querySelectorAll('.year-markers span');
const sliderTrack = document.querySelector('.slider-track');
const sliderThumb = document.querySelector('.slider-thumb');
const yearDescription = document.getElementById('yearDescription');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const descriptions = [
    "Early 1800s, Ramdutt Goenka arrived in Kolkata, from Dhunlod in Rajasthan. He started as a banker and then became a successful agent for the British business houses.",
    "1900s: The family business expanded into various sectors.",
    "1947: India gained independence, bringing new opportunities and challenges.",
    "1991: Economic liberalization in India led to further growth and diversification of the business."
];
let currentIndex = 0;

function updateSlider(index) {
    const percentage = (index / (items.length - 1)) * 100;
    sliderTrack.style.width = `${percentage}%`;
    sliderThumb.style.left = `${percentage}%`;
}

function updateCarousel(index) {
    const offset = index * -60;
    carousel.style.transform = `translateX(calc(${offset}% + 20%))`;
    
    items.forEach((item, i) => {
        if (i === index) {
            item.style.filter = 'blur(0)';
        } else {
            item.style.filter = 'blur(2px)';
        }
    });

    yearMarkers.forEach((marker, i) => {
        if (i === index) {
            marker.classList.add('active');
        } else {
            marker.classList.remove('active');
        }
    });

    yearDescription.textContent = descriptions[index];
}

function goToItem(index) {
    currentIndex = index;
    updateCarousel(index);
    updateSlider(index);
}

function goToPrevious() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    goToItem(currentIndex);
}

function goToNext() {
    currentIndex = (currentIndex + 1) % items.length;
    goToItem(currentIndex);
}

yearMarkers.forEach((marker, index) => {
    marker.addEventListener('click', () => goToItem(index));
});

leftArrow.addEventListener('click', goToPrevious);
rightArrow.addEventListener('click', goToNext);

// Initialize
goToItem(0);