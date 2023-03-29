import { saveInStorage } from './storage.js';

export function placeColorOnPalette(colorPalette) {
  if (colorPalette !== null) {
    const jsonPalette = JSON.parse(colorPalette);
    const colorElements = document.getElementsByClassName('color');
    for (let index = 1; index < colorElements.length; index += 1) {
      const element = colorElements[index];
      element.style.background = jsonPalette[index];
    }
  }
}

function colorGenerator() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
}

function checkRepeat(array) {
  const color1 = array[1].style.backgroundColor;
  const color2 = array[2].style.backgroundColor;
  const color3 = array[3].style.backgroundColor;

  if (color1 === color2 && color1 === color3 && color2 === color3) {
    return true;
  }
  return false;
}

// Itera sobre os elementos a serem coloridos e atribui as novas cores randomicas
export function generateRandomColors() {
  const colorElements = document.getElementsByClassName('color');
  const colorsMemo = {};

  for (let index = 1; index < colorElements.length; index += 1) {
    const elementSelected = colorElements[index];
    const newCollor = colorGenerator();
    elementSelected.style.backgroundColor = newCollor;
    colorsMemo[index] = newCollor;
  }
  // Chama a função que verifica repetição e caso haja chama recursivamente a função atual
  if (checkRepeat(colorElements)) {
    generateRandomColors();
  }
  saveInStorage(colorsMemo, 'colorPalette');
}
