// const btn = document.getElementById("btn");
// const btn = document.getElementsByTagName("button")[2];
const btn = document.querySelector("#btn");
function myFunction() {
    alert("Hello! I am an alert box!");
}

btn.addEventListener("click", () => {
    alert("Hello! I am an another alert box!");
});

const header = document.querySelector(".header");
const headerChild = header.children;
const headerChildArray = Array.from(headerChild);

const detailsChildArray = Array.from(document.querySelector(".details").children);

headerChildArray.forEach((element) => {
    element.addEventListener("click", () => {
        const i = headerChildArray.indexOf(element);
        for(let j = 0; j < headerChildArray.length; j++) {
            if(j !== i) {
                headerChildArray[j].classList.remove("active");
                detailsChildArray[j].classList.remove("active");
            }else{
                headerChildArray[j].classList.add("active");
                detailsChildArray[j].classList.add("active");
            }
        }
    });
});