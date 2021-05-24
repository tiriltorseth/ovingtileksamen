package vingtileksamen.demo;

public class Adresse {
    private String fornavn;
    private String etternavn;
    private String adresse;
    private String postnummer;
    private String poststed;
    private String fodselsnummer;

    public Adresse(String fornavn, String etternavn, String adresse, String postnummer, String poststed, String fodselsnummer) {
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.adresse = adresse;
        this.postnummer = postnummer;
        this.poststed = poststed;
        this.fodselsnummer = fodselsnummer;
    }

    public Adresse() {}

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getPostnummer() {
        return postnummer;
    }

    public void setPostnummer(String postnummer) {
        this.postnummer = postnummer;
    }

    public String getPoststed() {
        return poststed;
    }

    public void setPoststed(String poststed) {
        this.poststed = poststed;
    }

    public String getFodselsnummer() {
        return fodselsnummer;
    }

    public void setFodselsnummer(String fodselsnummer) {
        this.fodselsnummer = fodselsnummer;
    }


}





