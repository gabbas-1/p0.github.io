// nav bar click Scroll to section logic starts here //
const logoBtn = document.getElementById("nav-logo");
// const homeBtn = document.getElementById("homeBtn");
const theoryBtn = document.getElementById("theoryBtn");
const numbersBtn = document.getElementById("numbersBtn");
const artifactsBtn = document.getElementById("artifactsBtn");
const P0Btn = document.getElementById("P0Btn");
// const learnMore = document.getElementById("learnMore");
logoBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var myElement = document.getElementById("idea");
  var topPos = myElement.offsetTop;
  document.getElementById("snapClass").scrollTop = topPos - 90;
});
P0Btn.addEventListener("click", function (event) {
  event.preventDefault();
  var myElement = document.getElementById("P0");
  var topPos = myElement.offsetTop;
  document.getElementById("snapClass").scrollTop = topPos - 90;
});
theoryBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var myElement = document.getElementById("concept");
  var topPos = myElement.offsetTop;
  if (screen.availWidth - window.innerWidth === 0) {
    document.getElementById("snapClass").scrollTop = topPos;
  } else {
    document.getElementById("snapClass").scrollTop = topPos - 40;
  }
});
numbersBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var myElement = document.getElementById("colorsFeelings");
  var topPos = myElement.offsetTop;
  document.getElementById("snapClass").scrollTop = topPos;
});
artifactsBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var myElement = document.getElementById("purpose");
  var topPos = myElement.offsetTop;
  if (window.innerWidth > 821) {
    document.getElementById("snapClass").scrollTop = topPos;
  } else {
    document.getElementById("snapClass").scrollTop = topPos - 40;
  }
});

navigator.sayswho = (function () {
  var ua = navigator.userAgent,
    M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*([\d\.]+)/i);

  return M[1];
})();

if (navigator.sayswho !== "Firefox") {
  window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  });
}

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
const logohomeBtn = document.getElementById("mobile-nav-logo");
const mobiletheoryBtn = document.getElementById("mobile-theoryBtn");
const mobilenumbersBtn = document.getElementById("mobile-numbersBtn");
const mobileArtifactsBtn = document.getElementById("mobile-artifactsBtn");
const mobileP0Btn = document.getElementById("mobile-p0Btn");

logohomeBtn.addEventListener("click", () => {
  var myElement = document.getElementById("idea");
  var topPos = myElement.offsetTop;
  barsWrapper.classList.toggle("open");
  navbar.classList.toggle("open");
  document.getElementById("snapClass").scrollTop = topPos - 40;
});
mobileP0Btn.addEventListener("click", () => {
  barsWrapper.classList.toggle("open");
  navbar.classList.toggle("open");
  var myElement = document.getElementById("P0");
  var topPos = myElement.offsetTop;
  document.getElementById("snapClass").scrollTop = topPos - 40;
});
mobiletheoryBtn.addEventListener("click", () => {
  barsWrapper.classList.toggle("open");
  navbar.classList.toggle("open");
  var myElement = document.getElementById("concept");
  var topPos = myElement.offsetTop;
  document.getElementById("snapClass").scrollTop = topPos - 40;
});
mobilenumbersBtn.addEventListener("click", () => {
  barsWrapper.classList.toggle("open");
  navbar.classList.toggle("open");
  var myElement = document.getElementById("colorsFeelings");
  var topPos = myElement.offsetTop;
  document.getElementById("snapClass").scrollTop = topPos - 40;
});
mobileArtifactsBtn.addEventListener("click", () => {
  barsWrapper.classList.toggle("open");
  navbar.classList.toggle("open");
  var myElement = document.getElementById("purpose");
  var topPos = myElement.offsetTop;
  document.getElementById("snapClass").scrollTop = topPos - 40;
});

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    const tabContent = document.getElementsByClassName("tabcontent");
    document
      .getElementById("menuTab")
      .children[1].classList.add("fa-chevron-down");
    document
      .getElementById("menuTab")
      .children[1].classList.remove("fa-chevron-up");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove("tabContentHide");
    }
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        var myElement = document.getElementById("colorsFeelings");
        var topPos = myElement.offsetTop;
        if (window.innerWidth > 821) {
          document.getElementById("snapClass").scrollTop = topPos;
        } else {
          document.getElementById("snapClass").scrollTop = topPos - 40;
        }
        openDropdown.classList.remove("show");
      }
    }
  }
};

