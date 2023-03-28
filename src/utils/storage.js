export default function teste() {
  return 'oi';
}

export function getStorageData() {
  const boardSize = localStorage.getItem('boardSize');
  const colorPalette = localStorage.getItem('colorPalette');
  const pixelBoard = localStorage.getItem('pixelBoard');

  return { boardSize, colorPalette, pixelBoard };
}
