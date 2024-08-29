const clock_time = document.querySelector('.clock_time');
const clock_date = document.querySelector('.clock_date');
const clock_week = document.querySelector('.clock_week');
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
days.forEach(day => {
    const span = document.createElement('span');
    span.style.cssText = `
        border: 1px solid #000;
        padding: 5px;
        border-radius: 5px;
    `
    span.innerHTML = day;
    clock_week.appendChild(span);
});
// clock_week.style.display = 'flex';
// clock_week.style.justifyContent = 'space-evenly';
clock_week.style.cssText = `
    margin: 10px 0;
    display: flex;
    justify-content: space-evenly;
    `;

const dateTime = () => {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const day = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    clock_time.innerHTML = `${hours}:${minutes}:${seconds}`;
    clock_date.innerHTML = `${day}/${month}/${year}`;
    const week = d.getDay();
    days.forEach((day, index) => {
        if (index === week) {
            clock_week.children[index].style.backgroundColor = '#000';
            clock_week.children[index].style.color = '#fff';
        } else {
            clock_week.children[index].style.backgroundColor = '#fff';
            clock_week.children[index].style.color = '#000';
        }
    });
}

dateTime();
setInterval(dateTime, 1000);

// localStorage

localStorage.setItem('name', 'Sakib Al Hasan');
localStorage.setItem('age', 37);

console.log(localStorage.getItem('name'));

// sessionStorage
sessionStorage.setItem('name', 'Tamim Iqbal');

// cookies
document.cookie = 'name=Shakib Al Hasan; expires=' + new Date(2024, 9, 10).toUTCString();
console.log(new Date(2024, 9, 10).toUTCString());