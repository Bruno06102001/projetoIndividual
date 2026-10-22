const slides = document.querySelectorAll('.slide');
const pontos = document.querySelectorAll('.ponto');
const btnAvancar = document.querySelector('.btn-seta.direita');
const btnVoltar = document.querySelector('.btn-seta.esquerda');
const contador = document.querySelector('.contador');

// Slider 1
let slideAtual = 0;

// FUNÇÃO PRINCIPAL: MOSTRAR O SLIDE CORRETO
function mostrarSlide(index) {
    // Carrossel infinito
    if (index >= slides.length) {
        slideAtual = 0; // Volta para o primeiro se passar do último
    } else if (index < 0) {
        slideAtual = slides.length - 1; // Vai para o último se voltar antes do primeiro
    } else {
        slideAtual = index;
    }

    // Remove a classe 'ativo' de TODAS as cartas e pontos
    slides.forEach(slide => slide.classList.remove('ativo'));
    pontos.forEach(ponto => ponto.classList.remove('ativo'));

    // Adiciona a classe 'ativo' APENAS na carta e ponto atual
    slides[slideAtual].classList.add('ativo');
    pontos[slideAtual].classList.add('ativo');

    // Atualiza o texto do contador (ex: "2 / 6")
    contador.textContent = `${slideAtual + 1} / 6`; // Mantem 6 fixo
}

// ADICIONANDO OS EVENTO (Cliques)
btnAvancar.addEventListener('click', () => {
    mostrarSlide(slideAtual + 1);
});

btnVoltar.addEventListener('click', () => {
    mostrarSlide(slideAtual - 1);
});