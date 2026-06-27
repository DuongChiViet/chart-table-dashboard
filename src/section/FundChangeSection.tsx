"use client";

import { useState } from "react";
import { fundChanges } from "@/libs/mockData";

const PERIOD_OPTIONS = ["6 Tháng sau", "1 Năm", "3 Năm", "Từ đầu năm"];

const BAR_COLOR: Record<string, string> = {
  "Quỹ Tăng trưởng": "#E8572A",
  "Quỹ Cân bằng":    "#4CAF93",
  "Quỹ Bảo toàn":    "#E8C838",
};

// axis -50 → 100, total range 150
// tick positions as % of bar area width
const TICKS = [-50, -25, 0, 25, 50, 75, 100];
function toPct(v: number) { return ((v + 50) / 150) * 100; }
const zeroPct = toPct(0); // 33.33%

export default function FundChangeSection() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState("6 Tháng sau");

  return (
    <div className="rounded border border-gray-200">
      <div className="bg-[#4CAF93] text-white text-center text-sm font-medium py-2.5">
        Thay đổi của giá trị quỹ
      </div>

      <div className="flex">
        {/* LEFT */}
        <div className="w-1/2 border-r border-gray-200 px-4 pt-4 pb-3">
          <p className="text-xs font-semibold text-gray-600 mb-2">Từ lúc thành lập quỹ</p>

          {fundChanges.map((fund) => {
            const val = fund.fromFoundation;
            const isPos = val >= 0;
            const barStart = isPos ? zeroPct : toPct(val);
            const barEnd   = isPos ? toPct(val) : zeroPct;
            const barW = barEnd - barStart;

            return (
              <div key={fund.name} className="flex items-center h-10">
                {/* Name */}
                <span className="text-xs text-gray-600 whitespace-nowrap w-28 shrink-0">{fund.name}</span>

                {/* Bar area with grid lines */}
                <div className="flex-1 relative h-full">
                  {/* Grid lines */}
                  {TICKS.map((t) => (
                    <div
                      key={t}
                      className="absolute inset-y-0"
                      style={{
                        left: `${toPct(t)}%`,
                        width: "1px",
                        background: t === 0 ? "#9ca3af" : "#e5e7eb",
                      }}
                    />
                  ))}
                  {/* Bar */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-4 z-10"
                    style={{ left: `${barStart}%`, width: `${barW}%`, background: BAR_COLOR[fund.name] }}
                  />
                  {/* Label — sits outside bar end, never overlaps */}
                  {isPos ? (
                    <span
                      className="absolute top-1/2 -translate-y-1/2 text-xs font-semibold text-[#4CAF93] z-20 whitespace-nowrap"
                      style={{ left: `calc(${toPct(val)}% + 4px)` }}
                    >
                      +{val}%
                    </span>
                  ) : (
                    <span
                      className="absolute top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-500 z-20 whitespace-nowrap"
                      style={{ right: `calc(${100 - toPct(val)}% + 4px)` }}
                    >
                      {val}%
                    </span>
                  )}
                </div>
              </div>
            );
          })}

          {/* Tick labels */}
          <div className="flex relative" style={{ paddingLeft: "7rem" }}>
            <div className="flex-1 relative h-5">
              {TICKS.map((t) => (
                <span
                  key={t}
                  className="absolute top-0 text-[10px] text-gray-400 -translate-x-1/2"
                  style={{ left: `${toPct(t)}%` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-1/2 px-4 pt-4 pb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-600">Thời gian</span>
            <div className="relative">
              <span
                className="flex items-center gap-0.5 text-xs text-[#E8A838] font-semibold cursor-pointer select-none"
                onClick={() => setShowDropdown((v) => !v)}
              >
                {selected}
                <span className="text-gray-400 text-[10px] ml-0.5">▼</span>
              </span>
              {showDropdown && (
                <div className="absolute right-0 top-5 bg-white border border-gray-200 rounded shadow-lg z-20 min-w-[120px]">
                  {PERIOD_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      className={`block w-full text-left px-3 py-1.5 text-xs hover:bg-gray-50 ${opt === selected ? "text-[#E8A838] font-semibold" : "text-gray-700"}`}
                      onClick={() => { setSelected(opt); setShowDropdown(false); }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {fundChanges.map((fund) => (
            <div key={fund.name} className="flex items-center justify-between h-10">
              <span className="text-xs text-gray-600">{fund.name}</span>
              <span className="text-xs font-semibold text-gray-800">
                {fund.period >= 0 ? "+" : ""}{fund.period}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
