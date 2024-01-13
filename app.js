const  hour = document.querySelector('.hour');
const  minute = document.querySelector('.minute');
const  second = document.querySelector('.second');
const  time = document.querySelector('.time');
const date = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct","Nov","Dec"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.textContent = "Dark Mode";
    } else {
        html.classList.add('dark');
        e.target.textContent = "Light Mode";
    }
});

function setTime(){
    const timeNow = new Date();
    const month = timeNow.getMonth();
    const day = timeNow.getDay();
    const hours = timeNow.getHours();
    const hoursForClock = hours % 12;
    const minutes = timeNow.getMinutes();
    const seconds = timeNow.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hour.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minute.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    second.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    time.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    date.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${timeNow.getDate()}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();

setInterval(setTime, 1000);