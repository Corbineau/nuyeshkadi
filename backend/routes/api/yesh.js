const router = require("express").Router();
const Controller = require("../../controllers");

router
  .route("/")
  .get(Controller.Yesh.findAll)
  .post(Controller.Yesh.createWord);

  router
  .route("/random")
  .get(Controller.Yesh.getRandomWord);

router
  .route("/:word")
  .get(Controller.Yesh.findByWord)
  .delete(Controller.Yesh.remove)
  .update(Controller.Yesh.update);

module.exports = router;