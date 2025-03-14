// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
const listaDeNombres = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar entrada
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    // Agregar el nombre al array
    listaDeNombres.push(nombre);

    // Crear un nuevo elemento de lista y agregarlo a la lista visible
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    listaAmigos.appendChild(nuevoElemento);

    // Limpiar el campo de texto
    input.value = '';
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const amigos = listaAmigos.getElementsByTagName('li');

    if (amigos.length === 0) {
        alert('La lista de amigos está vacía. Por favor, agregue nombres antes de sortear.');
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio].textContent;

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
}

// Función para mostrar todos los amigos en la lista HTML
function mostrarAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista existente
    listaAmigos.innerHTML = '';

    // Iterar sobre el arreglo listaDeNombres
    for (let i = 0; i < listaDeNombres.length; i++) {
        // Crear un nuevo elemento de lista para cada amigo
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = listaDeNombres[i];
        
        // Agregar el nuevo elemento a la lista
        listaAmigos.appendChild(nuevoElemento);
    }
}

// Función para seleccionar un amigo aleatoriamente del array
function sortearAmigoDelArray() {
    // Validar que haya amigos disponibles
    if (listaDeNombres.length === 0) {
        alert('La lista de amigos está vacía. Por favor, agregue nombres antes de sortear.');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeNombres.length);

    // Obtener el nombre sorteado
    const amigoSorteado = listaDeNombres[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
}
