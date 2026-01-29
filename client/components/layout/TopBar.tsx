"use client";

import Icon from "../ui/Icon";


function TopBar() {
  return (
    <div className="p-3 w-full flex items-center justify-evenly ">

      <div className=" w-fit flex items-center text-teal-800 text-sm font-medium">

        <button aria-label="Create New" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-l-2xl bg-white hover:bg-zinc-50 transition-colors border-r border-zinc-100">
          <Icon name="building" />
          <span>New</span>
        </button>

        <button aria-label="More options" className="px-2 py-2 rounded-r-2xl bg-white hover:bg-zinc-50 transition-colors flex items-center justify-center cursor-pointer">
          <Icon name="arrowDown" />
        </button>

      </div>

      {/* Search bar*/}
      <div className=" w-full inline-flex items-center justify-center">
        <div className=" max-sm:hidden w-full max-w-80 flex items-center gap-1.5 px-4 py-1.5 bg-white text-gray-600 rounded-2xl">
          <Icon name="search" />
          <input type="text" name="search" className="w-full outline-0" placeholder="Search for anything" />
        </div>
      </div>


      {/* Profile  */}
      <div className="w-fit flex items-center gap-5 text-gray-600">
        <button aria-label="Notification view" className=" relative p-1.5 rounded-full hover:bg-zinc-200 transition-colors cursor-pointer">
          <Icon name="bell" />
          <span className=" absolute left-4 bottom-4 px-1 rounded-full text-xs bg-red-700 text-white">4</span>
        </button>

        <button aria-label="Profile view" className=" max-sm:hidden p-1.5 rounded-full hover:bg-zinc-200 transition-colors cursor-pointer">
          <Icon name="user" />
        </button>

        <button aria-label="Right sidebar view" className="p-1.5 rounded-full hover:bg-zinc-200 transition-colors cursor-pointer">
          <Icon name="sidebarR" />
        </button>
      </div>
    </div>
  )
}

export default TopBar