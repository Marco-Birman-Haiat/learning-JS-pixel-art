import { updatePixelBoardObject } from './storage.js';

export function handlePixleClick({ target }) {
  const currentSelectedColor = document.querySelector('.selected').style.backgroundColor;

  if (target.style.backgroundColor === currentSelectedColor) {
    target.style.backgroundColor = 'white';
  } else {
    target.style.backgroundColor = currentSelectedColor;
  }
  updatePixelBoardObject(target);
}

function createAndPlacePixel(father, index) {
  const pixel = document.createElement('div');
  pixel.addEventListener('click', (event) => handlePixleClick(event));
  pixel.className = 'pixel';
  pixel.id = index;
  pixel.style.background = 'white';
  father.appendChild(pixel);
}

export function generatePixleBoard(side) {
  const father = document.getElementById('pixel-board');

  for (let index = 0; index < side * side; index += 1) {
    createAndPlacePixel(father, index);
  }
}

function paintPixel(pixelBoard, pixels, index) {
  const pixel = pixels[index];
  pixel.style.background = pixelBoard[`${index}`] || 'white';
}

export function paintPixelBoard(pixelBoard) {
  const pixels = document.getElementsByClassName('pixel');

  if (pixelBoard !== null && pixelBoard !== '') {
    for (let index = 0; index < pixels.length; index += 1) {
      paintPixel(JSON.parse(pixelBoard), pixels, index);
    }
  }
}

export function removeAllPixels() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = pixels.length - 1; index >= 0; index -= 1) {
    pixels[index].remove();
  }
}
