'use strict';

let numerosecreto = Math.floor(Math.random() * 20) + 1; //gerar numero aleatorio
let score = 20; //vidas
let highscore = 0;

document.querySelector('.btn_checar').addEventListener('click', function () {
  const adivinhe = Number(document.querySelector('.input').value);

  //quando nao é numero
  if (!adivinhe) {
    document.querySelector('.feedback').textContent = 'Não é um número ❌';

    //quando acerta
  } else if (adivinhe === numerosecreto) {
    document.querySelector('.feedback').textContent = 'Acertou! ✅';
    document.querySelector('body').style.backgroundColor = '#60b347'; //muda cor do bg
    document.querySelector('.textoResultado').textContent = numerosecreto;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

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

//faz o botao de novo reiniciar
document.querySelector('.btn_denovo').addEventListener('click', function () {
  score = 20;
  numerosecreto = Math.floor(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#e2b10c';
  document.querySelector('.scores span').textContent = score;
  document.querySelector('.feedback').textContent = 'Tenta a sorte!';
  document.querySelector('.textoResultado').textContent = '?';
  document.querySelector('.input').value = '';
});
