const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const flowerName = document.querySelector('#flowerName');
const flowerFeatures = document.querySelector('#specialFeatures');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close() {
  mainMenu.style.top = '-100%';
}
function submitForm() {
  alert('Hello World')
}


mainMenu.addEventListener('click', function (e) {
  if (e.target.className == 'links') {
    close();
  }
})