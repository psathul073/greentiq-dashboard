import express from "express";
import { addSale, fetchSales } from "../controllers/sales.controller.js";

const router = express.Router();

router.get("/sales", fetchSales);

router.post("/sales", addSale);

export default router