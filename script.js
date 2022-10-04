// Função que gera 3 valores entre 0 e 250 e retorna no formato de texto RGB para CSS
function checkWhite (r, g, b) {
    if (r == 0 && g == 0 && b == 0) {
        return true
    }
    return false
}

function colorGenerator () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    if(checkWhite(r, g, b)) {
        colorGenerator()
    }
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

// Salva cores geradas no local storage
function saveColorLC() {
    let colorElements = document.getElementsByClassName('color')
    let colors = [];
    for (let index = 1; index < colorElements.length; index += 1) {
        colors.push(colorElements[index].style.backgroundColor);
    }
    localStorage.setItem('colorPalette', colors)
}

// Itera sobre os elementos a serem coloridos e atribui as novas cores randomicas
function generateRandomColors () {
    let colorElements = document.getElementsByClassName('color');

    for (let index = 1; index < colorElements.length; index += 1) {
        let elementSelected = colorElements[index];
        let newCollor = colorGenerator()
        elementSelected.style.backgroundColor = newCollor;
    }
    // Chama a função que verifica repetição e caso haja chama recursivamente a função atual
    if (checkRepeat(colorElements)) {
        generateRandomColors();
    }
    
    saveColorLC()
}

function generatePixles (side) {
    const father = document.getElementById('pixel-board');

    for (let index = 0; index < side * side; index += 1) {
        let pixel = document.createElement('li');
        pixel.className = 'pixel'
        pixel.style.background = 'white'
        father.appendChild(pixel)
    }
}

function selectColor (event) {
    const selectedColor = document.querySelector('.selected');
    selectColor.classList.remove('selected')
    event.target.classList.add('selected')
}

generateRandomColors()
generatePixles(5)

// Atribui as cores o eventListener Click para definir a color com a class Selected
let palette = document.getElementById('color-palette');
palette.addEventListener('click', function(event) {
    let selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected')
    event.target.classList.add('selected')
});

// Atribui aos Pixels o eventListener Click para pintar da cor selecionada
let pixels = document.getElementsByClassName('pixel');
for (let index = 0; index < pixels.length; index += 1) {
    let pixel = pixels[index]
    pixel.addEventListener('click', function(event) {
        let currentColor = document.querySelector('.selected').style.backgroundColor
        event.target.style.backgroundColor = currentColor
    });
}

function clearBoard () {
    let pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
        let pixel = pixels[index];
        pixel.style.background = 'white'   
    }
}
