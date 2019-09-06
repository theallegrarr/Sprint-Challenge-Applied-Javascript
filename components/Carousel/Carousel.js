/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel(){
  const carouselDiv = document.createElement('div');
  const leftButton = document.createElement('button');
  const mountainImg = document.createElement('img');
  const treesImg = document.createElement('img');
  const computerImg = document.createElement('img');
  const turntableImg = document.createElement('img');
  const rightButton = document.createElement('button');
  const carouselArea = document.querySelector('.carousel-container');

  carouselDiv.classList.add('carousel');
  leftButton.classList.add('left-button');
  
  mountainImg.setAttribute('src', './assets/carousel/mountains.jpeg');
  computerImg.setAttribute('src', './assets/carousel/computer.jpeg');
  treesImg.setAttribute('src', './assets/carousel/trees.jpeg');
  turntableImg.setAttribute('src', './assets/carousel/turntable.jpeg');
  rightButton.classList.add('right-button');

  mountainImg.classList.add('cImages', 'img1');
  computerImg.classList.add('cImages', 'img3');
  treesImg.classList.add('cImages', 'img2');
  turntableImg.classList.add('cImages', 'img4');

  carouselDiv.appendChild(leftButton);
  carouselDiv.appendChild(mountainImg);
  carouselDiv.appendChild(computerImg);
  carouselDiv.appendChild(treesImg);
  carouselDiv.appendChild(turntableImg);
  carouselDiv.appendChild(rightButton);

  carouselArea.appendChild(carouselDiv);

  const cImages = document.querySelectorAll('.cImages');
  cImages.forEach(image => { 
    image.style.height = '400px';
    image.style.borderRadius = '25px';
    image.style.padding = '2px';
  });

  carouselDiv.style.display = 'flex';
  carouselDiv.style.flexDirection = 'row';
}

createCarousel();
const leftButtonX = document.querySelector('.left-button');
const rightButtonX = document.querySelector('.right-button');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
img1.style.width = '50%';
img2.style.width = '50%';
img3.style.width = '0%';
img4.style.width = '0%';

rightButtonX.addEventListener('click', () => {
    img1.style.width = '0%';
    img2.style.width = '0%';
    img3.style.width = '50%';
    img4.style.width = '50%';
});

leftButtonX.addEventListener('click', () => {
  img1.style.width = '50%';
  img2.style.width = '50%';
  img3.style.width = '0%';
  img4.style.width = '0%';
});