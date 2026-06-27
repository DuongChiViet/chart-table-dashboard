"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { tableRows } from "@/libs/mockData";
import FundSummaryTable from "@/section/FundSummaryTable";
import FundChangeSection from "@/section/FundChangeSection";

const TOTAL_PAGES = 5;

export default function TableView() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-4">
      {/* Data Table */}
      <div className="bg-white rounded border border-gray-200 overflow-hidden">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#4CAF93] text-white">
              <th className="text-left px-4 py-2.5 font-medium border border-[#3da882]">Ngày</th>
              <th className="text-center px-4 py-2.5 font-medium border border-[#3da882]">Quỹ Tăng trưởng</th>
              <th className="text-center px-4 py-2.5 font-medium border border-[#3da882]">Quỹ Cân bằng</th>
              <th className="text-center px-4 py-2.5 font-medium border border-[#3da882]">Quỹ Bảo toàn</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <tr key={row.date} className="bg-white">
                <td className="px-4 py-2.5 text-gray-700 border border-gray-200">{row.date}</td>
                <td className="px-4 py-2.5 text-center text-gray-700 border border-gray-200">{row.tangTruong.toFixed(2)}</td>
                <td className="px-4 py-2.5 text-center text-gray-700 border border-gray-200">{row.canBang.toFixed(2)}</td>
                <td className="px-4 py-2.5 text-center text-gray-700 border border-gray-200">{row.baoToan.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1 py-5 border-t border-gray-100">
          {/* Prev button — square, border, white bg */}
          <button
            className={`w-7 h-7 flex items-center justify-center rounded transition-colors ${
              currentPage === TOTAL_PAGES
                ? "bg-[#E8A838] text-white hover:bg-[#d4952e]"
                : currentPage === 1
                ? "border border-gray-400 text-gray-500"
                : "border border-gray-300 text-gray-400 hover:bg-gray-50"
            }`}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft size={14} />
          </button>

          {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
            <span
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-7 h-7 flex items-center justify-center text-xs cursor-pointer transition-colors ${
                page === currentPage
                  ? "text-[#E8A838] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {page}
            </span>
          ))}

          {/* Next — cam khi chưa tới trang cuối, cam khi tới trang cuối thì prev cam */}
          <button
            className={`w-7 h-7 flex items-center justify-center rounded transition-colors ${
              currentPage === TOTAL_PAGES
                ? "border border-gray-300 text-gray-400"
                : "bg-[#E8A838] text-white hover:bg-[#d4952e]"
            }`}
            disabled={currentPage === TOTAL_PAGES}
            onClick={() => setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1))}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <FundSummaryTable />
      <FundChangeSection />
    </div>
  );
}
