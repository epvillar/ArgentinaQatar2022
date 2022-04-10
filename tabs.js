/*ver en video 4.48.00*/
// Bariloche 
// selecciono
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

// le agrego el eventlistener click
// agrego la callback function para identificar el click
about.addEventListener("click", function (e) {
    // console.log(e.target)
    // si clickeo un button me da la id y se ejecuta la function
    // si clickeo en otro lugar me da undefined y no se ejecuta
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });

    // display class active
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// selecciono
const about1 = document.querySelector(".about1");
const btns1 = document.querySelectorAll(".tab-btn1");
const articles1 = document.querySelectorAll(".content1");

// le agrego el eventlistener click
// agrego la callback function para identificar el click
about1.addEventListener("click", function (e) {
    // console.log(e.target)
    // si clickeo un button me da la id y se ejecuta la function
    // si clickeo en otro lugar me da undefined y no se ejecuta
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns1.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // hide other articles
    articles1.forEach(function (article) {
      article.classList.remove("active");
    });

    // display class active
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// San Martin de los Andes
const about2 = document.querySelector(".about2");
const btns2 = document.querySelectorAll(".tab-btn2");
const articles2 = document.querySelectorAll(".content2");

// le agrego el eventlistener click
// agrego la callback function para identificar el click
about2.addEventListener("click", function (e) {
    // console.log(e.target)
    // si clickeo un button me da la id y se ejecuta la function
    // si clickeo en otro lugar me da undefined y no se ejecuta
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns2.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // hide other articles
    articles2.forEach(function (article) {
      article.classList.remove("active");
    });

    // display class active
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// Ushuahia
// San Martin de los Andes
const about3 = document.querySelector(".about3");
const btns3 = document.querySelectorAll(".tab-btn3");
const articles3 = document.querySelectorAll(".content3");

// le agrego el eventlistener click
// agrego la callback function para identificar el click
about3.addEventListener("click", function (e) {
    // console.log(e.target)
    // si clickeo un button me da la id y se ejecuta la function
    // si clickeo en otro lugar me da undefined y no se ejecuta
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns3.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // hide other articles
    articles3.forEach(function (article) {
      article.classList.remove("active");
    });

    // display class active
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// Calafate

// Ushuahia
// San Martin de los Andes
const about4 = document.querySelector(".about4");
const btns4 = document.querySelectorAll(".tab-btn4");
const articles4 = document.querySelectorAll(".content4");

// le agrego el eventlistener click
// agrego la callback function para identificar el click
about4.addEventListener("click", function (e) {
    // console.log(e.target)
    // si clickeo un button me da la id y se ejecuta la function
    // si clickeo en otro lugar me da undefined y no se ejecuta
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns4.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // hide other articles
    articles4.forEach(function (article) {
      article.classList.remove("active");
    });

    // display class active
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// Doha
const about5 = document.querySelector(".about5");
const btns5 = document.querySelectorAll(".tab-btn5");
const articles5 = document.querySelectorAll(".content5");

// le agrego el eventlistener click
// agrego la callback function para identificar el click
about5.addEventListener("click", function (e) {
    // console.log(e.target)
    // si clickeo un button me da la id y se ejecuta la function
    // si clickeo en otro lugar me da undefined y no se ejecuta
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns5.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // hide other articles
    articles5.forEach(function (article) {
      article.classList.remove("active");
    });

    // display class active
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});