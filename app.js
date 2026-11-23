
// =====================================
// SJICHOSSO - MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// =====================================
// SJICHOSSO - MEMBERSHIP FORM
// Firebase integration pending
// =====================================

const joinForm = document.getElementById("joinForm");
const formMessage = document.getElementById("formMessage");

if (joinForm) {
  joinForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!joinForm.reportValidity()) return;

    if (formMessage) {
      formMessage.textContent =
        "Fomu imejazwa. Mfumo wa kutuma maombi unasubiri kuunganishwa na Firebase.";
    }
  });
}
