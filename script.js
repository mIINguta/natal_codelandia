const btn = document.querySelector(".hamburg");
const nav = document.querySelector('.nav-header')


btn.addEventListener('click', function(){
    nav.classList.toggle('ativo')
})