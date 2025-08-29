import { Router } from "express";
import usersController from "../controllers/users/users.controller.js";
const router = Router();

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.put("/:id", usersController.updateUser);
router.post("/", usersController.createUser);
router.delete("/:id", usersController.deleteUser);

export default router;
