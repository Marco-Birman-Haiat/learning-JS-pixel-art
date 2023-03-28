function pixelEvent({ target }) {
  const currentColor = document.querySelector('.selected').style.backgroundColor;
  target.style.backgroundColor = currentColor;
}

function createAndPlacePixel(father, index) {
  const pixel = document.createElement('div');
  pixel.addEventListener('click', (event) => pixelEvent(event));
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
      paintPixel(pixelBoard, pixels, index);
    }
  }
}
