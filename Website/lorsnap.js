function showOverview() {
    var image = document.getElementById('overview');

    if (image.style.visibility === 'hidden') {
        image.style.visibility = 'visible';
    } else {
        image.style.visibility = 'hidden';
    }
}

window.onload = function(){
    changeImage();
}

/**
 * Changes the image class in lorsnap.html
 */
function changeImage() {
    image.src = returnRandomImage('lorsnapimages', '.png', 3);
}

