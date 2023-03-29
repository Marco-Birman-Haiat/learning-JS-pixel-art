import { generatePixleBoard, removeAllPixels } from './pixelBoard.js';
import { saveInStorage } from './storage.js';

export function handleColorSelect(event) {
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
  saveInStorage('', 'pixelBoard');
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
  saveInStorage(inputNumberValue, 'boardSize');
}
