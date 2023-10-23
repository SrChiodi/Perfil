const outputElement = document.getElementById('output');
const prompt = 'user@website:~$  ';
const text = 'Nome: Vitor Chiodi     Idade: 18 anos     Especialidade: Front-End';

function typeText(text, index = 0) {
    if (index < text.length) {
        outputElement.textContent += text[index];
        setTimeout(() => typeText(text, index + 1), 100);
    }
}

function typePrompt(prompt, index = 0) {
    if (index < prompt.length) {
        outputElement.textContent += prompt[index];
        setTimeout(() => typePrompt(prompt, index + 1), 100);
    } else {
        typeText(text);
    }
}

setTimeout(() => {
    typePrompt(prompt);
}, 2000);

//fazer 'sudo Pacman -Perfil' e peril aparecer de soco
