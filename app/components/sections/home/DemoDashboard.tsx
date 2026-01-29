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

const orders = [
  {
    id: "#3210",
    customer: "Sarah Johnson",
    amount: "$2,400",
    status: "Completed",
    date: "Jan 20",
  },
  {
    id: "#3209",
    customer: "Michael Chen",
    amount: "$1,800",
    status: "Completed",
    date: "Jan 19",
  },
  {
    id: "#3208",
    customer: "Emma Wilson",
    amount: "$3,200",
    status: "Processing",
    date: "Jan 18",
  },
  {
    id: "#3207",
    customer: "James Brown",
    amount: "$950",
    status: "Completed",
    date: "Jan 17",
  },
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
      <div className="rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-lg">
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
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 h-[720px] overflow-y-auto">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">Dashboard</h3>
          <p className="text-sm text-gray-500">
            Welcome back! Here's your overview
          </p>
        </div>
        <div className="rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-600 bg-white">
          Last 30 days
        </div>
      </div>

      {/* Stat Cards */}
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

      {/* Chart Card */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
        <h4 className="font-semibold text-gray-900 text-lg">
          Revenue Overview
        </h4>
        <p className="text-sm text-gray-500 mb-4 pt-1">
          Monthly performance tracking
        </p>

        <div className="h-[300px] w-full">
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
      </div>

      {/* Recent Orders */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white overflow-hidden">
        <div className="p-5 border-b border-gray-200">
          <h4 className="font-semibold text-gray-900 text-lg">Recent Orders</h4>
          <p className="text-sm text-gray-500 pt-1">
            Latest transactions from your customers
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-gray-500">
              <tr className="border-b border-gray-200">
                <th className="px-5 py-3 text-left font-medium">ORDER ID</th>
                <th className="px-5 py-3 text-left font-medium">CUSTOMER</th>
                <th className="px-5 py-3 text-left font-medium">AMOUNT</th>
                <th className="px-5 py-3 text-left font-medium">STATUS</th>
                <th className="px-5 py-3 text-left font-medium">DATE</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-100 last:border-0"
                >
                  <td className="px-5 py-4 font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-5 py-4 text-gray-700">{order.customer}</td>
                  <td className="px-5 py-4 font-semibold text-gray-900">
                    {order.amount}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-600">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
