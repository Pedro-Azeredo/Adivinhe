'use strict';

const numerosecreto = Math.floor(Math.random() * 20) + 1; //gerar numero aleatorio
let score = 20; //vidas

document.querySelector('.btn_checar').addEventListener('click', function () {
  const adivinhe = Number(document.querySelector('.input').value);
  console.log(adivinhe, typeof adivinhe);

  //quando nao é numero
  if (!adivinhe) {
    document.querySelector('.feedback').textContent = 'Não é um número ❌';

    //quando acerta
  } else if (adivinhe === numerosecreto) {
    document.querySelector('.feedback').textContent = 'Acertou! ✅';

    document.querySelector('body').style.backgroundColor = '#60b347'; //muda cor do bg
    document.querySelector('.textoResultado').textContent = numerosecreto;

    //quando é maior que 20
  } else if (adivinhe > numerosecreto && adivinhe > 20) {
    if (score > 1) {
      document.querySelector('.feedback').textContent =
        'O numero é entre 1 e 20 💬';
      score--;
      document.querySelector('.scores span').textContent = score;
    } else {
      document.querySelector('.feedback').textContent =
        'Suas Vidas acabaram! 💔';
      document.querySelector('.scores span').textContent = 0;
    }

    //quando é menor que o numero
  } else if (adivinhe < numerosecreto) {
    if (score > 1) {
      document.querySelector('.feedback').textContent = '🔽 Muito Baixo!';
      score--;
      document.querySelector('.scores span').textContent = score;
    } else {
      document.querySelector('.feedback').textContent =
        'Suas Vidas acabaram! 💔';
      document.querySelector('.scores span').textContent = 0;
    }

    //quando é maior que o numero
  } else if (adivinhe > numerosecreto) {
    if (score > 1) {
      document.querySelector('.feedback').textContent = '🔼 Muito Alto!';
      score--;
      document.querySelector('.scores span').textContent = score;
    } else {
      document.querySelector('.feedback').textContent =
        'Suas Vidas acabaram! 💔';
      document.querySelector('.scores span').textContent = 0;
    }
  }
});

console.log(document.querySelector('.scores span').textContent);
