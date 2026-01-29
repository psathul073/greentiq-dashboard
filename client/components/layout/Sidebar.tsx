"use client";

import Link from "next/link";
import Icon from "../ui/Icon";

type Menu = {
    id: number;
    title: string;
    icon: string;
    isActive: boolean;
}

const menu: Menu[] = [
    {
        id: 1,
        title: "Dashboard",
        icon: "dashboard",
        isActive: false,
    },
    {
        id: 2,
        title: "Companies",
        icon: "building",
        isActive: true,
    },
    {
        id: 3,
        title: "Sales",
        icon: "sales",
        isActive: false,
    },
    {
        id: 4,
        title: "Contacts",
        icon: "contacts",
        isActive: false,
    },
    {
        id: 5,
        title: "Reports",
        icon: "reports",
        isActive: false,
    },
];


function Sidebar() {
    return (
        <aside className=" relative w-16 bg-teal-800 text-white flex flex-col items-center py-4 space-y-6">
            <div className="text-xl font-bold"><Icon name="diamond" /></div>

            <nav className="flex flex-col gap-4">

                {
                    menu.map((item, i) => (
                        <Link key={item.id || i} aria-label={item.title} href={"#"} className={`relative p-2.5 rounded-full group ${item.isActive ? 'bg-teal-700' : "cursor-not-allowed"} `}>
                            <Icon name={item.icon} />
                            <span className="invisible opacity-0 absolute top-1/2 -translate-y-1/2 left-15 px-2 py-1 rounded-lg bg-zinc-900 text-xs transition-all duration-300 group-hover:visible group-hover:opacity-100">
                                {item.title}
                            </span>

                        </Link>
                    ))
                }
            </nav>

            <div className=" h-full content-end ">
                <button aria-label="Settings" className=" relative group p-2.5 rounded-full cursor-pointer">
                    <Icon name={'settings'} />
                    <span className="invisible opacity-0 absolute top-1/2 -translate-y-1/2 left-15 px-2 py-1 rounded-lg bg-zinc-900 text-xs transition-all duration-300 group-hover:visible group-hover:opacity-100">Settings</span>
                </button>
            </div>

        </aside>
    )
}

export default Sidebar