import {
  createFAQ,
  getFAQ,
  getRandomFAQ,
  updateFAQ,
  deleteFAQ,
  getFAQById,
} from "./faq_controller.js";
import express from "express";
const router = express.Router();
// import { checkToken } from "../../auth/token_validation.js";

router.post("/", createFAQ);
router.get("/", getFAQ);
router.get("/random", getRandomFAQ);
router.patch("/:id", updateFAQ);
router.delete("/:id", deleteFAQ);
router.get("/:id", getFAQById);

export default router;
