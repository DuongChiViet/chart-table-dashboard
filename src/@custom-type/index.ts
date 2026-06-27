export type ViewMode = "chart" | "table";

export type FundName = "Quỹ Tăng trưởng" | "Quỹ Cân bằng" | "Quỹ Bảo toàn";

export interface FundDataPoint {
  date: string;
  "Quỹ Tăng trưởng": number;
  "Quỹ Cân bằng": number;
  "Quỹ Bảo toàn": number;
}

export interface FundSummary {
  name: FundName;
  startValue: number;
  endValue: number;
  changePercent: number;
}

export interface FundChange {
  name: FundName;
  fromFoundation: number;
  period: number;
}

export interface TableRow {
  date: string;
  tangTruong: number;
  canBang: number;
  baoToan: number;
}
