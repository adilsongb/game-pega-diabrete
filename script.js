let altura = window.innerHeight;
let largura = window.innerWidth;

const ajustaTamanhoTela = () => {
  altura = window.innerHeight;
  largura = window.innerWidth;
};

window.onresize = ajustaTamanhoTela;
