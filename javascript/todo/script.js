var taskText = document.querySelector('#taskText');
var tasks = document.querySelector('#tasks');

taskText.addEventListener('keyup', function (event) {

    if (event.keyCode === 13 && taskText.value) {   

        var node = createTaskNode(taskText.value);
        tasks.appendChild(node); // ajout d'un élément li dans l'ul
        
        taskText.value = ''; // pour vider le champ input
    }
});

tasks.addEventListener('click', function (event){
    var elem = event.target; // objet qui a émis l'événement
    
    if (elem.classList.contains('remove')) {
        elem.parentNode.remove();
        // tasks.removeChild(elem.parentNode);
        // console.log(elem.parentNode);
    }
    
    if (elem.classList.contains('done')) {
        elem.classList.toggle('toggle-done');
    }
    
    console.log(elem); 
});

function createTaskNode(txt) {
    var text = document.createTextNode(txt + ' '); //permet de créer un élément de type texte
    var li = document.createElement('li'); //permet de créer un élément de type <li></li>
    var i = document.createElement('i');
    var span = document.createElement('span');
    
    i.classList.add('fa');
    i.classList.add('fa-trash');
    i.classList.add('remove');
    span.classList.add('done');
    
    span.appendChild(text); // ajout d'un élément texte dans li
    li.appendChild(span);
    li.appendChild(i);

    return li;
}