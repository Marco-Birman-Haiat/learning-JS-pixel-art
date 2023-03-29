export function saveInStorage(value, type) {
  localStorage.setItem(type, JSON.stringify(value));
}

export function updatePixelBoardObject(element) {
  const pixelNum = element.id;
  const newColor = element.style.backgroundColor;

  const pixelBoardStorage = localStorage.getItem('pixelBoard');
  const pixelBoard = (pixelBoardStorage === null) ? {} : JSON.parse(pixelBoardStorage);

  pixelBoard[`${pixelNum}`] = newColor;
  saveInStorage(pixelBoard, 'pixelBoard');
}

export function getStorageData() {
  const boardSize = localStorage.getItem('boardSize');
  const colorPalette = localStorage.getItem('colorPalette');
  const pixelBoard = localStorage.getItem('pixelBoard');

  return { boardSize, colorPalette, pixelBoard };
}
