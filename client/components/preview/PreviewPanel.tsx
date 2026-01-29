"use client";

import Icon from "../ui/Icon";

function PreviewPanel() {
    return (
        <div className="mb-4">
            <h2 className=" text-xs text-gray-400">PREVIEW</h2>

            <div className=" flex flex-row items-center gap-2 mt-3">
                <Icon name="rupee" className=" shrink-0 p-1.5 rounded-full text-xl text-teal-800 bg-teal-800/20" />
                <div>
                    <h2 className="font-medium text-[#1672ce]">45 Components - RTS</h2>
                    <p className="text-gray-500">₹17,344</p>
                </div>
            </div>

            <div className=" grid grid-cols-2 items-center gap-1.5 text-sm text-gray-800 my-5">
                <p className="opacity-80">Company :</p> <p className="text-[#1672ce] cursor-pointer">GreenTech Pvt Ltd</p>
                <p className="opacity-80"> Contact :</p> <p className="text-[#1672ce] cursor-pointer">Athul PS</p>
                <p className="opacity-80"> Sale date :</p> <p>12/1/2025</p>
                <p className="opacity-80"> Owner :</p> <p>Vishnu</p>
                <p className="opacity-80">Status :</p> <p>{'Open(30%)'}</p>
            </div>

            <hr className=" text-gray-200" />
        </div>
    )
}

export default PreviewPanel