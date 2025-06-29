// Inicialização do jogo
let numeroSecreto;
const maxTentativas = 10;
let tentativasRestantes;

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = maxTentativas;
    document.getElementById('palpite').disabled = false;
    document.querySelector('button').disabled = false;
    document.getElementById('mensagem').textContent = '';
    document.getElementById('tentativas').textContent = `Tentativas restantes: ${tentativasRestantes}`;
    document.getElementById('palpite').value = '';
    document.getElementById('palpite').focus();
    }


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

function reiniciarJogo() {
    iniciarJogo();
}

// Iniciar o jogo ao carregar a página
    window.onload = iniciarJogo;