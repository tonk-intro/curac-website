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

const currentUrl = window.location.href;
let fileName = currentUrl.split("/").pop();

if (!fileName.includes("html")) {
  fileName = "index.html";
}

const navLinks = document.querySelectorAll("a[href='" + fileName + "'");
navLinks.forEach((link) => {
  link.parentElement.classList.add("active");
});
