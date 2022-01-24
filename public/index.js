const generateButton = document.getElementById('generate-button');
const numberH3 = document.getElementById('number-h3');

generateButton.addEventListener('click', () => generate());

function generate(){
    let number = Math.floor(Math.random() * 10001);
    numberH3.innerText = number;
}