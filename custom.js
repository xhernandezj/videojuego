var game = document.querySelector(".game");
var circulo = document.querySelector(".circulo");
var circuloLeft = parseInt(window.getComputedStyle(circulo).getPropertyValue("left"));
var circuloBottom = parseInt(window.getComputedStyle(circulo).getPropertyValue("bottom"));
var score = 0;  
var flor_svg = document.getElementById("Capa_1");

function randomcolor() {
    return Math.floor(Math.random() * 255);
}

function moveCirculoLeft(){
    if (circuloLeft > 0) {
        circuloLeft -= 20; //es los pixeles que se mueven por picor de flecha 
        circulo.style.left = circuloLeft + 'px';
    }
}

function moveCirculoRight(){
    if (circuloLeft < 620) {
        circuloLeft += 20;
        circulo.style.left = circuloLeft + 'px';
    }
}

function control (e){
    if (e.key == "ArrowLeft"){
        moveCirculoLeft();
    }
    if (e.key == "ArrowRight"){
        moveCirculoRight();
    }
}

let colores  = ["#2384C8", "#214E49", "#A34835", "#F35344", "#E4D146", "#BE4C04", "#6E8FC4", "#4D7775", "#D95D09", "#A72B4F", "#BB4150", "#C99535", "#F5BE21", "#DFBE61", "#B0B5B1", "#A5B0DE", "#DF3C23", "#B6362D", "#AB2421", "#7D403D", "#0F9082", "#30A55C", "#79827D", "#63686C", "#EBD909", "#E5CB98", "#C47F31", "#F26128", "#C76461", "#B470AD", "#73ACC6", "#018ECE", "#323136", "#4B5A61", "#555F68", "#228763"];

function generateFlores (){
    var florBottom = 470;
    var florLeft = Math.floor(Math.random() * 620);
    const index = Math.floor(Math.random() * colores.length);
    const color = colores[index];
    flor_svg.style.fill = color;

    function fallDownFlor(){
        if (florBottom < circuloBottom + 50 && florBottom > circuloBottom && florLeft > circuloLeft - 30 && florLeft < circuloLeft + 80 ) {
            clearInterval(fallInterval);
            score++;
        }
        if (florBottom < circuloBottom){
            alert("Perdiste :( Tu puntaje es "+score);
            clearInterval(fallInterval);
            clearTimeout(florTimeout);
            location.reload();
        }
        florBottom -= 5;
        flor_svg.style.bottom = florBottom + 'px';
        flor_svg.style.left = florLeft + 'px';
    }
    var fallInterval = setInterval(fallDownFlor, 60); // el tiempo que hay entre cada uno que cae 
    var florTimeout = setTimeout(generateFlores, 2000); // se modiifica este número para que caigan más rápido
}

generateFlores(); 

document.addEventListener("keydown", control);
 