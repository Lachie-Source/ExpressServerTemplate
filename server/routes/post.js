const router = require("express").Router();

router.post("/headers", (req, res) => {
  res.send(req.headers.example.toUpperCase());

  // To use this:
  // fetch("locahlist:<PORT Here></PORT>/headers").then(res => res.text())
});

module.exports = router;
