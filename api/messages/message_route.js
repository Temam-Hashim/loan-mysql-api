import {
  createMessage,
  getMessageById,
  getMessages,
  updateMessage,
  deleteMessage,
} from "./message_controller.js";
import express from "express";
const router = express.Router();
// import { checkToken } from "../../auth/token_validation.js";

router.post("/", createMessage);
router.get("/", getMessages);
router.patch("/:id", updateMessage);
router.delete("/:id", deleteMessage);
router.get("/:id", getMessageById);

export default router;
