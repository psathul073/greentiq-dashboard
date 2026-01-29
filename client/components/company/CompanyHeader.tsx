"use client";

import { useEffect, useState } from "react";
import Tabs from "../ui/Tabs";
import CompanyInfo from "./CompanyInfo";
import CompanyTabs from "./CompanyTabs";
import type { Company } from "@/types";
import { fetchCompany } from "@/services/api";


const TABS: string[] = ["Company", "Interest", "Note", "Market data", "Misc"];

function CompanyHeader() {
    const [activeTab, setActiveTab] = useState<string>("Company");
    const [company, setCompany] = useState<Company | null>(null);

    useEffect(() => {

        const loadData = async () => {
            try {
                const result = await fetchCompany();
                setCompany(result);
            } catch (error) {
                const err = error as Error;
                console.error("Fetch error:", err.message);
            }
        };

        loadData();
    }, []);


    return (
        <div className=" w-full bg-white rounded-2xl px-6 py-4 shadow-lg">

            {/* Header */}
            <CompanyInfo company={company} />

            {/* Tab headers */}
            <Tabs tabs={TABS} activeTab={activeTab} handleTab={(tab) => setActiveTab(tab)} />

            {/* Tab content */}
            <CompanyTabs activeTab={activeTab} company={company} />

        </div>
    )
}

export default CompanyHeader