function toggleContent(header) {
    const arrow = header.querySelector('.arrow');
    const content = header.nextElementSibling;

    if (content.classList.contains('open')) {
        content.classList.remove('open');
        arrow.classList.remove('expanded');
    } else {
        content.classList.add('open');
        arrow.classList.add('expanded');
    }
}

function setupCarousel(mainSelector, thumbnailsSelector, prevSelector, nextSelector) {
    const mainImages = document.querySelectorAll(`${mainSelector} img, ${mainSelector} iframe`);
    const thumbnails = document.querySelectorAll(`${thumbnailsSelector} img`);
    const prevButton = document.querySelector(prevSelector);
    const nextButton = document.querySelector(nextSelector);

    let currentIndex = 0;

    function updateMainImage(index) {
        mainImages.forEach((img, i) => img.classList.toggle('active', i === index));
        thumbnails.forEach((thumb, i) => thumb.classList.toggle('active', i === index));
        currentIndex = index;
    }

    function showNextImage() {
        const nextIndex = (currentIndex + 1) % mainImages.length;
        updateMainImage(nextIndex);
    }

    function showPrevImage() {
        const prevIndex = (currentIndex - 1 + mainImages.length) % mainImages.length;
        updateMainImage(prevIndex);
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => updateMainImage(index));
    });

    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);
}

// Configurar carrusel para El ultimo aliento
setupCarousel(
    '#carousel-main-ultimoaliento', 
    '#thumbnails-ultimoaliento', 
    '#prev-ultimoaliento', 
    '#next-ultimoaliento'
);

// Configurar carrusel para Moebius
setupCarousel(
    '#carousel-main-moebius', 
    '#thumbnails-moebius', 
    '#prev-moebius', 
    '#next-moebius'
);

// Configurar carrusel para Master
setupCarousel(
    '#carousel-main-master', 
    '#thumbnails-master', 
    '#prev-master', 
    '#next-master'
);

// Configurar carrusel para The Tale Of The Broken Spell
setupCarousel(
    '#carousel-main-spell', 
    '#thumbnails-spell', 
    '#prev-spell', 
    '#next-spell'
);

let currentIndex = 0;

function updateMainImage(index) {
    const items = document.querySelectorAll('#carousel-main-moebius > img, #carousel-main-moebius > iframe');
    items.forEach((item, i) => item.classList.toggle('active', i === index));
    currentIndex = index;
}


function showNextImage() {
    const nextIndex = (currentIndex + 1) % mainImages.length;
    updateMainImage(nextIndex);
}

function showPrevImage() {
    const prevIndex = (currentIndex - 1 + mainImages.length) % mainImages.length;
    updateMainImage(prevIndex);
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => updateMainImage(index));
});

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('#carousel-main-moebius > *');
    carouselItems.forEach(item => item.classList.remove('active'));

    const firstIframe = document.querySelector('#carousel-main-moebius iframe');
    if (firstIframe) {
        firstIframe.classList.add('active');
    }
});
