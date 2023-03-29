export function placeCollorOnElements(colorPalette) {
  if (colorPalette !== null) {
    const colorElements = document.getElementsByClassName('color');
    for (let index = 1; index < colorElements.length; index += 1) {
      const element = colorElements[index];
      element.style.background = colorPalette[index];
    }
  }
}

function checkWhite(r, g, b) {
  if (r == 0 && g == 0 && b == 0) {
    return true;
  }
  return false;
}
// Função que gera 3 valores entre 0 e 250 e retorna no formato de texto RGB para CSS
function colorGenerator() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  if (checkWhite(r, g, b)) {
    colorGenerator();
  }
  return `rgb(${r}, ${g}, ${b})`;
}

function checkRepeat(array) {
  let color1 = array[1].style.backgroundColor;
  let color2 = array[2].style.backgroundColor;
  let color3 = array[3].style.backgroundColor;

  if (color1 == color2 && color1 == color3 && color2 == color3) {
    return true;
  }
  return false;
}

// Itera sobre os elementos a serem coloridos e atribui as novas cores randomicas
export function generateRandomColors() {
  const colorElements = document.getElementsByClassName('color');

  for (let index = 1; index < colorElements.length; index += 1) {
    const elementSelected = colorElements[index];
    const newCollor = colorGenerator();
    elementSelected.style.backgroundColor = newCollor;
  }
  // Chama a função que verifica repetição e caso haja chama recursivamente a função atual
  if (checkRepeat(colorElements)) {
    generateRandomColors();
  }
  saveColorLC();
}
