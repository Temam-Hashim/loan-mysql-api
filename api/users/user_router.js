import {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
  login,
} from "./user_controller.js";
import express from "express";
const router = express.Router();



router.post("/",createUser);
router.get("/",getUsers);
router.patch("/:id",updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUserById);
router.post("/login", login);
export default router;
