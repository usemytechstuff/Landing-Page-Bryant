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

//carousel = new Carousel(carousel);


document.querySelector("body > div.carousel > img:nth-child(3)")