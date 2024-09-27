let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("red");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(40);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 1) {
    if (idade >= 10) {
      return "paranorman";
    } else {
      if (idade >= 10) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "vida de inseto";          
        } else{
         return "o mundo dos pequeninos";
        }
      } else {
        if (gostaDeFantasia) {
          return "coraline eo mundo secreto";
        } else {
          return "festa no céu";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "o lorax";
    } else {
      return "a caminho da lua";
    }
  }
}
