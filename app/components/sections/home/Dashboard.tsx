"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { DollarSign, ShoppingBag, Users } from "lucide-react";
import { useRef, useState, useLayoutEffect } from "react";

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
  icon,
  iconBg,
}: {
  title: string;
  value: string;
  growth: string;
  icon: React.ReactNode;
  iconBg: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="mt-1 text-2xl font-semibold text-gray-900">{value}</h3>
        <p className="mt-1 text-sm text-green-600">↑ {growth} vs last month</p>
      </div>
      <div
        className={`h-11 w-11 rounded-full flex items-center justify-center ${iconBg}`}
      >
        {icon}
      </div>
    </div>
  );
}

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white px-4 py-2 shadow-lg">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-base font-semibold text-gray-900">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }

  return null;
}

export default function DemoDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      if (width > 0 && height > 0) {
        setIsReady(true);
      }
    }
  }, []);

  return (
    <div>
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
        <div className="mb-6 flex items-start sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Dashboard
            </h3>
            <p className="text-sm text-gray-500">
              Welcome back! Here's your overview
            </p>
          </div>

          <div className="shrink-0 rounded-md border border-gray-200 px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm text-gray-600 bg-white">
            Last 30 days
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <StatCard
            title="Total Revenue"
            value="$45,231"
            growth="12.5%"
            icon={<DollarSign className="h-5 w-5 text-green-600" />}
            iconBg="bg-green-100"
          />
          <StatCard
            title="Total Orders"
            value="142"
            growth="8.2%"
            icon={<ShoppingBag className="h-5 w-5 text-blue-600" />}
            iconBg="bg-blue-100"
          />
          <StatCard
            title="Active Users"
            value="2,845"
            growth="15.3%"
            icon={<Users className="h-5 w-5 text-purple-600" />}
            iconBg="bg-purple-100"
          />
        </div>

        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
          <h4 className="font-semibold text-gray-900">Revenue Overview</h4>
          <p className="text-sm text-gray-500 mb-4">
            Monthly performance tracking
          </p>

          <div className="h-[300px] w-full overflow-x-auto" ref={containerRef}>
            {isReady && (
              <div className="min-w-[700px] h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" tickLine={false} axisLine={false} />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      domain={["dataMin - 500", "dataMax + 500"]}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#84cc16"
                      strokeWidth={3}
                      dot={{ r: 5, strokeWidth: 2, fill: "#84cc16" }}
                      activeDot={{ r: 7 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
