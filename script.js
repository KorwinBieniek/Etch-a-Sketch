let color = 'black'
colors = ['white', 'black', 'red', 'green', 'blue', 'yellow', 'orange', 'pink', 'violet', 'grey', 'rainbow'];
let row;
let main_body;

function generateMainBody() {
    main_body = document.createElement('div');
    main_body.className = 'main_body';
    document.body.appendChild(main_body);
}

const loadScript = async (url) => {
    const response = await fetch(url)
    const script = await response.text()
    eval(script)
}

const scriptUrl = "https://code.jquery.com/jquery-3.5.0.js"
loadScript(scriptUrl)

function generateSquareDivs(n) {
    var grid = document.createElement('div');
    grid.className = 'grid';
    for (let i = 0; i < n; i++) {
        let column = document.createElement('div');
        column.className = 'column';
        for (let j = 0; j < n; j++) {
            row = document.createElement('div');
            row.className = 'row';
            row.draggable = 'true';

            column.appendChild(row);
        }
        grid.appendChild(column);
    }
    main_body.appendChild(grid);
}

document.addEventListener("dragenter", function (event) {
    if (event.target.className == "row") {
        event.target.style.background = color;
        if (color == 'rainbow') {
            event.target.style.background =  randomColor()
        }
    }
})

function generateColors() {
    var grid = document.createElement('div');
    grid.className = 'color_grid';
    for (let i = 0; i < colors.length; i++) {
        let column = document.createElement('div');
        column.className = 'color';
        column.classList.add(colors[i]);
        if (colors[i] == 'white') {
            column.innerText = 'Eraser'
        }
        grid.appendChild(column);
    }
    document.body.appendChild(grid);
}

function randomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

document.addEventListener("mousedown", function (event) {
    for (let i = 0; i < colors.length; i++) {
        if (event.target.className.includes(colors[i])) {
            
            color = colors[i];
        }
    }
})

function addResetButton() {
    let button = document.createElement('button');
    button.className = 'reset_button';
    button.innerText = 'Clear the sketchpad'
    document.body.appendChild(button);
}

function clear_sketchpad() {
    const divs = $(".row")
    divs.css("backgroundColor", "white")
}

document.addEventListener("mousedown", function (event) {
    for (let i = 0; i < colors.length; i++) {
        if (event.target.className == "reset_button") {
            clear_sketchpad()
        }
    }
})

function sliderChange(val) {
    val = val * 15;
    document.getElementById('output').innerHTML = val + "x" + val;
    if (val == 75) {
        removeElementsByClass('grid')
        generateSquareDivs(75)
        $(".row").css({"padding": "5px"});
    }
    else if (val == 60) {
        removeElementsByClass('grid')
        generateSquareDivs(60)
        $(".row").css({"padding": "6.385px"});
    }
    else if (val == 45) {
        removeElementsByClass('grid')
        generateSquareDivs(45)
        $(".row").css({"padding": "8.67px"});
    }
    else if (val == 30) {
        removeElementsByClass('grid')
        generateSquareDivs(30)
        $(".row").css({"padding": "13.25px"});
    }
    else if (val == 15) {
        removeElementsByClass('grid')
        generateSquareDivs(15)
        $(".row").css({"padding": "27px"});
    }
}

function removeElementsByClass(className) {
    var elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// .row {
//     width: 1px;
//     height: 1px;
//     margin: 0px;
//     padding: 5px;
//     background: white;
//     border: 0px solid black;
//     text-align: center;
// }