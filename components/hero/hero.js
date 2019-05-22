const hero = document.getElementById("title");


function hide() {
    hero.classList.remove('show');
}

hero.addEventListener('focusout', hide);