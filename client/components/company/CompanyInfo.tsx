"use client";

import { Company } from "@/types";
import Icon from "../ui/Icon";

type CompanyInfoProp = {
    company: Company | null
}

function CompanyInfo({ company } : CompanyInfoProp) {
  return (
      <div className=" w-full inline-flex items-center justify-between ">
          <div className=" flex items-center gap-2.5">
              <Icon name="greenTec" className=" text-2xl rounded-full p-1 bg-green-200 text-green-600" />
              <div>
                  <h1 className=" text-lg font-medium">{ company ? company.name : "GreenTech Pvt Ltd"}</h1>
                  <p className="text-sm font-medium text-zinc-500">{ company ? company.address : "loading..."}</p>
              </div>
          </div>
          <button aria-label="More options" className="p-1.5 rounded-full bg-gray-100 text-gray-500 border border-transparent hover:border-gray-400  cursor-pointer" >
              <Icon name="more" />
          </button>
      </div>
  )
}

export default CompanyInfo