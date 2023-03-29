import { generatePixleBoard, removeAllPixels, resetBoardColors } from './pixelBoard.js';

export function oi() {
  console.log('oi');
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
