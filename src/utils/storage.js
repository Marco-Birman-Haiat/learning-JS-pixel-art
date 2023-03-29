export function updatePixelBoardObject(element, pixelBoard) {
  const pixelNum = element.id;
  const newColor = element.style.backgroundColor;

  pixelBoard[pixelNum] = newColor;
  localStorage.setItem('pixelBoard', JSON.stringify(pixelBoard));
}

export function getStorageData() {
  const boardSize = localStorage.getItem('boardSize');
  const colorPalette = localStorage.getItem('colorPalette');
  const pixelBoard = localStorage.getItem('pixelBoard');

  return { boardSize, colorPalette, pixelBoard };
}

export function saveInStorage(value, type) {
  localStorage.setItem(type, value);
}
