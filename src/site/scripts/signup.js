const button =document.querySelector(".signup-link");
const extUrl = 'https://romantic-swirles-f428fe.netlify.com/';


button.addEventListener('click', 
//     function(event) {
//     location.href = "https://romantic-swirles-f428fe.netlify.com/";
// })
function (event) {
  windowObjectReference = window.open(
    extUrl
  );
}
)

