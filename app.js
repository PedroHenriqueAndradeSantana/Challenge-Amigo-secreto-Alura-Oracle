
let amigos = [];


function atualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");
listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function adicionarAmigo() {

  const inputNome = document.getElementById("amigo");
  const nome = inputNome.value.trim();
  
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);

  inputNome.value = "";

  atualizarLista();
}

function sortearAmigo() {

  if (amigos.length === 0) {
    alert("Nenhum amigo disponível para sortear.");
    return;
  }
  
  
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
 
  const amigoSorteado = amigos[indiceAleatorio];
  
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `<li>${amigoSorteado}</li>`;
}
