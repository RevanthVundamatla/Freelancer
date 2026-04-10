const API = "https://freelancer-y87s.onrender.com";

function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}

async function loadJobs() {
  const loading = document.getElementById("loading");
  const jobList = document.getElementById("jobList");

  const res = await fetch(API + "/api/jobs");
  const jobs = await res.json();

  loading.style.display = "none";

  if (jobs.length === 0) {
    jobList.innerHTML = "<p>No jobs available</p>";
    return;
  }

  jobs.forEach(job => {
    const div = document.createElement("div");
    div.className = "job-card";
    div.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.description}</p>
      <p><b>Budget:</b> $${job.budget}</p>
    `;
    jobList.appendChild(div);
  });
}

loadJobs();
