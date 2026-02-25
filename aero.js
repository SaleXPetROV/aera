// --- Слайдер Искусство ---
const artSlider = document.getElementById('artSlider');
let artIndex = 0;
const stepSize = 585;
const totalArtImages = 6; 

function moveArt(direction) {
    if (direction === 'right') {
        artIndex++;
        artSlider.style.transition = "transform 0.5s ease-in-out";
        artSlider.style.transform = `translateX(-${artIndex * stepSize}px)`;

        if (artIndex >= totalArtImages) {
            setTimeout(() => {
                artSlider.style.transition = "none"; 
                artIndex = 0;
                artSlider.style.transform = `translateX(0px)`;
            }, 500); 
        }
    } else {
        if (artIndex <= 0) {
            artSlider.style.transition = "none";
            artIndex = totalArtImages;
            artSlider.style.transform = `translateX(-${artIndex * stepSize}px)`;
            artSlider.offsetHeight; 
        }
        artIndex--;
        artSlider.style.transition = "transform 0.5s ease-in-out";
        artSlider.style.transform = `translateX(-${artIndex * stepSize}px)`;
    }
}

// --- Слайдер Боди-арт ---
const bodiSlider = document.getElementById('bodiartSlider');
let bodiIndex = 0;
const bodiTotalImages = 6; 

function moveBodi(direction) { // НОВОЕ ИМЯ ФУНКЦИИ
    if (direction === 'right') {
        bodiIndex++;
        bodiSlider.style.transition = "transform 0.5s ease-in-out";
        bodiSlider.style.transform = `translateX(-${bodiIndex * stepSize}px)`;

        if (bodiIndex >= bodiTotalImages) {
            setTimeout(() => {
                bodiSlider.style.transition = "none"; 
                bodiIndex = 0;
                bodiSlider.style.transform = `translateX(0px)`;
            }, 500); 
        }
    } else {
        if (bodiIndex <= 0) {
            bodiSlider.style.transition = "none";
            bodiIndex = bodiTotalImages;
            bodiSlider.style.transform = `translateX(-${bodiIndex * stepSize}px)`;
            bodiSlider.offsetHeight; 
        }
        bodiIndex--;
        bodiSlider.style.transition = "transform 0.5s ease-in-out";
        bodiSlider.style.transform = `translateX(-${bodiIndex * stepSize}px)`;
    }
}