// randomheaders.js
 const image = document.querySelector('img[data-random-image]');
const sources = image.dataset.randomImage.split(" ");
const randomSource = sources[Math.floor(Math.random() * sources.length)]

image.setAttribute('src', randomSource);
