const sliderContainer = document.querySelector('.slider-container')



const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')


const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')



const slidesLength = slideRight.querySelectorAll("div").length


let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength-1)*100}vh`


upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))



const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight

    /*The clientHeight property returns the viewable height of an element in pixels, including padding, but not the border, scrollbar or margin.
The reason why the "viewable" word is specified, is because if the element's content is taller than the actual height of the element, this property will only return the height that is visible (See "More Examples").
*/

if(direction==='up'){
    activeSlideIndex++
    if(activeSlideIndex>slidesLength-1){
        activeSlideIndex=0
    }
}else if(direction==='down'){
    activeSlideIndex--;
    if(activeSlideIndex<0){
        activeSlideIndex=slidesLength-1
    }
}
slideRight.style.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex*sliderHeight}px)`
}
