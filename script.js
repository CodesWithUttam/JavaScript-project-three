let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let dateShow = document.getElementById('date');
let timeShow = document.getElementById('time');
let theme = document.getElementById('theme');
let root = document.querySelector(':root');

let themeColor = getComputedStyle(root);

const clickedTheme = () =>{
    theme.classList.toggle('bx-moon');
    theme.classList.toggle('bx-sun');
    if (theme.classList.contains('bx-moon')){
        root.style.setProperty('--c-primary','#000000');
        root.style.setProperty('--c-secondry','#E0EAFC');
        root.style.setProperty('--c-extra','rgba(255,255,255,0.3)');
        root.style.setProperty('--c-filter','invert(0%) sepia(10%) saturate(39%) hue-rotate(192deg) brightness(93%) contrast(101%)');
    }else if(theme.classList.contains('bx-sun')){
        root.style.setProperty('--c-primary','white');
        root.style.setProperty('--c-secondry','#23272F');
        root.style.setProperty('--c-extra','rgba(0,0,0,0.3)');
        root.style.setProperty('--c-filter','rgba(0,0,0,0.3)');
        root.style.setProperty('--c-filter','invert(100%) sepia(0%) saturate(0%) hue-rotate(335deg) brightness(108%) contrast(101%)');
    }
    
}

theme.addEventListener('click',clickedTheme);



const analogTime = () =>{
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let year = date.getFullYear();
    let month = date.getMonth();
    let todayDate = date.getDate();
    let week = date.getDay();
    let monthCount = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let weekCount = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let getTime = date.toLocaleTimeString('en-US');

    // console.log(hh, mm, ss);
    
    sec.style.rotate = `${6 * ss}deg`;
    min.style.rotate = `${6 * mm}deg`;
    hour.style.rotate = `${30*hh + mm/2}deg`;
    dateShow.innerHTML = `${weekCount[week] + ', ' + todayDate + ' ' + monthCount[month] + ' ' + year}`;
    timeShow.innerHTML = `${getTime}`;
}

setInterval(analogTime, 1000);