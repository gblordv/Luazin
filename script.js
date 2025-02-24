let attempts = 5;
const moon = document.getElementById("moon");
const message = document.getElementById("message");
const profilePicture = document.getElementById("profile-picture");
const gameContainer = document.getElementById("game-container");
const restartBtn = document.getElementById("restart-btn");

// Função para mover a Lua
function moveMoon() {
    if (attempts > 1) {
        let x = Math.random() * (gameContainer.offsetWidth - 50);
        let y = Math.random() * (gameContainer.offsetHeight - 50);
        moon.style.left = `${x}px`;
        moon.style.top = `${y}px`;

        attempts--; // Reduz uma tentativa
        message.innerText = `Tentativas restantes: ${attempts}`; // Atualiza o texto com o número de tentativas
    } else {
        moon.style.display = "none"; // Esconde a Lua
        message.innerText = "Putz, não existe lua mais brilhante que essa."; // Muda a mensagem final
        profilePicture.style.display = "block"; // Exibe a foto de perfil
        restartBtn.style.display = "block"; // Exibe o botão de reiniciar
    }
}

// Adiciona o evento de clique para mover a Lua
moon.addEventListener("click", moveMoon);

// Inicializa a posição da Lua
function initializeMoonPosition() {
    let x = Math.random() * (gameContainer.offsetWidth - 50);
    let y = Math.random() * (gameContainer.offsetHeight - 50);
    moon.style.left = `${x}px`;
    moon.style.top = `${y}px`;
}

// Função para reiniciar o jogo
function restartGame() {
    attempts = 5;
    message.innerText = "Ache a Lua";
    moon.style.display = "block";
    profilePicture.style.display = "none";
    restartBtn.style.display = "none"; // Esconde o botão de reiniciar
    initializeMoonPosition();
}

// Chama a função para inicializar a Lua na primeira posição
initializeMoonPosition();