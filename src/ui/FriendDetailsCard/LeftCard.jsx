import Image from 'next/image';
import React from 'react'
import { FaBoxArchive } from 'react-icons/fa6';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';

const LeftCard = ({ friend }) => {
    console.log(friend);
    return (
      <div>
        <div className="border  border-[hsl(0,2%,94%)] shadow-md rounded-md  w-full max-w-[350px] py-6 px-12">
          <div className="w-[80px] h-[80px] rounded-full overflow-hidden mx-auto">
            <Image
              className="rounded-full overflow-hidden w-full h-auto object-cover"
              src={friend.picture}
              alt={friend.name}
              width={80}
              height={80}
            ></Image>
          </div>
          <h2 className="font-bold mt-3 text-xl text-center">{friend.name}</h2>
          <div className="flex justify-center mx-auto  p-2 w-fit text-[#ffffff] font-semibold  mt-2 mb-3">
            <p
              className={
                friend.status === "Overdue"
                  ? "bg-[#EF4444] px-2 py-1 rounded-full"
                  : friend.status === "On-Track"
                    ? "bg-[#244D3F] px-2 py-1 rounded-full"
                    : "bg-[#EFAD44] px-2 py-1 rounded-full"
              }
            >
              {friend.status}
            </p>
          </div>
          <div className="flex justify-center gap-2">
            {friend.tags.map((tag, idx) => (
              <p
                key={idx}
                className="bg-[#CBFADB] text-[#244D3F] font-semibold p-2 rounded-full"
              >
                {tag}
              </p>
            ))}
          </div>
          <p className="mt-3 text-[#6474bb] text-center">{friend.bio}</p>
          <p className="mt-3 text-[#6474bb] text-center">Email: {friend.email}</p>
        </div>

        <div className="flex flex-col max-w-[350px] gap-2 mt-4">
          <button className="border  border-[hsl(0,2%,94%)] shadow-md rounded-md py-4 flex gap-2 justify-center items-center font-semibold">
            <RiNotificationSnoozeLine />
            Snooze 2 Weeks
          </button>
          <button className="border  border-[hsl(0,2%,94%)] shadow-md rounded-md py-4 flex gap-2 justify-center items-center font-semibold">
            <FaBoxArchive /> Archive
          </button>
          <button className="border  border-[hsl(0,2%,94%)] shadow-md rounded-md py-4 flex gap-2 justify-center items-center font-semibold text-[#ef4444]">
            <RiDeleteBinLine />
            Delete
          </button>
        </div>
      </div>
    );
};

export default LeftCard
