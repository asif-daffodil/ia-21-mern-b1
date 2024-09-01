const slider = document.querySelector('.slider');
const sliderChildren = slider.children;
const sliderChildrenArray = Array.from(sliderChildren);
let currentSlide = 0;
const activeClassChangeFunc = (index) => {
    if(currentSlide >= sliderChildrenArray.length) {
        currentSlide = 0;
    }
    sliderChildrenArray.forEach((child, index) => {
        if(index === currentSlide) {
            child.classList.add('active');
        }else{
            child.classList.remove('active');
        }
    });
}
let slideInterval =  setInterval(() => {
    activeClassChangeFunc();
    currentSlide++;
}, 3000);

slider.addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

slider.addEventListener('mouseout', () => {
    slideInterval = setInterval(() => {
        if(currentSlide >= sliderChildrenArray.length) {
            currentSlide = 0;
        }
        activeClassChangeFunc();
        currentSlide++;
    }, 3000);
});