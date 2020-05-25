const router = require("express").Router();
const Controller = require("../../controllers");

router.route("/")
  // .get(Controller.Tan.findByDate)
  .post(Controller.Tan.createTan);

router
  .route("/:date")
  .get(Controller.Tan.findByDate)
//   .delete(Controller.Tan.remove);

module.exports = router;