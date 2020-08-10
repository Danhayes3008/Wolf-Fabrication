const navSlide = () => {
    const burger = document.querySelector(".menu");
    const nav = document.querySelector(".nav-links");
    //Toggle Nav
    burger.addEventListener("click", () => {
        //toggle View
        nav.classList.toggle("nav-active");
    })
};

  navSlide();