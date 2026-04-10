async function postJob() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const budget = document.getElementById("budget").value;

  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify({ title, description, budget })
  });

  const data = await res.json();

  alert("Job Posted Successfully");
  window.location.href = "jobs.html";
}