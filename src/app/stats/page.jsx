"use client";
import React from "react";
import { useTimeline } from "@/context/TimelineContext";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const StatsPage = () => {
  const { timeline } = useTimeline();

  const textCount = timeline.filter((item) => item.type === "Text").length;
  const callCount = timeline.filter((item) => item.type === "Call").length;
  const videoCount = timeline.filter((item) => item.type === "Video").length;


  const chartData = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ];


  const COLORS = ["#8b5cf6", "#244d3f", "#22c55e"];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-[#244d3f] mb-8">
        Friendship Analytics
      </h1>

      <div className="border border-dashed border-blue-300 p-10 rounded-lg">
        <h2 className="text-lg font-semibold text-[#244d3f] mb-4">
          By Interaction Type
        </h2>

        <div className="h-[300px] w-full flex justify-center items-center">
          {timeline.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  iconType="circle"
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="text-gray-400">
              No data available to show analytics
            </div>
          )}
        </div>
      </div>
    </div>
  );
};;

export default StatsPage;
