"use client";

function ActivityList() {
  return (
    <div className="my-2">

      <h2 className="font-semibold mb-4">Activities</h2>
      <div className=" grid grid-cols-2 items-center gap-1.5 text-sm text-gray-800 my-5">
        <p className="opacity-80"> 6/10/2024</p> <p className="text-[#1672ce] cursor-pointer">Follow-up call</p>
        <p className="opacity-80"> 2/10/2024</p> <p className="text-[#1672ce] cursor-pointer">Quote sent</p>
        <p className="opacity-80"> 23/09/2024</p> <p className="text-[#1672ce] cursor-pointer">Prospect meeting</p>
        <p className="opacity-80"> 22/09/2024</p> <p className="text-[#1672ce] cursor-pointer">Intro meeting</p>
      </div>

      <hr className=" text-gray-300" />

    </div>
  )
}

export default ActivityList