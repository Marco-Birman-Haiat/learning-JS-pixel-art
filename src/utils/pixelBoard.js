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

function createAndPlacePixel(fatherOfPixels, row, column, side) {
  const pixel = document.createElement('div');
  const pixelIndex = row * side + column;
  pixel.addEventListener('click', (event) => handlePixleClick(event));
  pixel.className = 'pixel';
  pixel.id = pixelIndex;
  pixel.style.background = 'white';
  fatherOfPixels.appendChild(pixel);
}

function createAndPlacePixelRow(fatherOfRows, side, row) {
  const fatherOfPixels = document.createElement('li');
  fatherOfPixels.className = 'pixel-row';

  for (let column = 0; column < side; column += 1) {
    createAndPlacePixel(fatherOfPixels, row, column, side);
  }

  fatherOfRows.appendChild(fatherOfPixels);
}

export function generatePixleBoard(side) {
  const fatherOfRows = document.getElementById('pixel-board');

  for (let row = 0; row < side; row += 1) {
    createAndPlacePixelRow(fatherOfRows, side, row);
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
