const router = require("express").Router();
const Controller = require("../../controllers");

router
  .route("/")
  .get(Controller.Yesh.findAll)
  .post(Controller.Yesh.createWord);

router
  .route("/:word")
  .get(Controller.Yesh.findByWord)
  .delete(Controller.Yesh.remove);

module.exports = router;