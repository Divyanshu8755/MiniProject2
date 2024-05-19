import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
import Doc from "../models/DoctorSchema.js"
const router = express.Router();



const secret = "eenfnkljekjrbfnlkernknelknfrbfkjbvkjrvkjbvbjkbvkbjebhrvjkhbbkjervvkenveklmvnkervnklrmk"; // Change to a long, random string

router.use(express.json());

// Signup route
router.post("/doctorSingUp", async (req, res) => {
  try {
    const { Name, image, Age, Experience, Qualification, password } = req.body;
    const existingDoctor = await Doc.findOne({ Name });
    if (existingDoctor) {
      return res.status(400).json({ message: "Doctor already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const doctor = new Doc({
      Name,
      image,
      Age,
      Experience,
      Qualification,
      password: hashedPassword,
    });

    // Save the doctor to the database
    await doctor.save();

    res.status(201).json({ message: "Doctor created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Login route
router.post("/doctorLogin", async (req, res) => {
  try {
    const { Name, password } = req.body;

    const doctor = await Doc.findOne({ Name });
    if (!doctor) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, doctor.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }


    const token = jwt.sign({ doctorId: doctor._id }, secret);
    console.log("Logged in")

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


export default router;