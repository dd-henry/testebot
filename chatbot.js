document.getElementById("sendBtn").addEventListener("click", processInput);
document.getElementById("chatInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    processInput();
  }
});

let step = 0;
let userName = "";

function updatePlaceholder(newPlaceholder) {
  const input = document.getElementById("chatInput");
  input.placeholder = newPlaceholder;
}

function addMessage(message, isUser = false) {
  const chatbox = document.getElementById("chatbox");
  const messageElement = document.createElement("div");

  // Usar innerHTML para permitir tags HTML como <br>
  messageElement.innerHTML = message;

  messageElement.classList.add("message");
  messageElement.classList.add(isUser ? "user-message" : "bot-message");

  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function processInput() {
  const input = document.getElementById("chatInput");
  const userMessage = input.value.trim();

  if (!userMessage) return;

  addMessage(userMessage, true); // Adiciona mensagem do usuário
  input.value = "";

  if (step === 0) {
    userName = userMessage;
    addMessage(
      `Olá, ${userName}! <br>O que você gostaria de escolher hoje? <br>[1] - Sorvete <br>[2] - Algodão Doce`
    );
    step = 1;

    // Atualiza o placeholder após o primeiro input
    updatePlaceholder("Digite aqui");
  } else if (step === 1) {
    if (userMessage === "1") {
      addMessage(
        `Você escolheu Sorvete.<br>Qual sabor?<br>[1] - Chocolate<br>[2] - Morango`
      );
      step = 2;
    } else if (userMessage === "2") {
      addMessage(
        `Você escolheu Algodão Doce.<br>Qual tamanho?<br>[1] - Grande<br>[2] - Pequeno`
      );
      step = 3;
    } else {
      addMessage("Escolha inválida.<br>Digite 1 ou 2.");
    }
  } else if (step === 2) {
    if (userMessage === "1") {
      addMessage(
        `Você escolheu Sorvete de Chocolate.<br>Deseja continuar?<br>(Digite "sim" para continuar ou qualquer outra tecla para sair)`
      );
      step = 4;
    } else if (userMessage === "2") {
      addMessage(
        `Você escolheu Sorvete de Morango.<br>Deseja continuar?<br>(Digite "sim" para continuar ou qualquer outra tecla para sair)`
      );
      step = 4;
    } else {
      addMessage("Escolha inválida.<br>Digite 1 ou 2.");
    }
  } else if (step === 3) {
    if (userMessage === "1") {
      addMessage(
        `Você escolheu Algodão Doce Grande. <br> Deseja continuar?<br>(Digite "sim" para continuar ou qualquer outra tecla para sair)`
      );
      step = 4;
    } else if (userMessage === "2") {
      addMessage(
        `Você escolheu Algodão Doce Pequeno.<br>Deseja continuar?<br>(Digite "sim" para continuar ou qualquer outra tecla para sair)`
      );
      step = 4;
    } else {
      addMessage("Escolha inválida.<br>Digite 1 ou 2.");
    }
  } else if (step === 4) {
    if (userMessage.toLowerCase() === "sim") {
      addMessage(
        `O que você gostaria de escolher hoje?<br>[1] - Sorvete<br>[2] - Algodão Doce`
      );
      step = 1;
    } else {
      addMessage(
        `Obrigado, ${userName}, por usar nosso chatbot.<br>Até a próxima!`
      );
      step = 0;
      // Reseta o placeholder para a próxima sessão
      updatePlaceholder("Digite seu nome para começar");
    }
  }
}
