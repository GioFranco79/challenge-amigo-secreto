// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//   let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

const amigos = [];

function numeroAzar(numeroMaximo) {
    return Math.floor(Math.random()*numeroMaximo);
} 

function imprimirAmigos(amigo) {
    const listado = document.querySelector('#listaAmigos');    
    const nuevo = document.createElement("li");
    nuevo.innerHTML = amigo;
    listado.appendChild(nuevo);    
}

function agregarAmigo() {
    const inputAmigo = document.querySelector('#amigo');
    if (inputAmigo.value && inputAmigo.value.trim().length > 0) {
       amigos.push(inputAmigo.value);      
       imprimirAmigos(inputAmigo.value);
       inputAmigo.value = '';
    } else {
       alert("Por favor, ingrese un nombre valido.");
    }
}

function sortearAmigo() {
    const resultado = document.querySelector('#resultado');
    const indiceAmigoSorteado = numeroAzar(amigos.length);
    resultado.innerHTML = '';
    const elegido = document.createElement("li");
    elegido.innerHTML = "El amigo secreto sorteado es: " + amigos[indiceAmigoSorteado];
    resultado.appendChild(elegido);
}
