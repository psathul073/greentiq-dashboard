"use client";

import { Company } from "@/types";



type CompanyTabsProp = {
    company: Company | null;
    activeTab: string;
}



function CompanyTabs({ activeTab, company }: CompanyTabsProp) {
    return (
        <div className=" pt-2 border-t border-gray-200" >
            {activeTab === "Company" && (
                company ?
                    <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4 text-sm overflow-hidden">

                        <p className="text-gray-500">Email: </p>
                        <p className="font-medium text-[#1672ce]">{company.email}</p>

                        <p className="text-gray-500">Phone: </p>
                        <p className="font-medium text-[#1672ce]">{company.phone}</p>

                        <p className="text-gray-500">Web address: </p>
                        <p className="font-medium text-[#1672ce]">{company.webaddress}</p>

                        <p className="text-gray-500">Country: </p>
                        <p className="font-medium">{company.country}</p>

                        <p className="text-gray-500">Category: </p>
                        <p className="font-medium">{company.category}</p>

                        <p className="text-gray-500">VAT Number: </p>
                        <p className="font-medium">{company.vat}</p>

                        <p className="text-gray-500">Code: </p>
                        <p className="font-medium">{company.code}</p>

                        <p className="text-gray-500">Business: </p>
                        <p className="font-medium">{company.business}</p>

                    </div>
                    : <p className="text-sm text-gray-600">loading...</p>
            )}

            {activeTab === "Interest" && (
                <p className="text-sm text-gray-600">
                    Interest list will appear her...
                </p>
            )}

            {activeTab === "Note" && (
                <p className="text-sm text-gray-600">
                    Note list will appear here...
                </p>
            )}

            {activeTab === "Market data" && (
                <p className="text-sm text-gray-600">
                    Market data list will appear here...
                </p>
            )}
            {activeTab === "Misc" && (
                <p className="text-sm text-gray-600">
                    Misc data list will appear here...
                </p>
            )}
        </div>
    )
}

export default CompanyTabs