const about = document.querySelectorAll('.aboutl')
const education = document.querySelectorAll('.educationl')
const training = document.querySelectorAll('.trainingl')
const project = document.querySelectorAll('.projectl')
const others = document.querySelectorAll('.othersl')

const slideLength = about.querySelectorAll('#right-section')


about.addEventListener('click', () => changeSlide())
const changeSlide = () => {
document.querySelectorAll('#right-section').addClassList()
}