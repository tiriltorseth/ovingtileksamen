let kundene = [];

function visPersonregister() {
    const kunde1 = {
        fornavn: "Tiril",
        etternavn: "Tørseth",
        alder: 20,
        adresse: "Bergensgata 42A",
        postnummer: "0468",
        poststed: "Oslo",
    };

    kundene.push(kunde1);
    console.log("Kunde 1 lagt inn");

    const kunde2 = {
        fornavn: "Oda",
        etternavn: "Romsaas",
        alder: 19,
        adresse: "Torshovgata 10B",
        postnummer: "0468",
        poststed: "Oslo",
    };

    kundene.push(kunde2);
    console.log("Kunde 2 lagt inn");

    const kunde3 = {
        fornavn: "Malin",
        etternavn: "Jeppesen",
        alder: 25,
        adresse: "Vøyensvingen 2",
        postnummer: "0468",
        poststed: "Oslo",
    };

    kundene.push(kunde3);
    console.log("Kunde 3 lagt inn");

    const kunde4 = {
        fornavn: "Karoline",
        etternavn: "Nygaard",
        alder: 12,
        adresse: "Skogduevegen 72A",
        postnummer: "2032",
        poststed: "Maura",
    };

    kundene.push(kunde4);
    console.log("Kunde 4 lagt inn");

    const kunde5 = {
        fornavn: "Marie",
        etternavn: "Larsen",
        alder: 34,
        adresse: "Flaggspettveien 9B",
        postnummer: "1234",
        poststed: "Molde",
    };

    kundene.push(kunde5);
    console.log("Kunde 5 lagt inn");

    const kunde6 = {
        fornavn: "Elen",
        etternavn: "Lau Borch",
        alder: 56,
        adresse: "Nellikveien 23",
        postnummer: "7032",
        poststed: "Trondheinm",
    };
    kundene.push(kunde6);
    console.log("Kunde 6 lagt inn");

    kundene.sort(function (a, b) {
        if (a.fornavn < b.fornavn) {
            return -1;
        }
        if (a.fornavn > b.fornavn) {
            return 1;
        }
        return 0;
    })

    skrivUt();

    function skrivUt() {
        let ut = "<table><tr>" +
            "<th>Fornavn</th><th>Etternavn</th><th>Alder</th><th>Adresse</th><th>Postnummer</th><th>Poststed</th>" +
            "</tr>";

        for (let i of kundene) {
            ut += "<tr>";
            ut += "<td>" + i.fornavn + "</td><td>" + i.etternavn + "</td><td>" + i.alder + "</td>" +
                "<td>" + i.adresse + "</td><td>" + i.postnummer + "</td><td>" + i.poststed + "</td>";
            ut += "</tr>";

        }
        document.getElementById("personRegister").innerHTML = ut;
        console.log("Tabell skrevet ut fullstendig");
    }
}



function slettPersonregister() {
    kundene = [];
    document.getElementById("personRegister").innerHTML = " ";
    console.log("Tabellen er slettet");
}



//Skriver ut hele lista som en setning, ikke en tabell
/*for (let i = 0; i < kundene.length; i++) {
    let ut = ("<br/>" + kundene[i].fornavn + " " + kundene[i].etternavn + " er " + kundene[i].alder + " år gammel og bor i "
        + kundene[i].adresse + " , " + kundene[i].postnummer + " " + kundene[i].poststed + ".<br/>");

    document.write(ut);
}  */
