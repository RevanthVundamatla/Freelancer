const express = require("express");
const Job = require("../models/Job");

const router = express.Router();

// Create Job
router.post("/", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json(job);
});

// Get All Jobs
router.get("/", async (req, res) => {
  const jobs = await Job.find().populate("postedBy");
  res.json(jobs);
});

module.exports = router;