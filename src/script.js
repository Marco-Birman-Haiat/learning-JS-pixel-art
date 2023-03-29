import { getStorageData } from './utils/storage.js';
import { generatePixleBoard, paintPixelBoard } from './utils/pixelBoard.js';
import { generateRandomColors, placeCollorOnElements } from './utils/collorPalette.js';
import { handleCustomBoardGeneration,
  handleColorSelect, resetBoardColors } from './utils/eventFunctions.js';

function initializeApplication() {
  const { boardSize, colorPalette, pixelBoard } = getStorageData();
  generatePixleBoard(boardSize || 5);
  placeCollorOnElements(colorPalette);
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

// // Deve atualizar o objeto JS pixelBoard em todos os momentos em que houver uma atualização do usuário (terá de ser chamada)
// function updatePixelBoardObject(element) {
//   let pixelNum = element.id;
//   let newColor = element.style.backgroundColor;
//   pixelBoard[pixelNum] = newColor;
//   localStorage.setItem('pixelBoard', JSON.stringify(pixelBoard));
// }
// // Salva paleta de cores aleatorias no local storage
// function saveColorLC() {
//   const colorElements = document.getElementsByClassName('color');
//   const colors = {};
//   for (let index = 1; index < colorElements.length; index += 1) {
//     colors[`${index}`] = colorElements[index].style.backgroundColor;
//   }
//   localStorage.setItem('colorPalette', JSON.stringify(colors));
// }

// function saveBoardSize(size) {
//   if (localStorage.getItem('boardSize') === null) {
//     localStorage.setItem('boardSize', JSON.parse(size));
//     return 1;
//   }
//   localStorage.setItem('boardSize', JSON.parse(size));
// }
