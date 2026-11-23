
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// ==========================================
// SJICHOSSO FIREBASE CONFIGURATION
// ==========================================

const firebaseConfig = {
  apiKey: "AIzaSyA6JJ8SIdb3-ZXhv_hYy0oyuYCECLQRHVg",
  authDomain: "sjichosso.firebaseapp.com",
  projectId: "sjichosso",
  storageBucket: "sjichosso.firebasestorage.app",
  messagingSenderId: "849406364609",
  appId: "1:849406364609:web:16fb63a57207fbe0e8fd40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
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

// ==========================================
// MEMBERSHIP REGISTRATION FORM
// ==========================================

const joinForm = document.getElementById("joinForm");
const formMessage = document.getElementById("formMessage");

if (joinForm) {
  joinForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!joinForm.reportValidity()) return;

    const submitButton = joinForm.querySelector(
      'button[type="submit"]'
    );

    const name = joinForm.elements["name"].value.trim();
    const college = joinForm.elements["college"].value.trim();
    const group = joinForm.elements["group"].value.trim();

    if (
      name.length === 0 ||
      name.length >= 100 ||
      college.length === 0 ||
      college.length >= 150 ||
      group.length >= 60
    ) {
      formMessage.textContent =
        "Tafadhali hakikisha taarifa zako zimejazwa kwa usahihi.";

      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Inatuma maombi...";

    formMessage.textContent = "";

    try {
      await addDoc(collection(db, "registrations"), {
        name: name,
        college: college,
        group: group,
        at: serverTimestamp()
      });

      formMessage.textContent =
        "Hongera! Maombi yako yametumwa kikamilifu.";

      formMessage.className = "success-message";

      joinForm.reset();

    } catch (error) {
      console.error("SJICHOSSO Firestore Error:", error);

      formMessage.textContent =
        "Samahani, maombi hayakutumika. Tafadhali jaribu tena.";

      formMessage.className = "error-message";

    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Wasilisha Maombi";
    }
  });
}
