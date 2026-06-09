const images = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showImage(index) {
    modalImg.src = images[index].src;
}

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
        modal.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

nextBtn.addEventListener('click', () => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage(currentIndex);
});

document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
        modal.classList.remove('active');
    }

    if (e.key === 'ArrowRight') {
        nextBtn.click();
    }

    if (e.key === 'ArrowLeft') {
        prevBtn.click();
    }
});