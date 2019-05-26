class Cat {
    constructor(cat) {
        this.cat = cat;
        const catClass = cat.className;
        this.catData = document.querySelector(`.cat[data-tab='${cat.dataset.tab}']`);
        if (this.catData.dataset.tab == 'all') {
            this.cards = document.querySelectorAll('.card');
        } else {
            this.cards = document.querySelectorAll(`.card[data-tab='${cat.dataset.tab}']`);
        }
        this.cards = Array.from(this.cards).map(card => new Card(card));
        this.cat.addEventListener('click', () => this.selectCats(catClass));
    }
    selectCats(catClass) {
        const cats = document.querySelectorAll('.cat');
        cats.forEach(cat => {
            cat.removeAttribute('class', 'active-cat');
            cat.setAttribute('class', 'cat');
        })
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.setAttribute('style', 'display:none'));
        this.cat.setAttribute('class', 'cat active-cat');
        this.cards.forEach(card => card.selectCard());

    }
}

class Card {
    constructor(card) {
        this.card = card;
    }

selectCard() {
    this.card.setAttribute('style', 'display:flex');
  }
}



let cats = document.querySelectorAll('.cat');
cats.forEach(cat => new Cat(cat));



//window.addEventListener('load', () => catLoad());



// function catLoad() {
//     var allcats = Array.from(document.querySelectorAll('.card'));
//     catSlice = allcats.slice(0, 6);
//     catSlice.setAttribute('class', 'cat');
// }

var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");

// const cards = Array.from(document.querySelectorAll('.card'));
// cards.forEach(card => {
//             card.addEventListener('click', e => {
//             var modal = document.getElementById("myModal");                
//             modal.style.display = "block";
//             var modalImg = e;
//             });

//         }
//         )

// var modalImg = this.card.target.firstElementChild.firstElementChild;
// modal.style.display = "block";
// modalImg.src = this.src;
// var span = document.getElementsByClassName("close")[0];




            // var modal = document.getElementById("myModal");
            // var img = document.getElementById("myImg");
            // var modalImg = document.getElementById("img01");
            // img.onclick = function(){
            //   modal.style.display = "block";
            //   modalImg.src = this.src;
            // }
            // var span = document.getElementsByClassName("close")[0];

            // span.onclick = function() { 
            //   modal.style.display = "none";
            // }