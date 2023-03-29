import { getStorageData } from './utils/storage.js';
import { generatePixleBoard, paintPixelBoard } from './utils/pixelBoard.js';
import { generateRandomColors, placeColorOnPalette } from './utils/collorPalette.js';
import { handleCustomBoardGeneration,
  handleColorSelect, resetBoardColors } from './utils/eventFunctions.js';

function initializeApplication() {
  const { boardSize, colorPalette, pixelBoard } = getStorageData();
  generatePixleBoard(boardSize || 5);
  placeColorOnPalette(colorPalette);
  paintPixelBoard(pixelBoard);
}

function addListeners() {
  const customBoardButton = document.getElementById('generate-board');
  const colorHolders = document.getElementsByClassName('color');
  const resetBoardColorButton = document.getElementById('clear-board');
  const randomColorButtton = document.getElementById('button-random-color');

  customBoardButton.addEventListener('click', () => handleCustomBoardGeneration());
  Array.from(colorHolders).forEach((colorHolder) => {
    colorHolder.addEventListener('click', (event) => handleColorSelect(event));
  });
  resetBoardColorButton.addEventListener('click', () => resetBoardColors());
  randomColorButtton.addEventListener('click', () => generateRandomColors());
}

initializeApplication();
addListeners();
