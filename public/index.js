const digitsInput = document.getElementById('digits-input');
const generateButton = document.getElementById('generate-button');
const numberH3 = document.getElementById('number-h3');

generateButton.addEventListener('click', () => {
    const long = digitsInput.value;
    createPassword(long);
});

function createPassword(digits){
    let password = '';

    for(let i = 0; i < digits; i++){
        password += generate();
    }

    numberH3.innerHTML = password;
}

function generate(){
    let number = Math.floor(Math.random() * 10);
    return number;
}