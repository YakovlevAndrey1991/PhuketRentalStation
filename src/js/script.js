

const btn = document.querySelectorAll('.toBook');
const body = document.querySelector("body");
const modalWrapper = document.querySelector('.modal__window')
const modalClose = document.querySelector('.modal__close')
const modal = document.querySelector('.overlay__nob');
const sliderWrapper = document.querySelector('.catalog__slider');
const burger = document.querySelector('.burger')
const navBar = document.querySelector('.nav__bar')
const menuItem = document.querySelectorAll('.bar__link');

const question1 = document.querySelector('#question_1');
const question2 = document.querySelector('#question_2');
const question3 = document.querySelector('#question_3');
const question4 = document.querySelector('#question_4');
const question5 = document.querySelector('#question_5');
const answer1 = document.querySelector('#answer_1');
const answer2 = document.querySelector('#answer_2');
const answer3 = document.querySelector('#answer_3');
const answer4 = document.querySelector('#answer_4');
const answer5 = document.querySelector('#answer_5');

function openBar() {
    navBar.classList.toggle('nav__bar__active')
    burger.classList.toggle('burger__active')
    body.classList.toggle('hidden')
}


burger.addEventListener('click', () => {
    openBar()

})

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        openBar()
    })
})


function openAnswer(answer, question) {
    question.addEventListener('click', () => {
        answer.classList.toggle('hide')
    })
}


function closeModal() {
    modal.classList.remove('show');
    body.classList.remove('hidden');
}

function openModal() {
    modal.classList.add('show');
    body.classList.add('hidden');
}

openAnswer(answer1, question1);
openAnswer(answer2, question2);
openAnswer(answer3, question3);
openAnswer(answer4, question4);
openAnswer(answer5, question5);

btn.forEach((item) => item.addEventListener('click', () => {
    openModal()
}))

modalClose.addEventListener('click', () => {
    closeModal();
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
})

document.querySelector('.overlay__nob .modal__window').addEventListener('click', (e) => {
    e._isClickInModal = true;
})

modal.addEventListener('click', (e) => {
    if (e._isClickInModal) return;
    e.currentTarget.classList.remove('show')
    body.classList.remove('hidden');
})


