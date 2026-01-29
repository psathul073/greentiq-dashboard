import type { Request, Response } from "express";
import pool from "../config/db.js";

export const fetchCompany = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "SELECT * FROM companies WHERE id = $1", [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Company not found." });
        }

        res.status(200).json(result.rows[0]);

    } catch (error) {
        res.status(500).json({ message: "Error fetching company." });
    }
};

