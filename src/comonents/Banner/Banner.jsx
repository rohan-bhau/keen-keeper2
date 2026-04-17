
import StatsCard from "@/ui/StatsCard";
import React from "react";
import { IoMdAdd } from "react-icons/io";

const Banner = () => {
  return (
    <div className="container mx-auto pt-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#1F2937] mb-2">
          Friends to keep close in your life
        </h2>

        <p className="text-[#64748B] mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>

        <button className="btn bg-[#244D3F] text-white font-semibold items-center mb-10">
          <IoMdAdd className="text-white font-semibold text-xl" />
          Add a Friend
        </button>
      </div>
      <div>
        <StatsCard></StatsCard>
      </div>
    </div>
  );
};

export default Banner;
