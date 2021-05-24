function beregn(){

    const tall1Midlertidig = document.getElementById("tall1").value;
    const tall2Midlertidig = document.getElementById("tall2").value;
    const tall3Midlertidig = document.getElementById("tall3").value;

    const tall1 = Number(tall1Midlertidig);
    const tall2 = Number(tall2Midlertidig);
    const tall3 = Number(tall3Midlertidig);

    if(isNaN(tall1) || isNaN(tall2) || isNaN(tall3)){
        document.getElementById("resultat").innerHTML="Feilmelding, skriv inn gyldigetall";
    } else{
        const resultat = tall1*tall2/tall3;
        document.getElementById("resultat").innerHTML= tall1+ "*" +tall2+ ":" +tall3 +" = "+resultat.toFixed(2);
    }
}

