"use client";

type Colors = {
    [key: string]: string;
    Open: string;
    Sold: string;
    Lost: string;
    Stalled: string;
}

function SaleStatusBadge({ status }: { status: string }) {

    const colors: Colors = {
        Open: "bg-blue-100 text-blue-700",
        Sold: "bg-green-100 text-green-700",
        Lost: "bg-red-100 text-red-700",
        Stalled: "bg-yellow-100 text-yellow-700",
    };

    return (
        <span className={`px-2.5 py-1 rounded-xl text-xs ${colors[status]}`}>
            {status}
        </span>
    )
}

export default SaleStatusBadge