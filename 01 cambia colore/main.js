function clickBottone (){

    // ogni volta che clicco stampa click
    console.log("click");

    // assegno dei parametri al valore max e min
    let max = 255;
    let min = 0;

    // genero 3 numeri casuali, da 0 a 255, per i 3 colori dell'rgb
    let red = Math.floor(Math.random() * (max - min + 1)) + min;
    let green = Math.floor(Math.random() * (max - min + 1)) + min;
    let blue = Math.floor(Math.random() * (max - min + 1)) + min;

    // assegno questi colori al background del body
    document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
}
