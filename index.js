"use strict";

let vet = []

window.onload=function(){
    let _btnG=document.getElementsByClassName("card")[0];
    let _cartaG=document.getElementsByClassName("card")[1];
    let _btnB=document.getElementsByClassName("card")[2];
    let _cartaB=document.getElementsByClassName("card")[3];
	let _puntiG = document.getElementsByTagName("span")[0];
	let _puntiB = document.getElementsByTagName("span")[1];	
    let _assoG=document.getElementsByClassName("msgAsso")[0];
    let _assoB=document.getElementsByClassName("msgAsso")[1];
    let _chkG = _assoG.children[0];
    let _chkB = _assoB.children[0];

    _cartaB.style.visibility = "hidden";
    _cartaG.style.visibility = "hidden";
    _assoB.style.visibility = "hidden";
    _assoG.style.visibility = "hidden";
    _btnG.style.opacity = "0.5";
    _btnB.style.opacity = "0.5";
    
    _btnB.addEventListener("mouseover", rollon);
    _btnG.addEventListener("mouseover", rollon);
    _btnB.addEventListener("mouseout", rolloff);
    _btnG.addEventListener("mouseout", rolloff);
    _btnB.addEventListener("click", cartaGiocatore);
    _btnB.addEventListener("click", cartaGiocatore);

    function rollon(){
        this.style.opacity = "1";
    }
    function rolloff(){
        this.style.opacity = "0.5";
    }
    function cartaGiocatore(){
        let carta = generaCarta();
        _cartaG.style.backgroundImage = url(img/$(carta).gif);

    }
    function generaCarta(){
        let aus = ["a", "b", "c", "d"];  
        let carta;

        do{
            let seme = generaNumero(0, 4);
            let valore = generaNumero(1, 14);
            carta = aus[seme] + valore;
        }while(vet.includes(carta));
        vet.push(carta);
        return carta;
    }
    function valore(){
        return substr(1);
    }

}



function generaNumero(a, b){
    return Math.floor((b-a)*Math.random())+a
}