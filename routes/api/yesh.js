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
  .post(Controller.Yesh.updateWord)
  .delete(Controller.Yesh.removeWord);

module.exports = router;