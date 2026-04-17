"use client";
import { useTimeline } from "@/context/TimelineContext";
import Image from "next/image";
import React from "react";

const TimelineCardPage = () => {
  const { timeline } = useTimeline();
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
      <div className="space-y-4">
        {timeline.map((item) => (
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
      </div>
    </div>
  );
};

export default TimelineCardPage;
