var game = document.querySelector(".game");
var circulo = document.querySelector(".circulo");
// var flores = document.querySelector(".flores");
var circuloLeft = parseInt(window.getComputedStyle(circulo).getPropertyValue("left"));
var circuloBottom = parseInt(window.getComputedStyle(circulo).getPropertyValue("bottom"));
// var florcolores =document.getElementById("#florcolores");
var score = 0;  

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



// var colores  = ["#2384C8", "#214E49", "#A34835", "#F35344", "#E4D146", "#BE4C04", "#6E8FC4", "#4D7775", "#D95D09", "#A72B4F", "#BB4150", "#C99535", "#F5BE21", "#DFBE61", "#B0B5B1", "#A5B0DE", "#DF3C23", "#B6362D", "#AB2421", "#7D403D", "#0F9082", "#30A55C", "#79827D", "#63686C", "#EBD909", "#E5CB98", "#C47F31", "#F26128", "#C76461", "#B470AD", "#73ACC6", "#018ECE", "#323136", "#4B5A61", "#555F68", "#228763"];



function generateFlores (){
    var florBottom = 470;
    var florLeft = Math.floor(Math.random() * 620);


    const svg = document.querySelector("svg");
    const svgns = "http://www.w3.org/2000/svg";
    //llamas el div flores de tu html
    var flores = document.querySelector(".flores");

//creas el svg
    let newRect = document.createElementNS(svgns, "rect");

    newRect.setAttribute("x", "150");
    newRect.setAttribute("y", "150");
    newRect.setAttribute("width", "100");
    newRect.setAttribute("height", "100");
    newRect.setAttribute("fill", "#5cceee");
    flores.appendChild(newRect);


    

    // //create element ns y poner aquí el svg//
    // var flor = document.createElement('div'); //. algo o () algo es para que se aplica a ello , que haga ese método
    // flor.setAttribute("class", "flor"); //aquí pongo el set atribute que dice la página
    // flores.appendChild(flor); //este es el cuadrado que se crea que caen enn el div de flores
    //prueba//
    
    // function fallDownFlor(){
    //     if (florBottom < circuloBottom + 50 && florBottom > circuloBottom && florLeft > circuloLeft - 30 && florLeft < circuloLeft + 80 ) {
    //         flores.removeChild(flor);
    //         clearInterval(fallInterval);
    //         score++;
    //     }
    //     if (florBottom < circuloBottom){
    //         alert("Perdiste :( Tu puntaje es "+score);
    //         clearInterval(fallInterval);
    //         clearTimeout(florTimeout);
    //         location.reload();
    //     }
    //     florBottom -= 5;
    //     flor.style.bottom = florBottom + 'px';
    //     flor.style.left = florLeft + 'px';
    // }
    // var fallInterval = setInterval(fallDownFlor, 20); // el tiempo que hay entre cada uno que cae 
    // var florTimeout = setTimeout(generateFlores, 2000); // se modiifica este número para que caigan más rápido

    // flor.style.bottom = florBottom + 'px';
    

    
    function fallDownFlor(){
        if (florBottom < circuloBottom + 50 && florBottom > circuloBottom && florLeft > circuloLeft - 30 && florLeft < circuloLeft + 80 ) {
            svg.removeChild(newRect);
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
        newRect.style.bottom = florBottom + 'px';
        newRect.style.left = florLeft + 'px';
    }
    var fallInterval = setInterval(fallDownFlor, 20); // el tiempo que hay entre cada uno que cae 
    var florTimeout = setTimeout(generateFlores, 2000); // se modiifica este número para que caigan más rápido

    newRect.style.bottom = florBottom + 'px';
    
}

generateFlores(); 

document.addEventListener("keydown", control);
 