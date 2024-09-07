const mobileNav = document.querySelector(".mobile-nav");

const showMenuButton = document.querySelector("button");

const navItems = mobileNav.querySelector("ul");

showMenuButton.addEventListener("click", (e) => {
  if (!navItems.style.display || navItems.style.display == "none") {
    navItems.style.display = "block";
  } else {
    navItems.style.display = "none";
  }
});
