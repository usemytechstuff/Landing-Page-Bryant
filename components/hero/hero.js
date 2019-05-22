const hero = document.querySelector(".hero-title");

hero.addEventListener('click', e => {
    e.stopPropagation;
    e.classList.toggle('hide');
    console.log('scroll');
});

