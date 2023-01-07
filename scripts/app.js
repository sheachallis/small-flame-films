const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navBar = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // TOGGLE NAVBAR

    navBar.classList.toggle("nav-active");

    //ANIMATE LINKS

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.2s ease forwards ${
          index / 20 + 0.2
        }s`;
      }
    });

    //ANIMATE BURGER

    burger.classList.toggle("toggle");
  });
};

navSlide();
