"use client";

import CompanyHeader from "@/components/company/CompanyHeader";
import PageLayout from "@/components/layout/PageLayout";
import ActivityList from "@/components/preview/ActivityList";
import PreviewHeader from "@/components/preview/PreviewHeader";
import PreviewPanel from "@/components/preview/PreviewPanel";
import Stakeholders from "@/components/preview/Stakeholders";
import SalesTable from "@/components/sales/SalesTable";
import Tabs from "@/components/ui/Tabs";
import { useState } from "react";

const TABS: string[] = ["Activities", "Contacts", "Projects", "Sales", "Requests"];

export default function CompanyPage() {

  const [activeTab, setActiveTab] = useState<string>("Sales");

  return (

    <PageLayout>
      {/* Main content */}
      <main className="flex-1 min-w-0 space-y-6">
        <CompanyHeader />

        <div className="w-full bg-white rounded-2xl px-6 py-4 shadow-lg">
          <Tabs tabs={TABS} activeTab={activeTab} handleTab={(tab) => setActiveTab(tab)} />

          {activeTab === "Sales" && (
            <SalesTable />
          )}

          {activeTab === "Activities" && (
            <p className="text-sm text-gray-600">
              Activities table will appear her...
            </p>
          )}

          {activeTab === "Contacts" && (
            <p className="text-sm text-gray-600">
              Contacts table will appear her...
            </p>
          )}
          {activeTab === "Projects" && (
            <p className="text-sm text-gray-600">
              Projects table will appear her...
            </p>
          )}

          {activeTab === "Requests" && (
            <p className="text-sm text-gray-600">
              Requests table will appear her...
            </p>
          )}

        </div>

      </main>

      {/* Right panel */}
      <aside className=" max-lg:hidden w-80 bg-white rounded-2xl p-4">
        <PreviewHeader />
        <PreviewPanel />
        <ActivityList />
        <Stakeholders />
      </aside>

    </PageLayout>
  );
}
