export interface Company {
    name: string,
    email: string;
    phone: string;
    address: string,
    country: string;
    webaddress: string;
    category: string;
    code: string;
    vat: string;
    business: string;
}

export type Sale = {
    id?: number;
    sale_name: string;
    company_id?: string | number;
    status: "Open" | "Lost" | "Sold" | "Stalled";
    stage: "Proposal" | "Lost" | "Sold" | "Stalled";
    stage_percentage?: number | null;
    amount: number;
    sale_date?: string;
    next_activity: string;
};
