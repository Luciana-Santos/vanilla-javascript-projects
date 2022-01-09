// inicio da contagem
let count = 0;

// seleciona valor e botões
const valor = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// cria um loop por todos os botões e ativa a função em cada um deles
btns.forEach(function (btn) {
  btn.addEventListener('click', function(e) { // evento
    // variavel recebe a lista de classes do botão que foi clicado
    const styles = e.currentTarget.classList 

    // condição que determina a ação em relação a cada botão apertado
    if(styles.contains('decrease')) {
      count--
    } else if (styles.contains('increase')) {
      count++
    } else {
      count = 0
    }
    // altera as cores do contador
    if (count > 0) {
      valor.style.color = 'green';
    }
    if (count < 0) {
      valor.style.color = 'red';
    }
    if (count === 0) {
      valor.style.color = '#222';
    }
    valor.textContent = count
  })
})

