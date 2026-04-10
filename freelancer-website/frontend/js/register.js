async function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  const res = await fetch("http://localhost:5000/api/auth/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ name, email, password, role })
  });

  const data = await res.json();

  alert("Registered Successfully");
  window.location.href = "login.html";
}