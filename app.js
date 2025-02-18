// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo= "";

function agregarAmigo(){
   amigo = document.getElementById("amigo").value;
    if (amigo == "") {
        alert("Por favor, Ingresa un Nombre");
    } else {
        listaDeAmigos.push(amigo);
        document.getElementById("amigo").value = "";
        actualizarLista();
    }
}

let listaDeAmigos = [];

function actualizarLista() {
    let listaActualizada = document.getElementById("listaAmigos");
    listaActualizada.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = listaDeAmigos[i];
        listaActualizada.appendChild(itemLista);
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
         alert("Por favor, Ingresa un Nombre");
        return;

    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let nombreSorteado = listaDeAmigos[indiceAleatorio];
    if (nombreSorteado == amigo) {
        alert("¡No puedes ser tu propio Amigo Secreto! Por favor inténtalo de nuevo.");
        return;
    }

    document.getElementById("resultado").innerHTML = `Tu amigo secreto es: ${nombreSorteado}`;

}  

function reiniciarSorteo() {
    listaDeAmigos = [];
    document.getElementById("resultado").innerHTML = "";
    atualizarLista();
}