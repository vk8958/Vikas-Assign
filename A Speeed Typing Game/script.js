const timer = document.getElementsByClassName("timer");
const content = document.getElementsByClassName('content')
const typePlace = document.getElementsByClassName('typing-container')

typePlace[0].addEventListener('input', () => {
   
    const arrayQuote = content[0].querySelectorAll('span')
    const arrayValue = typePlace[0].value.split('')
    let correct = true;
    console.log()
    arrayQuote.forEach((characterSpan, index) => {

        const character = arrayValue[index];
        
        if (character == null) {
            characterSpan.classList.remove('incorrect')
            characterSpan.classList.remove('correct')
            correct = false
        }
        else if (character === characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false
        }

    })
    if (correct) {
        getQuotes()
    }

})

function timeRestart() {

    let tm = 0;
    setInterval(function () {
        tm = tm + 1
        timer[0].innerHTML = tm;
    }, 1000)

}


let apiQuotes = []

async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes"

    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()

        randomText()
    } catch (error) {
        console.log(error)
    }

}


function randomText() {

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote)

    /*content[0].textContent = quote.text;*/
    content[0].innerHTML = ''
    quote.text.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.classList.add('incorrect')
        characterSpan.innerText = character
        content[0].appendChild(characterSpan)
        
    })
    typePlace[0].value=null 
}



timer[0].value = null;
getQuotes()
timeRestart()