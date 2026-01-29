"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 2400 },
  { name: "Feb", revenue: 1400 },
  { name: "Mar", revenue: 9800 },
  { name: "Apr", revenue: 3900 },
  { name: "May", revenue: 4800 },
  { name: "Jun", revenue: 3800 },
  { name: "Jul", revenue: 4300 },
  { name: "Aug", revenue: 5200 },
  { name: "Sep", revenue: 6100 },
  { name: "Oct", revenue: 5800 },
];

function StatCard({
  title,
  value,
  growth,
}: {
  title: string;
  value: string;
  growth: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <div className="mt-2 flex items-end justify-between">
        <h3 className="text-2xl font-semibold text-gray-900">{value}</h3>
        <span className="text-sm text-green-600">↑ {growth}</span>
      </div>
    </div>
  );
}

export default function DemoDashboard() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Dashboard</h3>
          <p className="text-sm text-gray-500">
            Welcome back! Here's your overview
          </p>
        </div>
        <div className="rounded-md border px-3 py-1 text-sm text-gray-600">
          Last 30 days
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard title="Total Revenue" value="$45,231" growth="12.5%" />
        <StatCard title="Total Orders" value="142" growth="8.2%" />
        <StatCard title="Active Users" value="2,845" growth="15.3%" />
      </div>

      {/* Chart */}
      <div className="mt-6 rounded-xl border border-gray-200 p-4">
        <h4 className="font-semibold text-gray-900">Revenue Overview</h4>
        <p className="text-sm text-gray-500 mb-4">
          Monthly performance tracking
        </p>

        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#84cc16"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
