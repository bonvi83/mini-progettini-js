function setOra() {
    // qua ci saranno tutte le info della data attuale
    let data = new Date();

    // creo le singole variabili per l'orario
    let ore = data.getHours();
    let minuti = data.getMinutes();
    let secondi = data.getSeconds();

    // creo un piccolo controllo per far vedere SEMPRE 2 minuti nel mio orologio
    if (ore < 10){
        ore = "0" + ore;
    };
    if (minuti < 10){
        minuti = "0" + minuti;
    };
    if (secondi < 10){
        secondi = "0" + secondi;
    };


    // srivo nell'HTML il risultato
    document.getElementById("ora").innerHTML = ore + ":" + minuti + ":" + secondi;
}

// setto intervallo di aggiornamento ora ad ogni secondo
setInterval(setOra, 1000)