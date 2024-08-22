const accordionHeader = document.querySelectorAll(".accordion-header");
const accordionHeaderArray = Array.from(accordionHeader);

accordionHeaderArray.forEach((item) => {
    item.addEventListener("click", (e)=>{
        for(let i = 0; i < accordionHeaderArray.length; i++){
            if(accordionHeaderArray[i] !== e.target){
                accordionHeaderArray[i].classList.remove("active");
                accordionHeaderArray[i].nextElementSibling.classList.remove("active");
            }else{
                e.target.classList.toggle("active");
                e.target.nextElementSibling.classList.toggle("active");
            }
        }
    });
});