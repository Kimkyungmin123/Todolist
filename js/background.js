const images = [
    "01_M.jpg",
    "02_M.jpg",
    "03_M.jpg",
    "04_M.jpg",
    "05_M.jpg",
    "06_M.jpg",
    "07_M.jpg",
    "08_M.jpg",
    "09_M.jpg"

];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage=document.createElement("img");

bgImage.src=`img/${chosenImage}`;

document.body.appendChild(bgImage);

