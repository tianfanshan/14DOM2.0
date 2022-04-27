console.log(document.title);

document.getElementById("gen-1").innerText = "Generasión 1 Pokimon";

document.getElementById("gen-1").nextElementSibling.style.background = "red";

let url = document.URL;
console.log(url);

let url01 = document.location;
console.log(url01);

let nodosDeImagen = document.images;
console.log(nodosDeImagen);

for(let i = 0 ; i < nodosDeImagen.length ; i++){
    console.log(nodosDeImagen[i])
    nodosDeImagen[i].src = "https://media2.giphy.com/media/2v170e71aanfi/giphy.gif?cid=790b76110f98452404c016ea19c7c5ec5d84ae03195eccbd&rid=giphy.gif&ct=s"
}

let varios = document.getElementsByClassName("itype flying");
for(let i = 0 ; i < varios.length ; i++){
    console.log(varios[i])
    varios[i].parentNode.parentNode.style.background = "green";
}