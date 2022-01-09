const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' , 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('#btn');
const cor = document.querySelector('#color');

btn.addEventListener('click', () => {
  let codigoCor = '#';
  
  for (let i = 0; i < 6; i++) {
    codigoCor += hex[gerarNumeroAleatorio()]
  }
  cor.textContent = codigoCor;
  document.body.style.backgroundColor = codigoCor;
});

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * hex.length)
}