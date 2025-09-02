import { Router } from "express";
const router = Router();
import usersController from "../controllers/users/users.controller.js";

<<<<<<< Updated upstream
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.put('/:id', usersController.updateUser);
router.post('/', usersController.createUser);
router.delete('/:id', usersController.deleteUser);
=======
router.get("/", usersController.getAllUsers);
router.post("/register", usersController.createUser);
router.post("/login", usersController.loginUser);
router.post("/logout", usersController.logoutUser);
router.get("/session", usersController.sessionUser);
router.get("/auth/google", usersController.googleLogin);
router.post("/auth/google/save", usersController.googleSave);
router.get("/:id", usersController.getUserById);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);
>>>>>>> Stashed changes

export default router;