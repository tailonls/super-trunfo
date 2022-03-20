var carta1 = {
  nome: "Fofão",
  imagem: "imagens/fofao.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

var carta2 = {
  nome: "Darth Vader",
  imagem: "imagens/vader.jpg",
  atributos: {
    ataque: 9,
    defesa: 8,
    magia: 2
  }
};

var carta3 = {
  nome: "Shiryu de Dragão",
  imagem: "imagens/dragao.jpg",
  atributos: {
    ataque: 5,
    defesa: 9,
    magia: 10
  }
};

var carta4 = {
  nome: "Faustão",
  imagem: "imagens/faustao.jpg",
  atributos: {
    ataque: 10,
    defesa: 2,
    magia: 10
  }
};

var carta5 = {
  nome: "Formiga atômica",
  imagem: "imagens/formiga.jpg",
  atributos: {
    ataque: 4,
    defesa: 10,
    magia: 2
  }
};

var carta6 = {
  nome: "Thor",
  imagem: "imagens/thor.jpg",
  atributos: {
    ataque: 5,
    defesa: 8,
    magia: 7
  }
};

var carta7 = {
  nome: "Valdivia",
  imagem: "imagens/valdivia.jpg",
  atributos: {
    ataque: 9,
    defesa: 2,
    magia: 8
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  resetarCartas();
  var indiceCartaMaquina = parseInt(Math.random() * 7);
  cartaMaquina = cartas[indiceCartaMaquina];

  var indiceCartaJogador = parseInt(Math.random() * 7);
  // Condição para não pegar carta igual
  while (indiceCartaJogador == indiceCartaMaquina) {
    indiceCartaJogador = parseInt(Math.random() * 7);
  }
  cartaJogador = cartas[indiceCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();

  if (atributoSelecionado == null) {
    alert("Escolha um atributo para jogar!");
  } else {
    var atributoSelecionado = obtemAtributoSelecionado(); // Pegando opção escolhida pelo jogador
    var divResultado = document.getElementById("resultado");
    
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    
    var descResultado = "";
    if (valorCartaJogador > valorCartaMaquina) {
      descResultado = "Você venceu!";
    } else if (valorCartaJogador < valorCartaMaquina) {
      descResultado = "Você perdeu!";
    } else {
      descResultado = "Empate! ";
    }
    
    divResultado.innerHTML = "<p class='resultado-final'>"+ descResultado+" (" + valorCartaJogador + " contra " +valorCartaMaquina + ") </p>";
    
    exibirCartaMaquina();
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
  }
}

function exibirCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage ="url("+cartaJogador.imagem+")";
  //divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="imagens/template_carta.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" +
atributo + ": " +cartaJogador.atributos[atributo] + "<br>";
  }  
  var nome = "<p class='carta-subtitle'>"+cartaJogador.nome+"</p>";
  //var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage ="url("+cartaMaquina.imagem+")";
  //divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p name='atributo' value='" + atributo + "'>" +
atributo + ": " +cartaMaquina.atributos[atributo] + "</p>";
  }  
  var nome = "<p class='carta-subtitle'>"+cartaMaquina.nome+"</p>";
  //var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function resetarCartas(){
  var divCartaJogador = document.getElementById("carta-jogador");
  
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage ="";
  
  divCartaJogador.innerHTML = "";
  divCartaMaquina.innerHTML = "";
}