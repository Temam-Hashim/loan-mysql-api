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
// import { checkToken } from "../../auth/token_validation.js";

router.post("/", createService);
router.get("/", getServices);
router.patch("/:id", updateService);
router.delete("/:id", deleteService);
router.get("/:id", getServiceById);
router.post("/name", getServiceByName);

export default router;
