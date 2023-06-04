var images = [];
var currentIndex = 0;
var image = document.getElementById("image");
var imageAmount = 2;

for(i = 0; i<imageAmount; i++){
    images.push('indeximages/' + (i + 1) + '.png')
}

window.onload = function(){

    changeImage();
}

function changeImage() {

    //Make sure the new image is not the same as the previous
    let indexIsNew = false;
    while (!indexIsNew) {

        var newIndex = Math.floor(Math.random() * images.length);
        if(newIndex !== currentIndex){
            currentIndex = newIndex;
            indexIsNew = true;

        }
    }

    image.src = images[currentIndex];
}