"use client";

import { useState } from "react";
import type { ViewMode } from "@/@custom-type";
import HeaderSection from "@/component/headerSection";
import Header from "@/section/header";
import ChartView from "@/screen/ChartView";
import TableView from "@/screen/TableView";

export default function TracuuDonViQuyPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("chart");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <HeaderSection />
        <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
          <Header viewMode={viewMode} onViewModeChange={setViewMode} />
          {viewMode === "chart" ? <ChartView /> : <TableView />}
        </div>
      </div>
    </div>
  );
}
