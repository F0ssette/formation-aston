// var name = prompt('Qui-êtes-vous ?', 'Igor')
// alert('Bonjour ' + name);

var inputText = document.getElementById('name');
// Ma variable inputText est maintenant l'object contenu dans l'imput
var text = document.getElementsByClassName('text');
var body = document.querySelector('body');

//Nouvelle méthode
body.addEventListener('mousemove', function(event) {
    console.log(event);
}, false);

inputText.onkeyup = writeText;
text[0].onclick = function (event) {
    console.log(event);
};

function writeText() {
    text[0].textContent = inputText.value;
};


// var inputText = document.getElementById('name');
// // Ma variable inputText est maintenant l'object contenu dans l'imput
// var text = document.getElementsByClassName('text');
// var body = document.querySelector('body');

// Ancienne méthode
//body.onmousemove = function (choupette){ // où choupette est équivalent à event
//     console.log(choupette);
// };

// inputText.onkeyup = writeText; // On ne met pas de () car c'est le navigateur qui le fait, en prenant en compte la touche appuyée

// function writeText() { //C'est la définition de la fonction, dans les () on peut écrire un e ou event mais c'est un nom de variable donc en fait on peut écrire ce qu'on veut
//     text[0].textContent = inputText.value;
// };

// text[0].onclick = fuction(myEvent) { //onclick est une propriété, on parle ici d'une fonction anonyme parcequ'elle n'a pas de nom, contrairement à la fonction writeText
//     console.log(myEvent);
// };