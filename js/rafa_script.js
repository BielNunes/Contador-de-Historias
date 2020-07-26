
// import time.sleep()
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

// pag de histórias
function hist() {
    window.location = "hist.html"
}

function macverm() {
    let msg = new SpeechSynthesisUtterance(
        'Era uma vez um macaco vermelho. Todo dia beem cedo '+
        'ele acorda. Escóva os dentes. Toma banho. E bota o uniforme '+
        'da escola. Ele desce pra sala. Toma café da manhã. Dá tchau pra '+
        'mãe macaca, e vai pra escola. No caminho da escola, o macaco '+
        'vermelho encontra muitos amigos. Ele encontra o rinoceronte. '+
        'A girafa. Que mais? '
    );
    let psmsg = new SpeechSynthesisUtterance(
        'Muitos amigos. Quando o macaco vermelho chega na escola. '+
        'Ele estuda muito. As professoras adoram o macaco vermelho, '+
        'porque o macaco vermelho gosta muito de assistir aula. Na hora '+
        'do recreio, o macaco vermelho come um lanche delicioso. '+
        'Um sanduiche de banana com suco de banana delicioso! O macaco '+
        'vermelho brinca de diversas brincadeiras no recreio. Ele brinca de '+
        'futebol. De queimado. De pique. Que mais? '
    );
    let pspsmsg = new SpeechSynthesisUtterance(
        'Depois da escola, o macaco vermelho volta pra casa. '+
        'No caminho pra casa. O macaco vermelho pula de árvore '+
        'em árvore. Vai pegando bananas no topo das árvores. Ao chegar '+
        'em casa todo mundo fica muito feliz. Porque o macaco vermelho '+
        'é muito educado. Ele sempre trata todo mundo com respeito e carinho. '+
        'O macaco vermelho divide as bananas que ele pegou, com todo '+
        'mundo da família macaca. Todo mundo come junto. O papai macaco. '+
        'Titia macaca. Que mais? '
    );
    let pspspsmsg = new SpeechSynthesisUtterance(
        'Depois de comer, o macaco vermelho dá boa noite pra '+
        'todo mundo da família e sobe pro quarto dele. '+
        'Ele escóva os dentes. Toma um banho. Põe o pijama. '+
        'E deita pra dormir. Boa noite, macaco vermelho. '
    );
    window.speechSynthesis.speak(msg);
    sleep(5000);
    window.speechSynthesis.speak(psmsg);
    sleep(5000);
    window.speechSynthesis.speak(pspsmsg);
    sleep(5000);
    window.speechSynthesis.speak(pspspsmsg);
    sleep(5000);
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