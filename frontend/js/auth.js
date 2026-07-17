// frontend/js/auth.js

const API_BASE = window.location.origin.replace(/:\d+$/, ":5000"); // Assumes backend on port 5000

async function handleSignUp(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const res = await fetch(`${API_BASE}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json();
  if (res.ok) {
    alert("Account created! Please sign in.");
    window.location.href = "signin.html";
  } else {
    alert(data.message || "Sign-up failed.");
  }
}

async function handleSignIn(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const res = await fetch(`${API_BASE}/api/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("token", data.token);
    window.location.href = "/pages/recommendations.html";
  } else {
    alert(data.message || "Sign-in failed.");
  }
}

document
  .getElementById("signup-form")
  ?.addEventListener("submit", handleSignUp);
document
  .getElementById("signin-form")
  ?.addEventListener("submit", handleSignIn);
