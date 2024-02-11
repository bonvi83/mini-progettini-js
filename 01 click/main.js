function clickBottone (){

    // assegno dei parametri al valore max e min
    let max = 255;
    let min = 0;

    // genero 3 numeri casuali, da 0 a 255, per i 3 colori dell'rgb
    // ogni volta che clicco sul bottone mi stampa i tre valori
    let red = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("red " + red)

    let green = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("green " + green)

    let blue = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("blue " + blue)

    // assegno questi colori al background del body
    document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
}
