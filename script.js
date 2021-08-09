let altura = window.innerHeight;
let largura = window.innerWidth;
let vidas = 1;
let tempo = 10;

let intervaloTempo = 1500;

let nivel = window.location.search.replace('?', '');

if (nivel === 'normal') {
  intervaloTempo = 1500;
} else if (nivel === 'intermediario') {
  intervaloTempo = 1000;
} else if (nivel === 'dificil') {
  intervaloTempo = 750;
}

const ajustaTamanhoTela = () => {
  altura = window.innerHeight;
  largura = window.innerWidth;
};

ajustaTamanhoTela();

let cronometro = setInterval(() => {

  tempo -=1;

  if (tempo < 0) {
    clearInterval(cronometro);
    window.location.href = 'win.html';
  } else {
    document.getElementById('cronometro').innerHTML = tempo;
  }

}, 1000);

window.onresize = ajustaTamanhoTela;

const posicaoRandomica = () => {

  //remover mosca anterior caso exista;
  if (document.getElementById('mosca')) {
    document.getElementById('mosca').remove();
    
    if (vidas < 3) {
      document.getElementById(`v${vidas}`).src = 'imagens/coracao_vazio.png';
      vidas++;
    } else {
      window.location.href = 'game_over.html';
    }

  }

  let positionX = Math.floor(Math.random() * largura) - 90;
  let positionY = Math.floor(Math.random() * altura) - 90;

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  let mosca = document.createElement('img');
  mosca.src = 'imagens/mosca.png';
  mosca.classList.add(tamanhoAleatorio());
  mosca.classList.add(ladoAleatorio());

  mosca.style.position = 'absolute';
  mosca.style.left = `${positionX}px`;
  mosca.style.top = `${positionY}px`;

  mosca.id = 'mosca';

  mosca.addEventListener('click', function() {
    this.remove();
  });

  document.body.appendChild(mosca);
}

const tamanhoAleatorio = () => {

  let classe = Math.ceil(Math.random() * 3);

  switch(classe) {
    case 1:
      return 'mosca1';
    case 2:
      return 'mosca2';
    case 3:
      return 'mosca3';
  }

}

const ladoAleatorio = () => {
  let classe = Math.ceil(Math.random() * 2);

  switch(classe) {
    case 1:
      return 'ladoA';
    case 2:
      return 'ladoB';
  }
}

window.onload = () => {

  document.body.style.height = `${altura}px`;
  document.getElementById('cronometro').innerHTML = tempo;
  posicaoRandomica();
  let criaMosca = setInterval(() => {
    
    if (tempo < 0) {;
      clearInterval(criaMosca);
    } else {
      posicaoRandomica();
    }

  }, intervaloTempo);

};
