import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import env from "dotenv";
import pool from "./config/db.js";
import companyRoute from "./routes/company.routes.js";
import salesRoute from "./routes/sales.routes.js";

env.config();

const app = express();


app.use(cors());
app.use(express.json());

app.set('trust proxy', 1);

// DB Connection Test...
pool.query("SELECT 1")
    .then(() => console.log("PostgreSQL connected and ready."))
    .catch((err) => console.error("Initial DB connection failed:", err.message));

// For health check..
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Greentiq API is live.");
});

// Routes...
app.use("/api", companyRoute);
app.use("/api", salesRoute);

// Global error handler..
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(`Error: ${err.message}`);
    res.status(500).json({
        success: false,
        error: "Internal Server Error",
        details: process.env.NODE_ENV === 'development' ? err.message : "Contact support..."
    });
});

export default app;