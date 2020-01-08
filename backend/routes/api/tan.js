const router = require("express").Router();
const Controller = require("../../controllers");

router.route("/")
  .get(Controller.Tan.findToday)
  .post(Controller.Tan.create);

router
  .route("/:date")
  .get(Controller.Tan.findByDate)
//   .delete(Controller.Tan.remove);

module.exports = router;