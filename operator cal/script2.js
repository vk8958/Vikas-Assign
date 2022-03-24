const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const btn = document.getElementById('btn')
const result = document.getElementById('result')
const op = document.getElementById('operator')

btn.addEventListener('click', calculate)

function calculate() {


    const num11 = Number(num1.value)
    const num22 = Number(num2.value)

    if (num1.value === '' || num2.value === '') {
        window.alert('pls enter number')
    }

    switch (op.value) {
        case '+':
            result.innerHTML = num11 + num22
            break;
        case '-':
            result.innerHTML = num11 - num22
            break;
        case '*':
            result.innerHTML = num11 * num22
            break;
        case '/':
            result.innerHTML = num11 / num22
        default:
            break;
    }
}

const btn2 = document.getElementById('btn2')
const text = document.getElementsByClassName('text')
btn2.addEventListener('click', change)

function change() {
    text[0].innerHTML = 'vikas'
    text[1].innerHTML = 'vikas'
    text[2].innerHTML = 'vikas'
    text[3].innerHTML = 'vikas'
    text[4].innerHTML = 'vikas'
}