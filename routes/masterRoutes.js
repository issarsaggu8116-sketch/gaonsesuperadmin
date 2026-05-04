import express from "express";
import {
  createCity,
  getCities,
  updateCity,
  deleteCity,
  createAdmin,
  getAdmins,
  updateAdmin,
  deleteAdmin,
} from "../controllers/masterController.js";
import { isMaster } from "../middleware/isMaster.js";

const router = express.Router();

// 🏙 City
router.post("/city/create", isMaster, createCity);
router.get("/city", getCities);
router.put("/city/:id", isMaster, updateCity);
router.delete("/city/:id", isMaster, deleteCity);

// 👨‍💼 Admin
router.post("/admin/create", isMaster, createAdmin);
router.get("/admins", isMaster, getAdmins);
router.put("/admin/:id", isMaster, updateAdmin);
router.delete("/admin/:id", isMaster, deleteAdmin);

export default router;