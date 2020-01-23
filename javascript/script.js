// var name = prompt('Qui-êtes-vous ?', 'Igor')
// alert('Bonjour ' + name);

var inputText = document.getElementById('name');
// Ma variable inputText est maintenant l'object contenu dans l'imput
var text = document.getElementsByClassName('text');


inputText.onkeyup = function () {
    text[0].textContent = inputText.value;
};