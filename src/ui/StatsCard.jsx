"use client";

const StatsCard = () => {
  // const { friends, setFriends } = friendsData();
  // console.log(friends)
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 px-40 mb-10">
      <div className="border border-[hsl(0,2%,94%)] shadow-md rounded-md  py-8 text-center">
        <h2 className="text-xl font-semibold mb-2">10</h2>
        <p className="text-[#64748B]">Total Friends</p>
      </div>
      <div className="border border-[hsl(0,2%,94%)] shadow-md rounded-md  py-8 text-center">
        <h2 className="text-xl font-semibold mb-2">10</h2>
        <p className="text-[#64748B]">Total Friends</p>
      </div>
      <div className="border border-[hsl(0,2%,94%)] shadow-md rounded-md  py-8 text-center">
        <h2 className="text-xl font-semibold mb-2">10</h2>
        <p className="text-[#64748B]">Total Friends</p>
      </div>
      <div className="border border-[hsl(0,2%,94%)] shadow-md rounded-md  py-8 text-center">
        <h2 className="text-xl font-semibold mb-2">10</h2>
        <p className="text-[#64748B]">Total Friends</p>
      </div>
    </div>
  );
};

export default StatsCard;
