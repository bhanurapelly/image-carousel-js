const form = document.querySelector('.image-form');
const submit = document.querySelector('.btn');
const input = document.getElementById('link');

const imageContainer = document.querySelector('.image-container');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let counter = 0;

setStylesToImages();
prevBtn.style.display = 'none';
// event listeners
form.addEventListener('submit', addImage);
prevBtn.addEventListener('click', showPrevImg);
nextBtn.addEventListener('click', showNextImg);

// functions *************

function addImage(e) {
    e.preventDefault();
    // access link value in input
    const link = input.value;
    if(link) {
        addImageToSlider(link);
        // console.log(link);
        setBackToDefault();
    } else {
        alert("Empty value not accepted");
    }
}

function addImageToSlider(link) {
    const element = document.createElement('div');
    element.innerHTML = `<img src=${link} alt="" class="slide-img">`;
    element.classList.add('slide');
    // append element to image container
    imageContainer.appendChild(element);
    setStylesToImages();
}

function setBackToDefault() {
    input.value = "";
}

function showNextImg() {
    counter++;
    carousel();
}

function showPrevImg() {
    counter--;
    carousel();
}

function setStylesToImages() {
    const slides = imageContainer.querySelectorAll('.slide');
    // console.log(slides);
    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    })
}

function carousel() {
    const slides = imageContainer.querySelectorAll('.slide');
    // console.log(slides.length);
    if(counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }

    if (counter < slides.length -1) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }

    slides.forEach(slide => slide.style.transform = `translateX(-${counter * 100}%)`)
}