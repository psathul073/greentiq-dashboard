import type { Request, Response } from "express";
import pool from "../config/db.js";

export const fetchSales = async (req: Request, res: Response) => {
    try {
        const { companyId } = req.query;

        const result = await pool.query(
            "SELECT * FROM sales WHERE company_id = $1 ORDER BY sale_date DESC",
            [companyId]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Sales data not found." });
        }
        res.status(200).send(result.rows);
    } catch (error) {
        res.status(500).json({ message: "Error fetching sales." });
    }
};


export const addSale = async (req: Request, res: Response) => {
    try {
        const { sale_name, status, amount, stage, stage_percentage, next_activity } = req.body;

        const saleQuery = `INSERT INTO sales (company_id, sale_name, status, amount, stage, next_activity, sale_date, stage_percentage) 
        VALUES ( $1, $2, $3, $4, $5, $6, $7, $8)`;
        const saleValues = [1, sale_name, status, amount, stage, next_activity, new Date(), stage_percentage ?? null];

        await pool.query(saleQuery, saleValues);

        res.status(201).send({ type: "success", message: "Sale added successfully." });

    } catch (error) {
        res.status(500).json({ type: "error", message: "Error adding sale." });
    }
};