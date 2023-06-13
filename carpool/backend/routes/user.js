const {
  getUserByIdController,
  getUserByTypeController,
  getUsersController,
  patchUserController,
  deleteUserController,
  LoginUserController,
  createUserController,
} = require("../controllers/user");

const { Router } = require("express");

const router = Router();
const { upload } = require("../utils/upload");

router.get("/", getUsersController);
router.get("/:id", getUserByIdController);
router.get("/:id", getUserByTypeController);

router.post("/", upload.single("license"), createUserController);
router.post("/login", LoginUserController);

router.delete("/:id", deleteUserController);
router.patch("/", patchUserController);

module.exports = router;
