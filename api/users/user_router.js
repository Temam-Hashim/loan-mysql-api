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
import { checkToken } from "../../auth/token_validation.js";

router.post("/", checkToken, createUser);
router.get("/", checkToken, getUsers);
router.patch("/:id", checkToken, updateUser);
router.delete("/:id", checkToken, deleteUser);
router.get("/:id", checkToken, getUserById);
router.post("/login", login);
export default router;
