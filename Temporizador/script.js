let timer;
let totalTime = 0;

const alarmSound = new Audio("teste.mp3"); // Som do Alarme

function startTimer() {
  clearInterval(timer);
  const minutes = parseInt(document.getElementById("minutes").value); // Pega o valor digitado
  totalTime = minutes * 60; // Converte para Segundos

  updateDisplay();

  timer = setInterval(() => {
    if (totalTime <= 0) {
      clearInterval(timer); // Reseta o Temporizador
      alarmSound.play(); // Toca o Som do Alarme
      alert("⏰ Tempo esgotado!"); // Alerta oara quando acabar o alarme
    } else {
      totalTime--;
      updateDisplay();
    }
  }, 1000);
}

function updateDisplay() {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  document.getElementById("time").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function resetTimer() { // Função pra resetar o timer
  clearInterval(timer);
  document.getElementById("time").textContent = "00:00";
  document.getElementById("minutes").value = "";
}


// Esse temporizador funciona pegando o valor digitado em minutos, convertendo pra segundos e fazendo uma contagem regressiva usando JavaScript. A cada segundo, ele atualiza o tempo na tela e quando chega a zero, exibe um alerta. O design usa uma paleta rosa e menta pra manter o estilo do meu projeto.