const cores = ['azul', 'verde', 'amarelo', 'roxo', 'rosa', 'vermelho', 'laranja', 'marrom', 'cinza', 'branco', 'preto'];
const codigos = ['#1396D4', '#019131', '#F2F201', '#730084', '#DA588C', '#F00A18', '#F26001', '#60331B', '#5F6062', '#ffffff', '#000000'];
const btn = document.querySelector('#btn');
const cor = document.querySelector('#color');
const significado = document.querySelectorAll('.cores__info .significados');
const ativo = 'ativo'

// função que gera a seleção de cor aleatória
btn.addEventListener('click', function () { 
  const numeroAleatorio = gerarNumeroAleatorio();
  document.body.style.backgroundColor = codigos[numeroAleatorio];
  cor.textContent = cores[numeroAleatorio];
  ativarSignificado(numeroAleatorio);
});

// condição que alinha as cores com seu significado correspondente
if (cores.length && significado.length) {
  significado[9].classList.add(ativo);
  cor.textContent = cores[9];
  document.body.style.backgroundColor = codigos[9];

  // função que ativa o significado especifico
  function ativarSignificado(index) {
    significado.forEach((div) => {
      div.classList.remove(ativo);
    });
    significado[index].classList.add(ativo);
  }
}



function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * cores.length);
}

