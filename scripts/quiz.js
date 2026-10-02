const startQuizButton = document.querySelector('#start-quiz');
const finishQuizButton = document.querySelector('#finish-quiz');

const scoreBoard = document.querySelector('.quiz__scoreboard')
const score = document.querySelector('#score')

const question1 = document.querySelector('#question1');
const question2 = document.querySelector('#question2');
const question3 = document.querySelector('#question3');

startQuizButton.addEventListener('click', () => {
// escuta botão e o esconde
  startQuizButton.classList.add('quiz__btn--hidden')

// escuta botão e faz com que pergunta apareça  
  question1.classList.remove('quiz__question--hidden') 
});

let totalScore = 0;

// pega primeira pergunta e escuta evento de submit 
question1.addEventListener('submit', (event) => {
// previne comportamento 
    event.preventDefault()

// verifica se a resposta é correta, vendo se o atributo data-correct está presente
    const isCorrect = event.submitter.hasAttribute('data-correct')
    if (isCorrect) {
        event.submitter.classList.add('quiz__option--correct')
        totalScore = totalScore + 1;
    } else {
        event.submitter.classList.add('quiz__option--wrong')
    }

// para desabilitar todas as opções de resposta
    question1.querySelectorAll('.quiz__option').forEach(answer => {
        answer.setAttribute('disabled', true)
    });

// faz com que a próxima pergunta apareça
    question2.classList.remove('quiz__question--hidden')
})

question2.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const isCorrect = event.submitter.hasAttribute('data-correct')
    if (isCorrect) {
        event.submitter.classList.add('quiz__option--correct')
        totalScore = totalScore + 1;
    } else {
        event.submitter.classList.add('quiz__option--wrong')
    }
    
    question2.querySelectorAll('.quiz__option').forEach(answer => {
        answer.setAttribute('disabled', true)
    });
    
    question3.classList.remove('quiz__question--hidden')
});

question3.addEventListener('submit', (event) => {
    event.preventDefault()

    const isCorrect = event.submitter.hasAttribute('data-correct')
    if (isCorrect) {
        event.submitter.classList.add('quiz__option--correct')
        totalScore = totalScore + 1;
    } else {
        event.submitter.classList.add('quiz__option--wrong')
    }
    
    question3.querySelectorAll('.quiz__option').forEach(answer => {
        answer.setAttribute('disabled', true)
    });
    
    score.textContent = totalScore;
    scoreBoard.classList.remove('quiz__scoreboard--hidden')

    finishQuizButton.classList.remove('quiz__btn--hidden')
});

finishQuizButton.addEventListener('click', () => {
    window.location.reload();
})