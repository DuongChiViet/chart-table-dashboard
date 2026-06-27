import type { FundDataPoint, FundSummary, FundChange, TableRow } from "@/@custom-type";

export const chartData: FundDataPoint[] = [
  { date: "01/07", "Quỹ Tăng trưởng": 0.900, "Quỹ Cân bằng": 0.910, "Quỹ Bảo toàn": 0.920 },
  { date: "03/07", "Quỹ Tăng trưởng": 0.902, "Quỹ Cân bằng": 0.912, "Quỹ Bảo toàn": 0.922 },
  { date: "05/07", "Quỹ Tăng trưởng": 0.905, "Quỹ Cân bằng": 0.915, "Quỹ Bảo toàn": 0.923 },
  { date: "07/07", "Quỹ Tăng trưởng": 0.910, "Quỹ Cân bằng": 0.918, "Quỹ Bảo toàn": 0.925 },
  { date: "09/07", "Quỹ Tăng trưởng": 0.912, "Quỹ Cân bằng": 0.920, "Quỹ Bảo toàn": 0.926 },
  { date: "11/07", "Quỹ Tăng trưởng": 0.918, "Quỹ Cân bằng": 0.925, "Quỹ Bảo toàn": 0.928 },
  { date: "13/07", "Quỹ Tăng trưởng": 0.922, "Quỹ Cân bằng": 0.928, "Quỹ Bảo toàn": 0.930 },
  { date: "15/07", "Quỹ Tăng trưởng": 0.928, "Quỹ Cân bằng": 0.932, "Quỹ Bảo toàn": 0.931 },
  { date: "17/07", "Quỹ Tăng trưởng": 0.932, "Quỹ Cân bằng": 0.935, "Quỹ Bảo toàn": 0.932 },
  { date: "19/07", "Quỹ Tăng trưởng": 0.938, "Quỹ Cân bằng": 0.937, "Quỹ Bảo toàn": 0.933 },
  { date: "21/07", "Quỹ Tăng trưởng": 0.945, "Quỹ Cân bằng": 0.940, "Quỹ Bảo toàn": 0.935 },
  { date: "23/07", "Quỹ Tăng trưởng": 0.950, "Quỹ Cân bằng": 0.943, "Quỹ Bảo toàn": 0.937 },
  { date: "25/07", "Quỹ Tăng trưởng": 0.954, "Quỹ Cân bằng": 0.947, "Quỹ Bảo toàn": 0.939 },
  { date: "27/07", "Quỹ Tăng trưởng": 0.958, "Quỹ Cân bằng": 0.950, "Quỹ Bảo toàn": 0.941 },
  { date: "29/07", "Quỹ Tăng trưởng": 0.962, "Quỹ Cân bằng": 0.953, "Quỹ Bảo toàn": 0.943 },
  { date: "31/07", "Quỹ Tăng trưởng": 0.965, "Quỹ Cân bằng": 0.957, "Quỹ Bảo toàn": 0.945 },
  { date: "02/08", "Quỹ Tăng trưởng": 0.968, "Quỹ Cân bằng": 0.959, "Quỹ Bảo toàn": 0.948 },
  { date: "04/08", "Quỹ Tăng trưởng": 0.970, "Quỹ Cân bằng": 0.961, "Quỹ Bảo toàn": 0.950 },
  { date: "06/08", "Quỹ Tăng trưởng": 0.972, "Quỹ Cân bằng": 0.963, "Quỹ Bảo toàn": 0.951 },
  { date: "08/08", "Quỹ Tăng trưởng": 0.974, "Quỹ Cân bằng": 0.964, "Quỹ Bảo toàn": 0.953 },
  { date: "10/08", "Quỹ Tăng trưởng": 0.975, "Quỹ Cân bằng": 0.965, "Quỹ Bảo toàn": 0.955 },
];

export const fundSummaries: FundSummary[] = [
  { name: "Quỹ Tăng trưởng", startValue: 335.00, endValue: 40.00, changePercent: 30 },
  { name: "Quỹ Cân bằng", startValue: 120.00, endValue: 230.88, changePercent: 10 },
  { name: "Quỹ Bảo toàn", startValue: 110.23, endValue: 100.00, changePercent: 2 },
];

export const fundChanges: FundChange[] = [
  { name: "Quỹ Tăng trưởng", fromFoundation: 78, period: 5.87 },
  { name: "Quỹ Cân bằng", fromFoundation: -25, period: 10.3 },
  { name: "Quỹ Bảo toàn", fromFoundation: 25, period: -2.3 },
];

export const tableRows: TableRow[] = [
  { date: "10/08/2020", tangTruong: 335.00, canBang: 40.00, baoToan: 335.00 },
  { date: "31/07/2020", tangTruong: 120.00, canBang: 230.88, baoToan: 125.95 },
  { date: "21/07/2020", tangTruong: 110.23, canBang: 120.00, baoToan: 25.00 },
  { date: "11/07/2020", tangTruong: 10.23, canBang: 56.00, baoToan: 10.34 },
  { date: "01/07/2020", tangTruong: 110.23, canBang: 456.00, baoToan: 111.45 },
];
