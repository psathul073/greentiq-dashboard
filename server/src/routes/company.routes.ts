import express from "express";
import { fetchCompany } from "../controllers/company.controller.js";

const router = express.Router();

router.get("/company/:id", fetchCompany);

export default router