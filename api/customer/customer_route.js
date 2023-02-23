import {
  createCustomer,
  getCustomerById,
  getCustomers,
  updateCustomer,
  deleteCustomer,
  login,
} from "./customer_controller.js";
import express from "express";
import { checkToken } from "../../auth/token_validation.js";
const router = express.Router();

router.post("/", createCustomer);
router.get("/", checkToken, getCustomers);
router.patch("/", checkToken, updateCustomer);
router.delete("/:id", checkToken, deleteCustomer);
router.get("/:id", checkToken, getCustomerById);
router.post("/login", login);

export default router;
