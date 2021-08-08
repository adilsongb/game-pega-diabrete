let altura = window.innerHeight;
let largura = window.innerWidth;

const ajustaTamanhoTela = () => {
  altura = window.innerHeight;
  largura = window.innerWidth;

  console.log(largura, altura);
};

ajustaTamanhoTela();

window.onresize = ajustaTamanhoTela;

const posicaoRandomica = () => {
  let positionX = Math.floor(Math.random() * largura) - 90;
  let positionY = Math.floor(Math.random() * altura) - 90;

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  console.log('Posição da mosca:');
  console.log(positionX, positionY);

  let mosca = document.createElement('img');
  mosca.src = 'imagens/mosca.png';
  mosca.classList.add('mosca1');

  mosca.style.position = 'absolute';
  mosca.style.left = `${positionX}px`;
  mosca.style.top = `${positionY}px`;

  document.body.appendChild(mosca);
}

window.onload = posicaoRandomica;
