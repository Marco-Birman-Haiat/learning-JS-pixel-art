import { getStorageData } from './utils/storage.js';
import { generatePixleBoard, paintPixelBoard } from './utils/pixelBoard.js';
import { placeCollorOnElements } from './utils/collorPalette.js';
import { handleCustomBoardGeneration,
  handleColorSelect, handlePixleClick, resetBoardColors } from './utils/eventFunctions.js';

function initializeApplication() {
  const { boardSize, colorPalette, pixelBoard } = getStorageData();
  generatePixleBoard(boardSize || 5);
  placeCollorOnElements(colorPalette);
  paintPixelBoard(pixelBoard);
}

function addListeners() {
  const customBoarButton = document.getElementById('generate-board');
  const colorHolders = document.getElementsByClassName('color');
  const pixels = document.getElementsByClassName('pixel');
  const resetBoardColorButton = document.getElementById('clear-board');

  customBoarButton.addEventListener('click', () => handleCustomBoardGeneration());
  Array.from(colorHolders).forEach((colorHolder) => {
    colorHolder.addEventListener('click', (event) => handleColorSelect(event));
  });
  Array.from(pixels).forEach((pixel) => {
    pixel.addEventListener('click', () => handlePixleClick());
  });
  resetBoardColorButton.addEventListener('click', () => resetBoardColors());
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
