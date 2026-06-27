"use client";

import { BarChart2, Table2, CalendarDays } from "lucide-react";
import type { ViewMode } from "@/@custom-type";

interface HeaderProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export default function Header({ viewMode, onViewModeChange }: HeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="relative">
        <select className="appearance-none border border-gray-300 rounded px-3 py-2 pr-8 text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-teal-400 min-w-[160px]">
          <option>Tất cả các quỹ</option>
          <option>Quỹ Tăng trưởng</option>
          <option>Quỹ Cân bằng</option>
          <option>Quỹ Bảo toàn</option>
        </select>
        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▼</span>
      </div>

      <div className="flex items-center border border-gray-300 rounded bg-white px-3 py-2 text-sm text-gray-700 gap-2">
        <span>01/07/2020 - 10/08/2020</span>
        <CalendarDays size={16} className="text-gray-400" />
      </div>

      <button className="bg-[#E8A838] hover:bg-[#d4952e] text-white font-semibold px-5 py-2 rounded text-sm transition-colors">
        Tra cứu
      </button>

      <div className="ml-auto flex items-center border border-gray-300 rounded overflow-hidden">
        <button
          onClick={() => onViewModeChange("chart")}
          className={`p-2 transition-colors ${viewMode === "chart" ? "bg-teal-600 text-white" : "bg-white text-gray-500 hover:bg-gray-100"}`}
          title="Xem biểu đồ"
        >
          <BarChart2 size={18} />
        </button>
        <button
          onClick={() => onViewModeChange("table")}
          className={`p-2 transition-colors ${viewMode === "table" ? "bg-teal-600 text-white" : "bg-white text-gray-500 hover:bg-gray-100"}`}
          title="Xem bảng"
        >
          <Table2 size={18} />
        </button>
      </div>
    </div>
  );
}
