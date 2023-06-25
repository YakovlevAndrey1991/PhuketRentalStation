const btn = document.querySelectorAll('.toBook');
const modalWrapper = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
const modal = document.querySelector('.overlay');

    btn.forEach((item) => item.addEventListener('click', () => {
        modal.classList.toggle('show');
    }))

modalClose.addEventListener('click', () => {
    modal.classList.toggle('show');
})

modalWrapper.addEventListener('click', (e) => {
    if (!e.target ) {
        console.log('its modal window, dont close it')
        modal.classList.toggle('show');
    } else  {
        // modal.classList.toggle('show');
    }
})