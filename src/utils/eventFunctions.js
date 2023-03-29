import { generatePixleBoard, removeAllPixels } from './pixelBoard.js';

export function handleColorSelect(event) {
  console.log('selecionou cor');
  const previousSelection = document.querySelector('.selected');
  previousSelection.classList.remove('selected');
  event.target.classList.add('selected');
}

export function resetBoardColors() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    const pixel = pixels[index];
    pixel.style.background = 'white';
  }
  localStorage.setItem('pixelBoard', '');
}

export function handlePixleClick(event) {
  const currentSelectedColor = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = currentSelectedColor;
  updatePixelBoardObject(event.target);
}

export function handleCustomBoardGeneration() {
  const customSizeInput = document.getElementById('board-size').value;
  const inputNumberValue = Number(customSizeInput);

  if (customSizeInput === 0) {
    alert('Board inválido!');
  }
  if (inputNumberValue < 5) {
    generatePixleBoard(5);
  }
  if (inputNumberValue > 50) {
    generatePixleBoard(50);
  }

  removeAllPixels();
  resetBoardColors();
  generatePixleBoard(inputNumberValue);
  saveBoardSize(inputNumberValue);
}
