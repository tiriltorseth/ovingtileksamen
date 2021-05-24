package vingtileksamen.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class AdresseController {

    private final ArrayList<Adresse> alleAdresser = new ArrayList<>();

    @PostMapping("/lagre")
        public void lagreAdresse(Adresse a) {
        alleAdresser.add(a);
    }

    @GetMapping ("/hentAdresser")
        public List<Adresse> hentAdresser(){
        return alleAdresser;
    }

    @GetMapping ("/slettAdresser")
        public void slettAdresser(){
        alleAdresser.clear();
    }




}
