const {
  getTripByIdController,
  getTripController,
  deleteTripController,
  createTripController,
} = require("../controllers/trip");

const { Router } = require("express");

const router = Router();

router.get("/", getTripController);
router.get("/:id", getTripByIdController);
router.post("/", createTripController);
router.delete("/:id", deleteTripController);

module.exports = router;
