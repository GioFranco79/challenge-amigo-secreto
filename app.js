// Programador: Giovanni Franco Calfiqueo.

let amigos = [];

// Genera un numero al azar con un tope maximo
function numeroAzar(numeroMaximo) {
    return Math.floor(Math.random()*numeroMaximo);
} 

// Revisa que un texto dado sea compuesto solo por letras mayusculas o minusculas y espacios entre palabras
function soloLetras(texto) {    
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    return regex.test(texto);
}

// Imprime al nuevo amigo en pantalla
function imprimirAmigos(amigo) {
    const listado = document.querySelector('#listaAmigos');
    const nuevo = document.createElement("li");
    nuevo.innerHTML = amigo;
    listado.appendChild(nuevo);    
}

// Agrega al nuevo amigo al arreglo solo si el nombre es valido
function agregarAmigo() {
    const inputAmigo = document.querySelector('#amigo');
    if (inputAmigo.value && inputAmigo.value.trim().length > 0 && soloLetras(inputAmigo.value)) {
       // Solo si el amigo no esta en el arreglo lo agrega para no repetirlo 
       if (!amigos.includes(inputAmigo.value)) {            
            amigos.push(inputAmigo.value);
            imprimirAmigos(inputAmigo.value);
            console.log(amigos);
            const resultado = document.querySelector('#resultado');
            resultado.innerHTML = '';
       }
       inputAmigo.value = '';
    } else {
       alert("Por favor, ingrese un nombre valido.");
    }
}

// Sortea un amigo que este dentro del arreglo 'amigos' al azar y lo imprime en pantalla
function sortearAmigo() {
    if (amigos.length > 0) {
        const listado = document.querySelector('#listaAmigos');
        listado.innerHTML = '';
        const resultado = document.querySelector('#resultado');
        const indiceAmigoSorteado = numeroAzar(amigos.length);
        resultado.innerHTML = '';
        const elegido = document.createElement("li");
        elegido.innerHTML = "El amigo secreto sorteado es: " + amigos[indiceAmigoSorteado];
        resultado.appendChild(elegido);
        amigos = [];
    } else {
        alert("Por favor, ingrese algun amigo primero.");
    }
}
