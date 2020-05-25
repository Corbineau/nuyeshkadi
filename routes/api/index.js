// const path = require("path");
const router = require("express").Router();
const tanRoutes = require("./tan");
const yeshRoutes = require("./yesh");

// Main Routes
router.use("/tan", tanRoutes);
router.use("/yesh", yeshRoutes);

// For anything else, render the html page
// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "../../client/public/index.html"));
//   });

module.exports = router;