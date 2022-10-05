function generatePixles (side) {
    const father = document.getElementById('pixel-board');

    for (let index = 0; index < side * side; index += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel'
        pixel.id = index
        pixel.style.background = 'white'
        father.appendChild(pixel)
    }
}

generatePixles(5)

// -------- Eventos --------
// Alterna a classe selected do antigo para o novo selecionado
function selectColor (event) {
    const selectedColor = document.querySelector('.selected');
    selectColor.classList.remove('selected')
    event.target.classList.add('selected')
}




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
        updatePixelBoardObject(event.target)
    });
}

function updatePixelBoardObject (element) {
    if (localStorage.getItem('pixelBoard') == null) {
        localStorage.setItem('pixelBoard', '')
    }
    let pixelNum = element.id
    let newColor = element.style.backgroundColor
    pixelBoard[pixelNum] = newColor
    localStorage.setItem('pixelBoard', JSON.stringify(pixelBoard))
}

function clearBoard () {
    let pixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixels.length; index += 1) {
        let pixel = pixels[index];
        pixel.style.background = 'white'   
    }
    pixelBoard = {}
    localStorage.setItem('pixelBoard', '')
}

function recoverPalette () {
    if (localStorage.length !== 0) {
        let colorElements = document.getElementsByClassName('color')       
        let savedColors = JSON.parse(localStorage.getItem('colorPalette'));
        for (let index = 1; index < colorElements.length; index += 1) {
            element = colorElements[index];
            element.style.background = savedColors[index];
        }
    }
}

function recoverPixelBoard () {
    if (localStorage.length !== 0) {
        let pixels = document.getElementsByClassName('pixel')       
        let savedPixelBoard = JSON.parse(localStorage.getItem('pixelBoard'));

        for (let index = 1; index < pixels.length; index += 1) {
            let pixel = pixels[index];
            if (savedPixelBoard[index] == null) {
                pixel.style.background = 'white';
            } else {
                pixel.style.background = savedPixelBoard[index];
            }
        }
    }
}

let pixelBoard = {}

if (localStorage.getItem('pixelBoard') !== null) {
    pixelBoard = {}
} else {
    pixelBoard = JSON.parse(localStorage.getItem('pixelBoard'))
}

window.onload = function () {
    recoverPalette()
    recoverPixelBoard()
}





// ------------- Funções para a Geração de cores --------
// Verifica cores brancas

function checkWhite (r, g, b) {
    if (r == 0 && g == 0 && b == 0) {
        return true
    }
    return false
}
// Função que gera 3 valores entre 0 e 250 e retorna no formato de texto RGB para CSS
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


// ------------ Saves -----------

// Salva paleta de cores aleatorias no local storage
function saveColorLC() {
    let colorElements = document.getElementsByClassName('color')
    let colors = {};
    for (let index = 1; index < colorElements.length; index += 1) {
        colors[index] =  colorElements[index].style.backgroundColor;
    }
    localStorage.setItem('colorPalette', JSON.stringify(colors))
}