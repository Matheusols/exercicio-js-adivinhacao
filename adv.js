// Inicialização do jogo
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const maxTentativas = 10;
let tentativasRestantes = maxTentativas;

// Processamento
function verificarPalpite() {
    const palpiteInput = document.getElementById('palpite');
    const mensagem = document.getElementById('mensagem');
    const tentativas = document.getElementById('tentativas');
    const palpite = Number(palpiteInput.value);

    // Calculo dos chutes/Possibilidades
    if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
        mensagem.textContent = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

        tentativasRestantes--;
        
    if (palpite === numeroSecreto) {
        mensagem.textContent = `Você acertou! O número secreto era ${numeroSecreto}.`;
        desativarJogo();
    } else if (tentativasRestantes === 0) {
        mensagem.textContent = `Você perdeu! O número secreto era ${numeroSecreto}.`;
        desativarJogo();
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = "O número secreto é **maior**.";
    } else {
            mensagem.textContent = "O número secreto é **menor**.";
    }

        tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;
        palpiteInput.value = '';
        palpiteInput.focus();
}

// Finalização
function desativarJogo() {
    document.getElementById('palpite').disabled = true;
    document.querySelector('button').disabled = true;
}