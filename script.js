const containerElem = document.getElementById("container");
const paths = document.querySelectorAll(".fill");
const rects = document.querySelectorAll(".rect");

containerElem.onmouseenter = function() {

rects.forEach((rect) => {
    rect.style.transform = `rotate(${Math.random() * 90 - 45}deg)`;
    rect.style.top = `${Math.random() * 100 - 50}px`;
    rect.style.left = `${Math.random() * 100 - 50}px`;

    setTimeout(() => {
        rect.style.transform = `rotate(0deg)`;
        rect.style.top = `0`;
        rect.style.left = `0`;
    }, 1000);
})

paths.forEach((path) => {
    path.style.fill = `hsl(${Math.random() * 360}, 80%, 60%)`;

    setTimeout(() => {
        path.style.fill = `black`;
    }, 1000);
})


}
