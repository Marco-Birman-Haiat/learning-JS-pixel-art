export function placeCollorOnElements(colorPalette) {
  if (colorPalette !== null) {
    const colorElements = document.getElementsByClassName('color');
    for (let index = 1; index < colorElements.length; index += 1) {
      const element = colorElements[index];
      element.style.background = colorPalette[index];
    }
  }
}

export function oi() {
  console.log('oi');
}
