// //var folder = "/images/products/";
// folder = 'http://0.0.0.0:8000/products.html';

// $.ajax({
//     url : folder,
//     success: function (data) {
//         $(data).find("img").attr("src", function (i, val) {
//             if( val.match(/\.(jpe?g|png|gif)$/) ) { 
//                 //$("body").append( "<img src='"+ folder + val +"'>" );
//                 console.log(val);
//                 //$("body").append( folder + val );
//                 //console.log( "<div class=\"cards\"> <div data-tab=\"virtualReality\" class=\"card\"> <div class=\"img-wrapper\"> <img src='"+ folder + val +"'> </div> <div class=\"summary\"> <p>Virtual Reality</p> </div> </div>" );
//                 // $("body").append( "<div class=\"cards\"><div data-tab=\"virtualReality\" class=\"card\"><div class=\"img-wrapper\"><img src='"+ folder + val +"'> </div><div class=\"summary\"><p>Virtual Reality</p></div></div>" );
//             } 
//         });
//     }
// });

var dir = "products.html";
var fileextension = ".jpg";
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: 'products.html',
    success: function (data) {
        //List all .png file names in the page
        $(data).find("img").each(function () {
            var filename = this.src;
            $("body").append("<img src='" + filename + "'>");
        });
    }
});