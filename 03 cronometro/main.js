let stop = false;

// definisco le mie variabili
let ore = 0, minuti = 0, secondi = 0, centesimi = 0;

// creo la funzione 
function start() {
    if (stop == true) {
        stop = false;
        document.getElementById("start");
    } else {
        stop = true;
        document.getElementById("stop");
    }
}