const barsWrapper = document.getElementById("menu-bars-wrapper");
const navbar = document.getElementById("navbar");
function toggelMenu() {
  barsWrapper.classList.toggle("open");
  navbar.classList.toggle("open");
  if (navbar.classList.contains("open")) {
    window.onresize = mobileMenuScreenResize;
  } else {
    window.onresize = null;
  }
}
function mobileMenuScreenResize() {
  if (window.innerWidth > 808) {
    barsWrapper.classList.remove("open");
    navbar.classList.remove("open");
  }
}

function goToHome(e) {
  window.location.replace(`./index.html?${e}`);
}
