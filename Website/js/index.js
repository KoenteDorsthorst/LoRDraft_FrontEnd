window.onload = function(){
    image = returnRandomImage('indeximages', '.png', 2);
    indexwall = document.getElementById('indexwall');
    indexwall.style.backgroundImage = 'url("' + image + '")';
}