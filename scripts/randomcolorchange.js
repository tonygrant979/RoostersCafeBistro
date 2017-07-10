function init() {

    var h1tags = document.getElementsByTagName("h1");

    h1tags[0].onclick = changeColor;
}

function changeColor() {

    this.innerHTML = "Roosters Cafe Bistro!";

    this.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function toggleImg() {

    var img = document.getElementById("bannerImg");
    var isImageVisible = (img.style.visibility != "visible");
    img.style.visibility = isImageVisible ? "visible" : "hidden";

}

onload = init;