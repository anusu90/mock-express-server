var express = require("express");
var router = express.Router();

var sampleResponse = [
  {
    id: 1,
    name: "CBD",
  },
  {
    id: 2,
    name: "KETO",
  },
];

router.get("/", function (_req, res, _next) {
  res.send(sampleResponse);
});

module.exports = router;
