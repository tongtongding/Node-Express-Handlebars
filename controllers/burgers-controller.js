const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", async (req, res) => {
  const data = await burger.selectAll();

  res.render("index", { burgers: data });
});

router.post("/api/burgers", async (req, res) => {
  const data = await burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured]);

  res.json({ id: data.insertId });
});

router.put("/api/burgers/:id", async (req, res) => {
  let condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  const data = await burger.updateOne({ devoured: req.body.devoured }, condition);

  if (data.changedRows === 0) {
    res.status(404).end();
  }

  res.status(200).end();
});

// Export routes for server.js to use.
module.exports = router;