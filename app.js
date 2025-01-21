// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//   let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

amigos = [];

function imprimirAmigos(amigo) {
    listado = document.querySelector('#listaAmigos');
    
    nuevo = document.createElement("li");
    nuevo.innerHTML = amigo;
    listado.appendChild(nuevo);    
}

function agregarAmigo() {
    inputAmigo = document.querySelector('#amigo');
    if (inputAmigo.value && inputAmigo.value.trim().length > 0) {
       amigos.push(inputAmigo);      
       imprimirAmigos(inputAmigo.value);
       inputAmigo.value = '';
    } else {
        alert("Debe ingresar un nombre de amigo valido.");
    }
}