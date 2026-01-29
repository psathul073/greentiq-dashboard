"use client";

import Icon from "../ui/Icon";

function PreviewHeader() {
    return (
        <div className=" w-full h-10 inline-flex items-center justify-between border-b pb-2 mb-4 border-gray-200 text-gray-500">
            <div className=" inline-flex items-center gap-5 px-3 py-1.5  rounded-2xl text-sm  bg-gray-100">
                <Icon name="pSearch" className=" hover:scale-105 hover:text-gray-800 transition-colors cursor-pointer" />
                <Icon name="clock" className=" hover:scale-105 hover:text-gray-800 transition-colors cursor-pointer" />
                <Icon name=" reports" className=" hover:scale-105 hover:text-gray-800 transition cursor-pointer"  />
                <Icon name="settings" className=" hover:scale-105 hover:text-gray-800 transition-colors cursor-pointer"  />
            </div>
            <div className="border border-gray-400 rounded-full hover:scale-105 hover:text-gray-800 transition-colors cursor-pointer">
                <Icon name="arrowDown" className=" shrink-0" />
            </div>
        </div>
    )
}

export default PreviewHeader