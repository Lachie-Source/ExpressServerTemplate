const router = require("express").Router();

router.get("/string", (req, res) => {
  res.send("Hello, World");
});
router.get("/json", (req, res) => {
  res.json({ message: 'This is more commenly used then "res.send"' });
});

module.exports = router;
