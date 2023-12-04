const image = document.getElementById("image");

image.addEventListener('mouseover', function() {
    image.src = "./images/banner-1.png"
})
image.addEventListener('mouseout', function() {
    image.src = "./images/banner-2.png"
})