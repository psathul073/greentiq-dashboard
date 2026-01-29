"use client";

type TabProp = {
    tabs: string[];
    activeTab: string;
    handleTab: (tab: string) => void;
}

function Tabs({ tabs, activeTab, handleTab }: TabProp) {

    return (
        <div className="flex items-center gap-3 py-2 overflow-x-auto">
            {tabs.map((tab) => (
                <div
                    key={tab}
                    onClick={() => handleTab(tab)}
                >
                    <button className={` px-3 py-1 text-sm font-medium rounded-full transition-colors duration-300 cursor-pointer ${activeTab === tab
                        ? 'bg-teal-800/20 text-teal-800'
                        : 'text-gray-500 hover:text-gray-700'
                        }`}>
                        {tab}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Tabs;
