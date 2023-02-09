import './style.css'

const menuBtn = document.querySelector('[data-menu-btn] i');
const mobileMenu = document.querySelector('[data-menu]')
const questions = document.querySelectorAll('.accordion-item-title');

menuBtn.addEventListener('click', () => {
    // mobileMenu.classList.toggle('hidden')
    let height = mobileMenu.scrollHeight;
    mobileMenu.classList.toggle('active');
    menuBtn.parentElement.classList.toggle('active');
    // answer.classList.toggle('my-4');
    mobileMenu.style.maxHeight =  mobileMenu.classList.contains('active') ? `${height * 2}px` : '0';
})

questions.forEach(question => {
    const item = question.parentElement;
    const answer = question.nextElementSibling;
    question.addEventListener('click', (e) => {
        let height = answer.scrollHeight;
        item.classList.toggle('active');
        answer.classList.toggle('my-4');
        answer.style.maxHeight =  item.classList.contains('active') ? `${height}px` : '0';
    })
})