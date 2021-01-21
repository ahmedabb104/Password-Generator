const pwoutput = document.getElementById('pwoutput');
const copy = document.getElementById('copy');
const length = document.getElementById('length');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const generate = document.getElementById('generate');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_+=<>?";

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}


function generatePassword() {
    const pwlength = length.value;
    let password = "";

    for (let i = 0; i < pwlength; i++){
        const val = generateVal();
        if (val == undefined){
            continue;
        }else{
            password += val;
        }
    }

    pwoutput.innerText = password;
}

function generateVal() {
    const vals = [];
    if (upper.checked) {
        vals.push(getUppercase());
    }
    if (lower.checked) {
        vals.push(getLowercase());
    }
    if (number.checked) {
        vals.push(getNumber());
    }
    if (symbol.checked) {
        vals.push(getSymbol());
    }

    return vals[Math.floor(Math.random() * vals.length)];
}

generate.addEventListener('click', generatePassword);

copy.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = pwoutput.innerText;

    if (!password) { return; }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("Password copied to clipboard.");
})