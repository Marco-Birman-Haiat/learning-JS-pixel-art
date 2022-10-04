// Função que gera 3 valores entre 0 e 250 e retorna no formato de texto RGB para CSS
function colorGenerator () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`
}

function checkRepeat (array) {
    let color1 = array[1].style.backgroundColor;
    let color2 = array[2].style.backgroundColor;
    let color3 = array[3].style.backgroundColor;

    if (color1 == color2 && color1 == color3 && color2 == color3) {
        return true
    }
    return false
}

// Itera sobre os elementos a serem coloridos e atribui as novas cores randomicas
function generateRandomColors () {
    colorElements = document.getElementsByClassName('color');

    for (let index = 1; index < colorElements.length; index += 1) {
        let elementSelected = colorElements[index];
        let newCollor = colorGenerator()
        elementSelected.style.backgroundColor = newCollor;
    }
    // Chama a função que verifica repetição e caso haja chama recursivamente a função atual
    if (false){
        generateRandomColors();
    }
}

generateRandomColors()