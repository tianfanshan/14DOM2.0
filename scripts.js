console.log(document.title);

document.getElementById("gen-1").innerText = "Generasión 1 Pokimon";

// document.getElementById("backgound1").style.background = "red";??
//document.getElementsByClassName("infocard-list infocard-list-pkmn-lg").style.backgound = "red";??

let url = document.URL;
console.log(url);

let url01 = document.location;
console.log(url01);

let nodosDeImagen = document.images;
console.log(nodosDeImagen);

for(let i = 0 ; i < nodosDeImagen.length ; i++){
    console.log(nodosDeImagen[i])
    nodosDeImagen[i].src = "./asset/undefined - Imgur.gif"
}