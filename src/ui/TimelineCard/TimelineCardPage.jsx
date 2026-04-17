"use client";
import { useTimeline } from "@/context/TimelineContext";
import Image from "next/image";
import React, { useState } from "react";

const TimelineCardPage = () => {
  const { timeline } = useTimeline();


  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  let filteredTimeline =
    filter === "All"
      ? [...timeline]
      : timeline.filter(
          (item) => item.type.toLowerCase() === filter.toLowerCase(),
      );
  
  filteredTimeline.sort((a, b) => {
    if (sortOrder === "Newest") {
      return b.id - a.id;
    } else {
      return a.id - b.id;
    }
  });

  
  console.log(timeline);
  if (timeline.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[25vh] text-center p-6">
        <h2 className="text-2xl font-bold text-[#244d3f] mb-2">
          Your timeline is empty
        </h2>
        <p className="text-gray-500 max-w-sm">
          You haven't logged any interactions yet. Go to a friend's profile and
          check-in via Call, Text, or Video!
        </p>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        {/* Type Filter */}
        <div className="flex gap-2">
          {["All", "Call", "Text", "Video"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                filter === type
                  ? "bg-[#244d3f] text-white"
                  : "bg-white text-gray-500 border border-[#e9e9e9] hover:bg-gray-50"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Time Sort Filter */}
        <div className="flex items-center gap-2 bg-[#f8f9fa] p-1 rounded-lg border border-[#e9e9e9]">
          {["Newest", "Oldest"].map((order) => (
            <button
              key={order}
              onClick={() => setSortOrder(order)}
              className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                sortOrder === order
                  ? "bg-white text-[#244d3f] shadow-sm"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {order}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {filteredTimeline.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-5 p-5 bg-white border border-[#e9e9e9] rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-14 h-14 rounded-full bg-[#f8f9fa] flex items-center justify-center border border-[#244d3f]/5 shrink-0">
              <Image
                src={`/assets/${item.type.toLowerCase()}.png`}
                alt={item.type}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>

            <div className="flex-1">
              <h3 className="font-bold text-[#244d3f] text-lg leading-tight mb-1">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-[#6474bb]">
                <span className="bg-gray-100 px-2 py-0.5 rounded text-[12px] font-medium uppercase">
                  {item.type}
                </span>
                <span>•</span>
                <span>{item.date}</span>
                <span className="hidden sm:inline">•</span>
                <span className="hidden sm:inline">{item.time}</span>
              </div>
            </div>

            <div className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        ))}
        {filteredTimeline.length === 0 && (
          <p className="text-center text-gray-400 py-10">
            No activities found for this filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default TimelineCardPage;
