const imageContainer = document.querySelector('.image-container');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let x = 0;
let timer;
next.addEventListener("click", () => {
    x -= 45;
    clearTimeout(timer);
    updateGallery();
})
prev.addEventListener("click", () => {
    x += 45;
    clearTimeout(timer);
    updateGallery();
})

function updateGallery() {
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`
    timer = setTimeout(() => {
        x -= 45;
        updateGallery();
    }, 2000)
}