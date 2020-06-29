
const images = [
    "img/imagesGallery/01.jpg",
    "img/imagesGallery/02.jpg",
    "img/imagesGallery/03.jpg",
    "img/imagesGallery/04.jpg",
    "img/imagesGallery/05.jpg",
    "img/imagesGallery/06.jpg",
    "img/imagesGallery/06.jpg",
    "img/imagesGallery/07.jpg",
    "img/imagesGallery/08.jpg",
    "img/imagesGallery/09.jpg",
    "img/imagesGallery/10.jpg",
    "img/imagesGallery/11.jpg",
    "img/imagesGallery/12.jpg",
    "img/imagesGallery/13.jpg",
    "img/imagesGallery/14.jpg",
    "img/imagesGallery/15.jpg",
    "img/imagesGallery/16.jpg",
    "img/imagesGallery/17.jpg",
    "img/imagesGallery/18.jpg",
    "img/imagesGallery/19.jpg",
    "img/imagesGallery/20.jpg",
];

let container = document.getElementById("gallery");

function createImageNode(imgSrc) {
let img = document.createElement('img');
img.className = "img-fluid";
img.src = imgSrc;
img.alt = "";
return img;
}



images.forEach(img => {
    let imgDiv = document.createElement("div");
    imgDiv.className = "col-lg-3 col-md-4 col-xs-6 thumbnail"
    
    let a = document.createElement('a');
    a.href = img;
    a.className = "spotlight";
    
    container.appendChild(imgDiv);
    imgDiv.appendChild(a);
    a.appendChild(createImageNode(img));
});



