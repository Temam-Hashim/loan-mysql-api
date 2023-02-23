import {
  createService,
  getServiceById,
  getServices,
  updateService,
  deleteService,
  getServiceByName,
} from "./service_controller.js";
import express from "express";
const router = express.Router();
import { checkToken } from "../../auth/token_validation.js";

router.post("/", checkToken, createService);
router.get("/", checkToken, getServices);
router.patch("/:id", checkToken, updateService);
router.delete("/:id", checkToken, deleteService);
router.get("/:id", checkToken, getServiceById);
router.post("/name", checkToken, getServiceByName);

export default router;