// Handeling queried section received from 404 page
// scrolling to the right queried section & cleaning the url from any params
document.addEventListener("DOMContentLoaded", async () => {
  var receivedParam = window.location.search;
  var cleanedParam = receivedParam.substring(1);

  if (cleanedParam) {
    if (
      !localStorage.getItem("sectionName") ||
      localStorage.getItem("sectionName") !== cleanedParam
    ) {
      localStorage.setItem("sectionName", `${cleanedParam}`);
      window.location.replace("/");
    }
  } else {
    var param = localStorage.getItem("sectionName");
    if (param) {
      var myElement = document.getElementById(`${param}`);
      var topPos = myElement.offsetTop;
      if (window.innerWidth > 808) {
        if (cleanedParam === "idea") {
          document.getElementById("snapClass").scrollTop = topPos - 90;
        }
        if (cleanedParam === "concept") {
          if (screen.availWidth - window.innerWidth === 0) {
            document.getElementById("snapClass").scrollTop = topPos;
          } else {
            document.getElementById("snapClass").scrollTop = topPos - 40;
          }
        }

        if (cleanedParam === "colorsFeelings") {
          document.getElementById("snapClass").scrollTop = topPos;
        }

        if (cleanedParam === "purpose") {
          if (screen.availWidth - window.innerWidth === 0) {
            document.getElementById("snapClass").scrollTop = topPos - 64;
          } else {
            document.getElementById("snapClass").scrollTop = topPos - 74;
          }
        }
      }

      if (window.innerWidth <= 808) {
        if (cleanedParam === "purpose") {
          document.getElementById("snapClass").scrollTop = topPos + 360;
        } else {
          document.getElementById("snapClass").scrollTop = topPos - 40;
        }
      }

      localStorage.removeItem("sectionName");
    }
  }

  /* whatsapp form sending */
  const form = document.getElementById("contactForm");
  const whatsappLink = document.getElementById("whatsappLink");
  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");

  function updateWhatsAppLink() {
    const name = nameInput.value || "Unknown";
    const message = messageInput.value || "No message provided";

    // Format the message for WhatsApp
    const whatsappMessage = `Hi! My name is ${name}.

Message: ${message}`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Update the WhatsApp link
    whatsappLink.href = `https://wa.me/+201121115811?text=${encodedMessage}`;
  }

  // Update link when user types in any field
  nameInput.addEventListener("input", updateWhatsAppLink);
  messageInput.addEventListener("input", updateWhatsAppLink);

  // Also update on click to ensure latest data
  whatsappLink.addEventListener("click", function (e) {
    // Check if form is valid
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
      return;
    }
    updateWhatsAppLink();
  });

  // Initialize with empty values
  updateWhatsAppLink();
});

function sendToWhatsApp(event) {
  event.preventDefault();

  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const messageInput = document.getElementById("message");

  // Check if form is valid
  if (!form.checkValidity()) {
    form.reportValidity();
    return false;
  }

  const name = nameInput.value.trim() || "Unknown";
  const message = messageInput.value.trim() || "No message provided";

  const whatsappMessage = `Hi! My name is ${name}.

Message: ${message}`;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/+201121115811?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
  return false;
}

window.onbeforeunload = null;
window.addEventListener("beforeunload", function(e) {
  e.preventDefault();
  delete e.returnValue; // Removes any "unsaved changes" warning
});