// este file tiene la explicación

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
// selection
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// console.log(items)

// future date newDate(year, nomth, day, hour, minutes) months are 0 index based
let futureDate = new Date(2022, 10, 11, 5, 0);
// console.log(futureDate);

// ahora queremos capturar years, hours y minutes, que son los más fáciles
// para ponerlos en el html giveaway
const year = futureDate.getFullYear();
const hours = futureDate.getHours(); 
const minutes = futureDate.getMinutes();
// console.log(year, hours, minutes); me da 2022 11 30

// ahora ponemos el año en giveaway.textContent
// giveaway.textContent = `giveaway ends on ${year} ${hours}:${minutes}am`;

// ahora vamos por el month
let month = futureDate.getMonth();
//console.log(month); // esto nos da 4 -recoredar 0 index based
// para que nos de May necesitamos referirnos al array con los months
// console.log(months[month]) // esto nos da May
month = months[month];
// console.log(month);//me da May
//giveaway.textContent = `giveaway ends on ${year} ${month} ${hours}:${minutes}am`;

// ahora vamos por el weekday - 0 based index, Sunday = 0
// const weekday = futureDate.getDay();
// console.log(weekday); // me da 3, Wednesday
const weekday = weekdays[futureDate.getDay()];
// console.log(weekday); // me da Wednesday

// ahora vamos por day
const date = futureDate.getDate();
// console.log(date);// me da 25
// giveaway.textContent = `giveaway ends on ${date} ${month} ${year} ${hours}:${minutes}am`;

giveaway.textContent = `el primer partido, Senegal - Países Bajos comienza:  ${weekday}, ${date} ${month} ${year} 
${hours}:${minutes}am`;

// 5.24.45 - ahora pasamos al countdown counter
// tenemos que convertir la future date en miliseconds y también la current date
// luego tenemos que restar future - current y eso nos da cuanto falta en ms
const futureTime = futureDate.getTime();
// console.log(futureTime); // me da 1653489000000 ms
// hacemos esto que una función

function getRemainingTime(){
const today = new Date().getTime();
// console.log(today) // me da 1649166231616
const t = futureTime - today; 
// console.log(t);

// ahora tenemos que convertir t en days, hours, minutes, secs
// 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr

  // estos son values in miliseconds de days, hour y minute
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values con el valor de t
  // % representa el remainder
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  // console.log(days, hours, minutes, seconds);

  // set values array
  // if values are less than 10 we want zeros in front
  const values = [days, hours, minutes, seconds];

  function format(item){
    if(item < 10){
      return item = `0${item}`
    }
      return item
  }

  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  });


  // 5.47.25 una vez que pasamos el future day esto me da day -1
  // con esto lo arreglamos
  if(t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry this giveaway 
    has expired</h4>`
  }
}
  // actualizacion countdown - call function and how 
  // often - everysecond 1000
  let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime();

/* SCROLL*/

// ********** 3.48.00 - set date ************
const dates = document.getElementById("dates");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

// el height del nav bar lo vamos a calcular dynamic, por eso en css se pone:
// links-container{
//    height: 0;
//    overflow: hidden;
//} El metodo se llama getBoundingClientRect()

navToggle.addEventListener("click", function() {
    //linksContainer.classList.toggle('show-links'); //esto se usa cuando no calculamos en forma
    //dynamic el height they nav bar, o sea, cuando en css ponemos 

    const linksHeight = links.getBoundingClientRect().height;
    //console.log(height)

    const containerHeight = linksContainer.getBoundingClientRect().height;
    //console.log(containerHeight);

    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
    //console.log(linksContainer.getBoundingClientRect())
});

// ********** fixed navbar - cuando el scroll supera el height del navbar se vuelve fixed
    // estas const se usan para fixed navbar
    const navbar = document.getElementById("nav");
    const topLink = document.querySelector(".top-link"); //este es el button

window.addEventListener("scroll", function() {
    //console.log(window.pageYOffset);//number of pixels of vertical scroll
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    //console.log(navbar.getBoundingClientRect().height)
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

//esto para el button que por default esta hidden - 500 es arbitrario
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

// ********** smooth scroll - 4.15.00************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
    //prevent default behaviour
    link.addEventListener("click", (e) => {
        e.preventDefault();

    // navigate to specific spot 
    // la page no se está posicionando exactamente en home, about... 
    // por la height de la navbar fixed
    // para arreglar esto hace lo siguiente

        const id = e.currentTarget.getAttribute("href").slice(1);
        //console.log(id);
        const element = document.getElementById(id);

        //calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        
        // ahora usa fixedNav to hold a value to see whether navbar has
        // fixed-nav or not
        const fixedNav = navbar.classList.contains("fixed-nav");
        
        // con los 3 valores: navHeight, containerHeight y fixedNav
        // hizo el cálculo para sacar la height del navbar

        //ahora queremos saber la posición, si es home, about.... usamos offsetTop()
        let position = element.offsetTop - navHeight;
        //console.log(position);

        //ahora si navbar es fixed restamos la height
        if(!fixedNav) {
            position = position - navHeight;
        }
        
        // ahora para el caso de small width tambien se elimina la heigth del container
        if(navHeight > 82) {
            position = position + containerHeight;
        }


        // ahora to scroll to that position usando scrollTo
        window.scrollTo({
            left: 0,
            top: position,
        });

        //ahora we close the link
        linksContainer.style.height = 0;
    });
});
