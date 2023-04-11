import {
  createAddress,
  getAddressByCustomerId,
  getAddresses,
  updateAddress,
  deleteAddress,

} from "./address_controller.js";
import express from "express";
const router = express.Router();



router.post("/",createAddress);
router.get("/",getAddresses);
router.patch("/:id",updateAddress);
router.delete("/:id", deleteAddress);
router.get("/:id", getAddressByCustomerId);

export default router;
