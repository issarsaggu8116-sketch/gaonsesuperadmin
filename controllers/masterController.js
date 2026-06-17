import { City } from "../models/City.js";
import { Admin } from "../models/User.js"; // ✅ CHANGE HERE

// 🏙 CREATE CITY
export const createCity = async (req, res) => {
  const city = await City.create({ name: req.body.name });
  res.json({ success: true, city });
};

// 📃 GET CITIES
export const getCities = async (req, res) => {
  const cities = await City.find();
  res.json({ success: true, cities });
};

// 🏙 UPDATE CITY
export const updateCity = async (req, res) => {
  const city = await City.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );

  res.json({ success: true, city });
};

// 🏙 DELETE CITY
export const deleteCity = async (req, res) => {
  await City.findByIdAndDelete(req.params.id);
  res.json({ success: true, message: "City deleted" });
};

// 👨‍💼 CREATE ADMIN
export const createAdmin = async (req, res) => {
  const { name, email, password, city } = req.body;

  const admin = await Admin.create({
    name,
    email,
    password,
    city,
    role: "admin",
  });

  res.json({ success: true, admin });
};

// 📃 GET ADMINS
export const getAdmins = async (req, res) => {
  const admins = await Admin.find().populate("city");
  res.json({ success: true, admins });
};

// 👨‍💼 UPDATE ADMIN
export const updateAdmin = async (req, res) => {
  const { name, email, city, isActive } = req.body;

  const admin = await Admin.findByIdAndUpdate(
    req.params.id,
    { name, email, city, isActive },
    { new: true }
  );

  res.json({ success: true, admin });
};

// 👨‍💼 DELETE ADMIN
export const deleteAdmin = async (req, res) => {
  await Admin.findByIdAndDelete(req.params.id);
  res.json({ success: true, message: "Admin deleted" });
};