function provera(){
    var uzorak_mejl = document.MojaForma.mail.value;
    var uzorak_broj = document.MojaForma.tel.value;
    var radio = document.querySelector( 'input[name="izborVremena"]:checked');
    var brojr =/^[+](381)(6)[0-9]{1}[/][0-9]{2}[-][0-9]{2}[-][0-9]{3}$/g;


    if(uzorak_mejl === null || uzorak_mejl === ""){
        document.getElementById("mail").style.border='3px solid red';
        alert("Unesite mejl!");
        return false;
    }
    else if(uzorak_broj === null || uzorak_broj === ""){
        document.getElementById("tel").style.border='3px solid red';
        alert("Unesite broj telefona!");
        return false;
    }
    else if(!brojr.test(uzorak_broj)){
        document.getElementById("tel").style.border='3px solid red';
        alert("Niste ispunili uslov broja");
        return false;
    }
    else if(radio === null) {
        document.getElementById("izborVremena").style.border='3px solid red';
        alert("Nije selektovano vreme");
        return false;
        }
    else{
        alert("Uspesno ste rezervisali!");
        return true;
    }
}

function cuvanje(){
    let korMail, korTel, korFilm, korIzborVremena, korKarte;
    korMail = document.getElementById("mail").value;
    korTel = document.getElementById("tel").value;
    korFilm = document.getElementById("film").value;
    korIzborVremena= document.getElementById("izborVremena").value;
    korKarte = document.getElementById("numb").value;

    localStorage.setItem("mail", korMail);
    localStorage.setItem("tel", korTel);
    localStorage.setItem("film", korFilm);
    localStorage.setItem("izborVremena", korIzborVremena);
    localStorage.setItem("numb", korKarte).value;


}

function clearStorage(){
        localStorage.clear();
    }
