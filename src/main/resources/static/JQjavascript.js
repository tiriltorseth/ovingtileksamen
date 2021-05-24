let adresseListe = [];

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

        adresseListe.push(alleAdresser);
        nullstillInput();
        nullstillAdresser();
        skrivUt();
        console.log("Skrevet ut");
    }
}

function nullstillInput() {
    $("#nullstillFornavn").html = "";
    $("#nullstillEtternavn").html = "";
    $("#nullstillAdresse").html = "";
    $("#nullstillPostnummer").html = "";
    $("#nullstillPoststed").html = "";
    $("#nullstillFodselsnummer").html = "";
}

function nullstillAdresser() {
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#adresse").val("");
    $("#postnummer").val("");
    $("#poststed").val("");
    $("#fodselsnummer").val("");
}

function skrivUt() {
    let ut = "<table><tr>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Adresser</th>" +
        "<th>Postnummer</th>" +
        "<th>Poststed</th>" +
        "<th>Fødselsnummer</th>" +
        "</tr>";

    for (let a of adresseListe) {
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

function slettAdresse(){
    adresseListe = [];
    $("#visAdresser").html("");
}




