const express = require("express");
const { auth, admin } = require("../middleware/auth");

const router = express.Router();

router.get("/profile", auth, (req, res) => {
  res.send(req.user);
});

router.get("/admin", auth, admin, (req, res) => {
  res.send({ message: "Admin access granted" });
});

module.exports = router;
