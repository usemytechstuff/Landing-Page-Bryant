class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.left_button = document.querySelector('.left-button');
        this.right_button = document.querySelector('.right-button');
        this.images = document.querySelectorAll('div.carousel > img');
        this.left_button.addEventListener('click', () => this.slider(-1));
        this.right_button.addEventListener('click', () => this.slider(1));
        this.images.forEach((image,i) => {
            image.id = `img-${1+i}`; i+1;
        })
    }

    slider (number) {
        this.images2 = document.querySelectorAll('div.carousel > img');
        this.images2.forEach((image,i) => {
            var z = (image.id.split('-'))[1]; 
             z = Number(z); 
             z = z + (1*number);
             if (z == 5) {z =1} else if (z==0) {z=4} else z=z;
             image.id = `img-${z}`
        })
        // var imageID = "";
        // for (i=0; i < images2.length; i++) {
        //         var w = image.id; //"img1"
        //         var x = w.split('-');
        //         var y = x[1];
        //         var z = Number(y);
        //         image.id += "img-" +z+i;

        // }
        

    }

}

image0 = document.querySelectorAll('div.carousel > img#img1');

image0.id;

let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
document.querySelector("body > div.carousel > img:nth-child(3)")