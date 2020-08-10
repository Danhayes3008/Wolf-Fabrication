const navSlide = () => {
    const menuButton = document.querySelector(".menu");
    const nav = document.querySelector(".nav-links");
    //Toggle Nav
    menuButton.addEventListener("click", () => {
        //toggle View
        nav.classList.toggle("nav-active");
    })
};

  navSlide();