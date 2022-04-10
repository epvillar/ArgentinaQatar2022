// Element.getBoundingClientRect() method returns the size of an element
// and its position relative to the viewport.

// pageYOffset is a read - only window property that returns the number
// of pixels the document has been scrolled vertically.

// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element,
// in pixels

// ********** 3.48.00 - set date ************
const date = document.getElementById("date");
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


