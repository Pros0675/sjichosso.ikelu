
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// ==========================================
// FIREBASE CONFIGURATION
// ==========================================

const firebaseConfig = {
  apiKey: "AIzaSyA6JJ8SIdb3-ZXhv_hYy0oyuYCECLQRHVg",
  authDomain: "sjichosso.firebaseapp.com",
  projectId: "sjichosso",
  storageBucket: "sjichosso.firebasestorage.app",
  messagingSenderId: "849406364609",
  appId: "1:849406364609:web:16fb63a57207fbe0e8fd40"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Barua pepe inayoruhusiwa na Firestore Rules
const ADMIN_EMAIL = "BARUA@PEPE.COM";

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
// MEMBERSHIP REGISTRATION
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
      !name ||
      name.length >= 100 ||
      !college ||
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
        name,
        college,
        group,
        at: serverTimestamp()
      });

      formMessage.textContent =
        "Hongera! Maombi yako yametumwa kikamilifu.";

      formMessage.className = "success-message";
      joinForm.reset();

    } catch (error) {
      console.error("Registration error:", error);

      formMessage.textContent =
        "Imeshindikana kutuma maombi. Tafadhali jaribu tena.";

      formMessage.className = "error-message";

    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Wasilisha Maombi";
    }
  });
}

// ==========================================
// ADMIN DASHBOARD ELEMENTS
// ==========================================

const loginSection = document.getElementById("loginSection");
const dashboardSection = document.getElementById("dashboardSection");

const adminLoginForm = document.getElementById("adminLoginForm");
const loginMessage = document.getElementById("loginMessage");
const loginButton = document.getElementById("loginButton");

const logoutButton = document.getElementById("logoutButton");
const adminIdentity = document.getElementById("adminIdentity");

const registrationsTable =
  document.getElementById("registrationsTable");

const registrationCount =
  document.getElementById("registrationCount");

const dashboardMessage =
  document.getElementById("dashboardMessage");

const registrationSearch =
  document.getElementById("registrationSearch");

const refreshButton =
  document.getElementById("refreshButton");

let allRegistrations = [];

// ==========================================
// ADMIN LOGIN
// ==========================================

if (adminLoginForm) {
  adminLoginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document
      .getElementById("adminEmail")
      .value.trim()
      .toLowerCase();

    const password =
      document.getElementById("adminPassword").value;

    if (email !== ADMIN_EMAIL.toLowerCase()) {
      loginMessage.textContent =
        "Akaunti hii haina ruhusa ya kuingia kama admin.";
      return;
    }

    loginButton.disabled = true;
    loginButton.textContent = "Inaingia...";
    loginMessage.textContent = "";

    try {
      await signInWithEmailAndPassword(auth, email, password);
      adminLoginForm.reset();

    } catch (error) {
      console.error("Login error:", error);

      loginMessage.textContent =
        "Imeshindikana kuingia. Hakikisha email na password ni sahihi.";

    } finally {
      loginButton.disabled = false;
      loginButton.textContent = "Ingia";
    }
  });
}

// ==========================================
// CHECK AUTHENTICATION STATUS
// ==========================================

if (loginSection && dashboardSection) {
  onAuthStateChanged(auth, async (user) => {
    if (user && user.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      loginSection.classList.add("hidden");
      dashboardSection.classList.remove("hidden");

      adminIdentity.textContent =
        "Umeingia kama: " + user.email;

      await loadRegistrations();

    } else {
      dashboardSection.classList.add("hidden");
      loginSection.classList.remove("hidden");

      if (user) {
        await signOut(auth);
        loginMessage.textContent =
          "Akaunti hii hairuhusiwi kufungua dashboard.";
      }
    }
  });
}

// ==========================================
// LOAD REGISTRATIONS FROM FIRESTORE
// ==========================================

async function loadRegistrations() {
  if (!registrationsTable) return;

  dashboardMessage.textContent = "Inapakia maombi...";
  registrationsTable.replaceChildren();

  try {
    const snapshot = await getDocs(
      collection(db, "registrations")
    );

    allRegistrations = snapshot.docs.map(item => ({
      id: item.id,
      ...item.data()
    }));

    allRegistrations.sort((a, b) => {
      const dateA = a.at?.toMillis?.() ?? 0;
      const dateB = b.at?.toMillis?.() ?? 0;
      return dateB - dateA;
    });

    registrationCount.textContent =
      String(allRegistrations.length);

    renderRegistrations(allRegistrations);

    dashboardMessage.textContent =
      allRegistrations.length
        ? "Maombi yamepakuliwa kikamilifu."
        : "Bado hakuna maombi yaliyopokelewa.";

  } catch (error) {
    console.error("Loading registrations error:", error);

    dashboardMessage.textContent =
      "Imeshindikana kupakua maombi. Kagua ruhusa za Firestore.";
  }
}

// ==========================================
// DISPLAY REGISTRATIONS
// ==========================================

function renderRegistrations(records) {
  if (!registrationsTable) return;

  registrationsTable.replaceChildren();

  if (records.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");

    cell.colSpan = 6;
    cell.textContent = "Hakuna maombi yanayolingana na utafutaji.";

    row.appendChild(cell);
    registrationsTable.appendChild(row);
    return;
  }

  records.forEach((record, index) => {
    const row = document.createElement("tr");

    const values = [
      String(index + 1),
      record.name || "",
      record.college || "",
      record.group || "",
      record.at?.toDate
        ? record.at.toDate().toLocaleString("sw-TZ")
        : "Muda haujapatikana"
    ];

    values.forEach(value => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");

    deleteButton.type = "button";
    deleteButton.textContent = "Futa";
    deleteButton.className = "admin-button delete-button";

    deleteButton.addEventListener("click", () => {
      deleteRegistration(record.id, deleteButton);
    });

    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);

    registrationsTable.appendChild(row);
  });
}

// ==========================================
// SEARCH REGISTRATIONS
// ==========================================

if (registrationSearch) {
  registrationSearch.addEventListener("input", () => {
    const term = registrationSearch.value
      .trim()
      .toLowerCase();

    const filtered = allRegistrations.filter(record => {
      const name = (record.name || "").toLowerCase();
      const college = (record.college || "").toLowerCase();
      const group = (record.group || "").toLowerCase();

      return (
        name.includes(term) ||
        college.includes(term) ||
        group.includes(term)
      );
    });

    renderRegistrations(filtered);
  });
}

// ==========================================
// DELETE REGISTRATION
// ==========================================

async function deleteRegistration(id, button) {
  const confirmed = window.confirm(
    "Una uhakika unataka kufuta ombi hili?"
  );

  if (!confirmed) return;

  button.disabled = true;
  button.textContent = "Inafuta...";

  try {
    await deleteDoc(doc(db, "registrations", id));

    dashboardMessage.textContent =
      "Ombi limefutwa kikamilifu.";

    await loadRegistrations();

  } catch (error) {
    console.error("Delete error:", error);

    dashboardMessage.textContent =
      "Imeshindikana kufuta ombi. Hakikisha una ruhusa za admin.";

    button.disabled = false;
    button.textContent = "Futa";
  }
}

// ==========================================
// REFRESH DASHBOARD
// ==========================================

if (refreshButton) {
  refreshButton.addEventListener("click", loadRegistrations);
}

// ==========================================
// ADMIN LOGOUT
// ==========================================

if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
      dashboardMessage.textContent =
        "Imeshindikana kutoka. Jaribu tena.";
    }
  });
}
