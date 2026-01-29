"use client";

import { useEffect, useState } from "react";
import SaleStatusBadge from "./SaleStatusBadge";
import Icon from "../ui/Icon";
import AddSaleModal from "./AddSaleModal";
import { fetchSales } from "@/services/api";
import { Sale } from "@/types";

//Formatter for rupee..
const formatter: Intl.NumberFormat = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
});
// For date..
const formatDate = (date?: string | null) =>
    date ? new Date(date).toLocaleDateString("en-IN") : "-";


const PAGE_SIZE = 4;


function SalesTable() {

    const [sales, setSales] = useState<Sale[]>([]);
    const [page, setPage] = useState<number>(1);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);


    const refreshSales = async () => {
        try {
            setLoading(true);
            const data = await fetchSales();
            setSales(data);
            setPage(1);
        } catch (error) {
            const err = error as Error;
            console.error("Fetch error:", err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            try {
                const data = await fetchSales();
                setSales(data);
            } catch (error) {
                const err = error as Error;
                console.error("Fetch error:", err.message);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);


    // Pagination logic...
    const start = (page - 1) * PAGE_SIZE;
    const paginatedSales = sales.slice(start, start + PAGE_SIZE);
    const totalPages = Math.ceil(sales.length / PAGE_SIZE) || 1;

    return (
        <div className=" relative w-full max-w-full mt-2 border border-gray-200 rounded-xl">
            {loading ? (

                <p className="p-2 text-sm text-gray-600">Loading...</p>

            ) : sales.length ? (
                <div className="overflow-x-auto scroll-smooth">
                    <table className="w-full min-w-max text-sm my-3 text-gray-600">
                        <thead>
                            <tr className="text-left border-b border-gray-200">
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Sale Date</th>
                                <th className="px-4 py-2">Amount</th>
                                <th className="px-4 py-2">Stage</th>
                                <th className="px-4 py-2">Next Activity</th>
                                <th className="px-4 py-2">Sale Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedSales.map((sale) => (
                                <tr key={sale.id} className="border-b border-gray-200">
                                    <td className="px-4 py-2 whitespace-nowrap"><SaleStatusBadge status={sale.status} /></td>
                                    <td className="px-4 py-2 whitespace-nowrap">{formatDate(sale.sale_date)}</td>
                                    <td className="px-4 py-2 whitespace-nowrap">{formatter.format(Number(sale?.amount) || 0)}</td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        {sale.stage}
                                        {sale.stage_percentage !== null && (
                                            <span className="text-gray-500"> ({sale.stage_percentage}%)</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">{formatDate(sale.next_activity)}</td>
                                    <td className="px-4 py-2 whitespace-nowrap">{sale.sale_name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) :
                <p className="py-2 px-4 text-sm text-gray-600">No sales found</p>
            }

            {/* Actions */}
            <div className=" flex items-center justify-between text-sm text-gray-600 px-4 py-2 border-t border-gray-200">

                {/* Table actions */}
                <div className=" inline-flex  items-center gap-4">
                    <button onClick={() => setOpenModal(true)} className=" flex items-center gap-1.5 hover:text-gray-700 cursor-pointer"><Icon name="addC" className="text-green-500" />Add</button>
                    <button className=" flex items-center gap-1.5 cursor-not-allowed"><Icon name="delete" className="text-red-500" />Delete</button>
                </div>

                {/* Pagination */}
                <div className=" space-x-4 ">
                    <button
                        className={` px-3 py-1 rounded-xl  ${page === 1 ? 'opacity-50 cursor-not-allowed ' : 'hover:text-gray-700 hover:bg-gray-100 cursor-pointer'} `}
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                    >
                        Prev
                    </button>
                    <span>{page} / {totalPages}</span>
                    <button
                        className={` px-3 py-1 rounded-xl  ${page === totalPages ? 'opacity-50 cursor-not-allowed ' : 'hover:text-gray-700 hover:bg-gray-100 cursor-pointer'} `}
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>


            {/* Modal */}
            {openModal && (
                <AddSaleModal
                    onClose={() => setOpenModal(false)}
                    onSuccess={refreshSales}
                />
            )}

        </div>
    )
}

export default SalesTable