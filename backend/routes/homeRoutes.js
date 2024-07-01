const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "Welcome to the Home Route" });
});

module.exports = router;
