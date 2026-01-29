import { Sale } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const fetchCompany = async () => {
    try {
        const res = await fetch(`${API_URL}/company/1`);

        // Check error...
        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            throw new Error(errorData.details || `Error: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        const err = error as Error;
        console.error("Company fetch API error:", err.message);
        throw new Error;
    }

};

export const fetchSales = async () => {
    try {
        const res = await fetch(`${API_URL}/sales?companyId=1`);
        // Check errors..
        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            throw new Error(errorData.details || `Error: ${res.status}`);
        }
        return await res.json();

    } catch (error) {
        const err = error as Error;
        console.error("Sales fetch API error:", err.message);
        throw new Error;
    }

};

export const createSale = async (data: Sale) => {
    try {

        const res = await fetch(`${API_URL}/sales`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        // Check errors..
        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            throw new Error(errorData.details || `Error: ${res.status}`);
        }

        return await res.json();

    } catch (error) {
        const err = error as Error;
        console.error("Sales add API error:", err.message);
        throw new Error;
    }

};
