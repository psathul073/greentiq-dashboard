"use client";

import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

type PageLayoutType = { children: React.ReactNode }

function PageLayout({ children }: PageLayoutType) {
    return (
        <div className="flex min-h-screen text-gray-800 bg-gray-100">
            <Sidebar />

            <div className="flex flex-col min-w-0 flex-1">
                <TopBar />

                <div className="flex flex-1 min-w-0 p-4 gap-6 ">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PageLayout