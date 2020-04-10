// Your code goes here



// click event to change body background
const container = document.querySelector('.home');

container.addEventListener('click', () => {
    container.style.backgroundColor = 'lightpink';
});

// add bus honk sound when mouse hovers over image 
const play = document.querySelector('.intro img');
play.addEventListener('mouseover', () => {
    const audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'media/bus_honk.mp3');
    audioElement.play();
});

// rotate images in content-section using gsap
const adventureImg = document.querySelector('.lets-go');

adventureImg.addEventListener('click', (event) => {
   event.stopPropagation();
    gsap.to('.lets-go', {
        duration: 2,
        filter: 'none',
        x: -20,
        y: -10,
        rotate: -360,
        yoyo: true,
        repeat: 1
    });
});

const newImg = document.querySelector('.have-fun');

newImg.addEventListener('click', () => {
    newImg.src='img/adventure2.jpg';
    gsap.to('.have-fun', {
        duration: 2,
        filter: 'none',
        x: -20,
        y: -10,
        rotate: -360,
        yoyo: true,
        repeat: 1
    });
});

// scale text content
const letsGo = document.querySelector('.text-content');

letsGo.addEventListener('mouseenter', () => {
    letsGo.style.transform = 'scale(1.5)';
    letsGo.style.transition = 'transform 2s';
});

letsGo.addEventListener('mouseleave', () => {
    letsGo.style.transform = 'scale(1)';
});


// scale boat image when wheel scrolls
const boatImg = document.querySelector('.content-destination img');

boatImg.addEventListener('wheel', () => {
    boatImg.style.transform = 'scale(1.1)';
    boatImg.style.transition = 'transform 1s';
});

// change nav container color when mouse pressed 
const navColor = document.querySelector('.nav-container');

navColor.addEventListener('mousedown', () => {
    navColor.style.backgroundColor = 'seashell';
});

// change top 'logo' heading color when double clicked
const logoHeadColor = document.querySelector('.logo-heading');

logoHeadColor.addEventListener('dblclick', () => {
    logoHeadColor.style.color = 'deepskyblue';
});

// chane header image when window resized
const brokeVan = document.querySelector('.intro img');

window.addEventListener('resize', () => {
    brokeVan.src = 'img/broken_van.jpg';
});


// Super scale text size on mouse over. Scale back on mouse leave.
const destination = document.querySelectorAll('.destination');

destination.forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        event.target.parentElement.parentElement.style.transform = 'scale(2)';

        event.target.parentElement.parentElement.style.transition = 'transform 1s';
    });

    element.addEventListener('mouseout', (event) => {
        event.target.parentElement.parentElement.style.transform = 'scale(1)';
    });
});


const stopLink = document.querySelector('.nav-link');

stopLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('stopped the link');
});























