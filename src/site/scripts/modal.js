var modal = document.getElementById("cardModal");


const allcards = document.querySelectorAll('.card');
allcards.forEach(card => {
    var cardDiv = card.querySelector('img');
    var cardDivSrc = cardDiv.src;
    card.addEventListener(
        'click', e => {
            var modal = document.getElementById("cardModal");
            modal.style.display = "block";
            var img = document.getElementById("img01");
            img.setAttribute('src', cardDivSrc);
        }
    )
})

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}