import { fundSummaries } from "@/libs/mockData";

const NAME_BG = ["#1A2B1E", "#213525", "#27402C"];

export default function FundSummaryTable() {
  return (
    <div className="rounded overflow-hidden border border-gray-200">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-[#4CAF93] text-white">
            <th className="text-left px-4 py-3 font-medium">Tên quỹ</th>
            <th className="text-center px-4 py-3 font-medium border-l border-[#3da882]">Ngày bắt đầu</th>
            <th className="text-center px-4 py-3 font-medium border-l border-[#3da882]">Ngày kết thúc</th>
            <th className="text-center px-4 py-3 font-medium border-l border-[#3da882]">Tăng/Giảm (%)</th>
          </tr>
        </thead>
        <tbody>
          {fundSummaries.map((fund, i) => (
            <tr key={fund.name} className="border-b border-gray-100 last:border-0">
              {/* Name cell — dark bg */}
              <td className="p-0 font-semibold text-[#E8A838] text-sm" style={{ backgroundColor: NAME_BG[i] }}>
                <div className="px-4 py-3">{fund.name}</div>
              </td>
              {/* Value cells — white bg */}
              <td className="px-4 py-3 text-[#E8A838] text-center font-medium bg-white border-l border-gray-100">
                {fund.startValue.toFixed(2)}
              </td>
              <td className="px-4 py-3 text-[#E8A838] text-center font-medium bg-white border-l border-gray-100">
                {fund.endValue.toFixed(2)}
              </td>
              <td className="px-4 py-3 text-center bg-white border-l border-gray-100">
                <span className="font-semibold text-[#E8A838]">
                  {fund.changePercent >= 0 ? "+" : ""}{fund.changePercent}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
