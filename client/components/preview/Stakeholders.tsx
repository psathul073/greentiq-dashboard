"use client";

import Icon from "../ui/Icon";

function Stakeholders() {
  return (
    <div className="my-3">
      <h2 className="font-semibold mb-4">Stakeholders</h2>

      <div className=" flex flex-col gap-3 text-sm text-gray-700 mt-5">
        <div className=" inline-flex items-center gap-2">
          <Icon name="user" className=" text-lg text-gray-600" />
          <p>James Vargas</p>
        </div>
        <div className=" inline-flex items-center gap-2"> 
          <Icon name="user" className=" text-lg text-gray-600" />
          <p>Lisa Jansson</p>
        </div>
      </div>

    </div>
  )
}

export default Stakeholders