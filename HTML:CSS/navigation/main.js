const toggleBtn = document.querySelector('.togglebutton');
const menu = document.querySelector('.tabmenu');
const icons = document.querySelector('.linkmenu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
}); 