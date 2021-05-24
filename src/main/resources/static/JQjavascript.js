// REGISTRER ADRESSER
function skrivInn() {
    let fyllInn = true;

    const fornavn = $("#fornavn").val();
    if (fornavn === "") {
        $("#nullstillFornavn").html("Skriv inn fornavn").css('color','red');
        fyllInn = false;
    }

    console.log("fornavnInn");

    const etternavn = $("#etternavn").val();
    if (etternavn === "") {
        $("#nullstillEtternavn").html("Skriv inn etternavn").css('color','orange');
        fyllInn = false;
    }

    console.log("etternavnInn");

    const adresse = $("#adresse").val();
    if (adresse === "") {
        $("#nullstillAdresse").html("Skriv inn adresse").css('color','yellow');
        fyllInn = false;
    }

    console.log("adresseInn");

    const postnummer = $("#postnummer").val();
    if (postnummer === "") {
        $("#nullstillPostnummer").html("Skriv inn postnummer").css('color','green');
        fyllInn = false;
    }

    console.log("postnummerInn");

    const poststed = $("#poststed").val();
    if (poststed === "") {
        $("#nullstillPoststed").html("Skriv inn poststed").css('color','blue');
        fyllInn = false;
    }

    console.log("poststedInn");

    const fodselsnummer = $("#fodselsnummer").val();
    if (fodselsnummer === "") {
        $("#nullstillFodselsnummer").html("Skriv inn etternavn").css('color','purple');
        fyllInn = false;
    }

    console.log("fodselsnummerInn")

    return fyllInn;
}

// LEGG TIL ADRESSER
function leggTil() {
    if (skrivInn()) {
        let alleAdresser = {
           fornavn: $("#fornavn").val(),
            etternavn: $("#etternavn").val(),
            adresse: $("#adresse").val(),
            postnummer: $("#postnummer").val(),
            poststed: $("#poststed").val(),
            fodselsnummer: $("#fodselsnummer").val()
        }

        $.post("/lagre",alleAdresser, function (){
            hentAdresser();
        });
        nullstillInput();
        nullstillAdresser();

        console.log("Skrevet ut");
    }
}

//NULLSTILL MELDING I INPUTBOKSEN
function nullstillInput() {
    $("#nullstillFornavn").html = "";
    $("#nullstillEtternavn").html = "";
    $("#nullstillAdresse").html = "";
    $("#nullstillPostnummer").html = "";
    $("#nullstillPoststed").html = "";
    $("#nullstillFodselsnummer").html = "";
}

//NULLSTILL VERDIENE I INPUT
function nullstillAdresser() {
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#adresse").val("");
    $("#postnummer").val("");
    $("#poststed").val("");
    $("#fodselsnummer").val("");
}


//HENT ADRESSER VIA GETMAPPING
function hentAdresser(){
    console.log("henter billetter");
    $.get("/hentAdresser", function (alleAdresser){
        skrivUt(alleAdresser)
    });
}


//SKRIV UT ADRESSENE I EN TABELL
function skrivUt(alleAdresser) {
    console.log("Skriver ut billetter");
    let ut = "<table><tr>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Adresser</th>" +
        "<th>Postnummer</th>" +
        "<th>Poststed</th>" +
        "<th>Fødselsnummer</th>" +
        "</tr>";

    for (let a of alleAdresser) {
        ut += "<tr>";
        ut += "<td>" + a.fornavn + "</td>" +
            "<td>" + a.etternavn + "</td>"+
            "<td>" + a.adresse + "</td>" +
            "<td>" + a.postnummer + "</td>" +
            "<td>" + a.poststed + "</td>" +
            "<td>" + a.fodselsnummer + "</td>"
        ut += "</tr>";
    }

    ut+= "</table>";
    $("#visAdresser").html(ut);
}


//SLETT ADRESSENE
function slettAdresse(){
    console.log("slett bilett");
    $.get("/slettAdresser",function (){
        hentAdresser();
        $("#visAdresser").html("");
        $("#ut").html("");
    });

}
