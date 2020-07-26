// pag de histórias
function hist() {
    window.location = "hist.html"
}

function macverm() {
    let msg = new SpeechSynthesisUtterance(
        'Era uma vez um macaco vermelho, todo dia bem cedo...'
    );
    window.speechSynthesis.speak(msg);
}

// pag de exercícios de matematica
function mat() {
    window.location = "mat.html"
}

function wrong() {
    let msg = new SpeechSynthesisUtterance(
        'Xiiii, você errou Rafa...'
    );
    window.speechSynthesis.speak(msg);
}

function right() {
    let msg = new SpeechSynthesisUtterance(
        'Aeeee, você acertou Rafa!'
    );
    window.speechSynthesis.speak(msg);
}

function maq() {
    let msg = new SpeechSynthesisUtterance(
        'Eu gostei da maquiagem, Rafa!'
    );
    window.speechSynthesis.speak(msg);
}