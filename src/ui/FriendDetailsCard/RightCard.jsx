import { useTimeline } from '@/context/TimelineContext';
import Image from 'next/image';
import React from 'react'

const RightCard = ({ friend }) => {
 const { addToTiemeline, timeline } = useTimeline();
  // console.log(friend)
  const friendInteractions = timeline.filter((item) =>
    item.title.includes(friend.name),
  );
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="border  border-[hsl(0,2%,94%)] shadow-md rounded-md py-8  text-center ">
          <h2 className="font-semibold text-[#244d3f] mb-2 text-xl">
            {friend.days_since_contact}
          </h2>
          <p className="text-lg text-[#6474bb]">Since Contact</p>
        </div>
        <div className="border  border-[hsl(0,2%,94%)] shadow-md rounded-md py-8 text-center ">
          <h2 className="font-semibold text-[#244d3f] mb-2 text-xl">
            {friend.goal}
          </h2>
          <p className="text-lg text-[#6474bb]">Goal(Days)</p>
        </div>
        <div className="border  border-[hsl(0,2%,94%)] shadow-md rounded-md py-8  text-center ">
          <h2 className="font-semibold text-[#244d3f] mb-2 text-xl">
            {friend.next_due_date}
          </h2>
          <p className="text-lg text-[#6474bb]">Next Due</p>
        </div>
      </div>
      <div className="border  border-[hsl(0,2%,94%)] shadow-md rounded-md p-8 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-[#244d3f] mb-4">
            Relationship Goal
          </h2>
          <button className="btn">Edit</button>
        </div>
        <p className="text-lg text-[#6474bb]">
          Connect Every{" "}
          <span className="text-black font-bold">{friend.goal} days</span>
        </p>
      </div>
      <div className="border  border-[hsl(0,2%,94%)] shadow-md rounded-md p-6">
        <h2 className="text-[#244d3f] font-semibold text-xl mb-4">
          Quick Check-In
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Call */}
          <div
            onClick={() => addToTiemeline(friend.name, "Call")}
            className="group border border-[#e9e9e9] shadow-md rounded-md p-5 cursor-pointer
             transform transition-all duration-200 ease-out
             hover:shadow-lg hover:scale-[1.03] hover:bg-gray-50
             active:scale-[0.97] active:duration-100"
          >
            <Image
              className="mx-auto transition-transform duration-200 ease-out group-hover:scale-110"
              src={"/assets/call.png"}
              alt="call icon"
              width={32}
              height={32}
            />
            <p className="text-2xl text-center">Call</p>
          </div>

          {/* TExt */}
          <div
            onClick={() => addToTiemeline(friend.name, "Text")}
            className="group border border-[#e9e9e9] shadow-md items-center rounded-md p-5 cursor-pointer
             transform transition-all duration-200 ease-out
             hover:shadow-lg hover:scale-[1.03] hover:bg-gray-50
             active:scale-[0.97] active:duration-100"
          >
            <Image
              className="mx-auto transition-transform duration-200 ease-out group-hover:scale-110"
              src={"/assets/text.png"}
              alt="text icon"
              width={32}
              height={32}
            />
            <p className="text-2xl text-center">Text</p>
          </div>

          {/* Video */}
          <div
            onClick={() => addToTiemeline(friend.name, "Video")}
            className="group border border-[#e9e9e9] shadow-md rounded-md p-5 cursor-pointer
             transform transition-all duration-200 ease-out
             hover:shadow-lg hover:scale-[1.03] hover:bg-gray-50
             active:scale-[0.97] active:duration-100"
          >
            <Image
              className="mx-auto transition-transform duration-200 ease-out group-hover:scale-110"
              src={"/assets/video.png"}
              alt="video icon"
              width={32}
              height={32}
            />
            <p className="text-2xl text-center">Video</p>
          </div>
        </div>
      </div>

      {/* Recent Interactions */}
      <div className="border border-[hsl(0,2%,94%)] shadow-md rounded-md mt-6  p-9">
        <h2 className="text-[#244d3f] font-semibold text-xl mb-4">
          Recent Interactions
        </h2>

        {friendInteractions.length > 0 ? (
          <div className="space-y-4">
            {friendInteractions.map((item) => (
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
        ) : (
          <p className="text-gray-400 italic text-center py-4">
            No recent interactions with {friend.name}
          </p>
        )}
      </div>
    </div>
  );
}

export default RightCard
