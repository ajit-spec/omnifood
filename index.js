document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(
    '.mobile-nav-icon[name="menu-outline"]'
  );
  const closeIcon = document.querySelector(
    '.mobile-nav-icon[name="close-outline"]'
  );
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  const logoLink = document.querySelector(".logo-link");
  logoLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  menuIcon.addEventListener("click", function () {
    mobileNav.style.transform = "translateX(0)";
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", function () {
    mobileNav.style.transform = "translateX(100%)";
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileNav.style.transform = "translateX(100%)";
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // document.querySelector(this.getAttribute("href")).scrollIntoView({
    //   behavior: "smooth",
    // });

    const targetElement = document.querySelector(this.getAttribute("href"));
    const offset = 120; // Adjust this value as needed
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", function () {
  const header = document.querySelector(".main-header");
  if (window.scrollY > 500) {
    header.classList.add("sticky-nav");
  } else {
    header.classList.remove("sticky-nav");
  }
});
