'use strict';

let numerosecreto = Math.floor(Math.random() * 20) + 1; //gerar numero aleatorio
let score = 20; //vidas
let highscore = 0; //recorde
let feedback = document.querySelector('.feedback');

function knock() {
  const img = document.querySelector('.knockout');
  img.classList.add('active');
  let sound = new Audio();
  sound.src = 'midia/knockout.mp3';
  sound.volume = 1.0;
  sound.play();
}
function mgameover() {
  let sound = new Audio();
  sound.src = 'midia/gameover.mp3';
  sound.volume = 1.0;
  sound.play();
}
function merrar() {
  let sound = new Audio();
  sound.src = 'midia/death.mp3';
  sound.volume = 0.1;
  sound.play();
}
function hit() {
  document.querySelector('.img').src = 'midia/cup_hit.png'; //hit
  merrar();
  score--;
  document.querySelector('.scores span').textContent = score;
}
function perder() {
  document.querySelector('.feedback').textContent = 'Suas Vidas acabaram! 💔';
  document.querySelector('.scores span').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#c34b29';
  mgameover();
}

//checa resultado
document.querySelector('.btn_checar').addEventListener('click', function () {
  const adivinhe = Number(document.querySelector('.input').value);
  //quando nao é numero
  if (!adivinhe) {
    feedback.textContent = 'Não é um número ❌';
    //quando acerta
  } else if (adivinhe === numerosecreto) {
    feedback.textContent = 'Acertou! ✅';
    document.querySelector('body').style.backgroundColor = '#60b347'; //muda cor do bg
    document.querySelector('.textoResultado').textContent = numerosecreto;
    document.querySelector('.img').src = 'midia/cup_good.png';
    knock();
    setTimeout(function () {
      document.querySelector('.knockout').classList.remove('active');
    }, 4000);
    //colocar recorde
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //quando é maior que 20 e maior que o numero
  } else if (adivinhe > numerosecreto && adivinhe > 20) {
    if (score > 1) {
      feedback.textContent = 'O numero é entre 1 e 20 💬';
      hit();
    } else {
      perder();
    }

    //quando é menor que o numero
  } else if (adivinhe < numerosecreto) {
    if (score > 1) {
      feedback.textContent = '🔽 Muito Baixo!';
      hit();
    } else {
      perder();
    }

    //quando é maior que o numero
  } else if (adivinhe > numerosecreto) {
    if (score > 1) {
      feedback.textContent = '🔼 Muito Alto!';
      hit();
    } else {
      perder();
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
  document.querySelector('.img').src = 'midia/cup_caracter.png';
  document.querySelector('.knockout').classList.remove('active');
});
