async function loadJobs() {
  const res = await fetch("http://localhost:5000/api/jobs");
  const jobs = await res.json();

  const container = document.getElementById("jobs");
  container.innerHTML = "";

  jobs.forEach(job => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.description}</p>
      <p><strong>Budget:</strong> ₹${job.budget}</p>
    `;
    container.appendChild(div);
  });
}

loadJobs();