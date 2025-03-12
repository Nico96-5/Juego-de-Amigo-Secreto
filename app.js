// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let  inputNombre = document.getElementById("amigo") //Obtenemos el elemento con id amigo (el input de texto)
let  elementoLista = document.getElementById("listaAmigos")  // Obtener elemento de la lista
let  elementoResultado = document.getElementById("resultado") // Obtener elemento resultado
let  amigos = [] //Creamos el array

// Funcion que agrega amigos
function agregarAmigo(){
    // Capturar el valor
    let valor = inputNombre.value
    // Validar entrada 
    if(valor !== ""){
        actualizarListaAmigos()
    }else{
        alert("Nombre invalido, ingrese un nombre de un amigo")
    }
}

//Implementar una funcion que actualize la lista de amigos
function actualizarListaAmigos(){
    // Actualziar array amigos
    amigos.push(inputNombre.value)
    // Limpiar
    inputNombre.value = ""
    // limpiar lista existente
    elementoLista.innerHTML = ""
    // Iterar sobre el arreglo
    for(var i = 0; i < amigos.length; i++){
        let nuevoli = document.createElement("li")
        nuevoli.innerHTML = amigos[i]
        // Agregar elementos a la lista
        elementoLista.appendChild(nuevoli)
    }
}

function sortearAmigo(){
    let tamanoArray = amigos.length
    // Validar que haya amigos
    if(tamanoArray !== 0){
        // Generar un indice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * tamanoArray)
        // Obterner el nombre sorteado
        let amigoSeleccionado = amigos[indiceAleatorio]
        // Mostrar resultado
        let nuevoliResultado = document.createElement("li")
        nuevoliResultado.innerHTML = `El amigo seleccionado es: ${amigoSeleccionado}`
        elementoResultado.innerHTML = ""
        elementoResultado.appendChild(nuevoliResultado)
    }else{
        alert("No hay amigos para sortear, agregar uno por favor")
    }
    
}