const mobileNav = document.querySelector(".mobile-nav");

const showMenuButton = document.getElementById("showMenuButton");

const navItems = mobileNav.querySelector("ul");

showMenuButton.addEventListener("click", (e) => {
  if (!navItems.style.display || navItems.style.display == "none") {
    navItems.style.display = "flex";
    showMenuButton.innerText = "Hide Menu";
  } else {
    navItems.style.display = "none";
    showMenuButton.innerText = "Show Menu";
  }
});
