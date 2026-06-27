"use client";

import dynamic from "next/dynamic";
import { chartData } from "@/libs/mockData";
import { FUND_COLORS, FUND_NAMES } from "@/@contanst";
import FundSummaryTable from "@/section/FundSummaryTable";
import FundChangeSection from "@/section/FundChangeSection";

const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

const lineChartOption = {
  tooltip: {
    trigger: "axis",
    backgroundColor: "#2d3748",
    borderColor: "#2d3748",
    textStyle: { color: "#fff", fontSize: 12 },
    formatter: (params: { name: string; seriesName: string; value: number }[]) => {
      const date = params[0]?.name;
      const lines = params
        .map(
          (p) =>
            `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${FUND_COLORS[p.seriesName as keyof typeof FUND_COLORS]};margin-right:4px"></span>${p.seriesName}: <b>${p.value.toFixed(2)}</b>`
        )
        .join("<br/>");
      return `<div style="font-size:12px;line-height:1.8"><b>Ngày: ${date}/2020</b><br/>${lines}</div>`;
    },
  },
  legend: {
    data: [...FUND_NAMES],
    right: 0,
    top: 4,
    itemWidth: 10,
    itemHeight: 10,
    textStyle: { fontSize: 11, color: "#6b7280" },
    icon: "rect",
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    top: 40,
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: chartData.map((d) => d.date),
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { fontSize: 11, color: "#9ca3af" },
  },
  yAxis: {
    type: "value",
    min: 0.90,
    max: 1.00,
    interval: 0.02,
    axisLine: { show: false },
    axisTick: { show: false },
    splitLine: { lineStyle: { color: "#f3f4f6" } },
    axisLabel: { fontSize: 11, color: "#9ca3af", formatter: (v: number) => v.toFixed(2) },
  },
  series: FUND_NAMES.map((name) => ({
    name,
    type: "line",
    boundaryGap: false,
    symbol: "circle",
    symbolSize: 5,
    showSymbol: true,
    lineStyle: { color: FUND_COLORS[name], width: 1.5 },
    itemStyle: { color: FUND_COLORS[name] },
    data: chartData.map((d) => d[name]),
  })),
};

export default function ChartView() {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded border border-gray-200 p-4">
        <ReactECharts option={lineChartOption} style={{ height: 240 }} />
      </div>
      <FundSummaryTable />
      <FundChangeSection />
    </div>
  );
}
