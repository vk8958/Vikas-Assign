const num1input = document.getElementById('num1')

const num2input = document.getElementById('num2')

const op = document.getElementById('operator')

const button = document.getElementById('btn')
const button2 = document.getElementById('btn2')
const result = document.getElementById('result')

console.log(operator.value)

button.addEventListener('click', calculate)



function calculate() {

    const num1 = Number(num1input.value)
    const num2 = Number(num2input.value)
    switch (op.value) {
        case '+':
            result.innerHTML = num1 + num2
            break;
        case '-':
            result.innerHTML = num1 - num2
            break;
        case '*':
            result.innerHTML = num1 * num2
            break;
        case '/':
            result.innerHTML = num1 / num2
            break
        default:
            break;
    }

}

button2.addEventListener('click',xyz)

function xyz(){
    const textchange=document.getElementsByClassName('text')
    console.log(textchange)
    textchange[0].innerHTML='bye'
}