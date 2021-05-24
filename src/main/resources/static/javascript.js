let adresseListe = [];

function skrivInn() {
    let fyllInn = true;

    const fornavn = document.getElementById("fornavn").value;
    if (fornavn === "") {
        let nullstillFornavn = document.getElementById("nullstillFornavn")
        nullstillFornavn.style.color = "red";
        nullstillFornavn.innerHTML = "Skriv inn fornavn";
        fyllInn = false;
    }

    console.log("fornavnInn");

    const etternavn = document.getElementById("etternavn").value;
    if (etternavn === "") {
        let nullstillEtternavn = document.getElementById("nullstillEtternavn")
        nullstillEtternavn.style.color = 'red';
        nullstillEtternavn.innerHTML = "Skriv inn etternavn";
        fyllInn = false;
    }
    console.log("etternavnInn");

    const adresse = document.getElementById("adresse").value;
    if (adresse === "") {
        let nullstillAdresse = document.getElementById("nullstillAdresse")
        nullstillAdresse.style.color = "red";
        nullstillAdresse.innerHTML = "Skriv inn adresse";
        fyllInn = false;
    }

    console.log("adresseInn");

    const postnummer = document.getElementById("postnummer").value;
    if (postnummer === "") {
        let nullstillPostnummer = document.getElementById("nullstillPostnummer")
        nullstillPostnummer.style.color = "red";
        nullstillPostnummer.innerHTML = "Skriv inn postnummer";
        fyllInn = false;
    }

    console.log("postnummerInn");

    const poststed = document.getElementById("poststed").value;
    if (poststed === "") {
        let nullstillPoststed = document.getElementById("nullstillPoststed")
        nullstillPoststed.style.color = "red";
        nullstillPoststed.innerHTML = "Skriv inn poststed";
        fyllInn = false;
    }

    console.log("poststedInn");

    const fodselsnummer = document.getElementById("fodselsnummer").value;
    if (fodselsnummer === "") {
        let nullstillFodselsnummer = document.getElementById("nullstillFodselsnummer")
        nullstillFodselsnummer.style.color = "red";
        nullstillFodselsnummer.innerHTML = "Skriv inn etternavn";
        fyllInn = false;
    }

    console.log("fodselsnummerInn")

    return fyllInn;
}

function leggTil() {
    if (skrivInn()) {
        let alleAdresser = {
            fornavn: document.getElementById("fornavn").value,
            etternavn: document.getElementById("etternavn").value,
            adresse: document.getElementById("adresse").value,
            postnummer: document.getElementById("postnummer").value,
            poststed: document.getElementById("poststed").value,
            fodselsnummer: document.getElementById("fodselsnummer").value
        }
        adresseListe.push(alleAdresser);
        nullstillInput();
        nullstillAdresser();
        skrivUt();
        console.log("Skrevet ut");
    }
}


function nullstillInput() {
    document.getElementById("nullstillFornavn").innerHTML = "";
    document.getElementById("nullstillEtternavn").innerHTML = "";
    document.getElementById("nullstillAdresse").innerHTML = "";
    document.getElementById("nullstillPostnummer").innerHTML = "";
    document.getElementById("nullstillPoststed").innerHTML = "";
    document.getElementById("nullstillFodselsnummer").innerHTML = "";
}

function nullstillAdresser() {
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("adresse").value = "";
    document.getElementById("postnummer").value = "";
    document.getElementById("poststed").value = "";
    document.getElementById("fodselsnummer").value = "";
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
    document.getElementById("visAdresser").innerHTML = ut;
}

function slettAdresse(){
    adresseListe = [];
    document.getElementById("visAdresser").innerHTML = "";
}








