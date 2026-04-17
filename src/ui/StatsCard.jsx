"use client";

import { useTimeline } from '@/context/TimelineContext';
import friends from '../../public/data.json';

const StatsCard = () => {
  // const { friends, setFriends } = friendsData();
  // console.log(friends)

  const totalFriends = friends.length
  // const onTrackFriends = friends.filter(
  //   (f) => f.status<= f.goal,
  // ).length;
  // const needAttention = totalFriends - onTrackFriends;

const { timeline } = useTimeline();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:px-40 mb-10">
      <div className="border border-[hsl(0,2%,94%)] shadow-md rounded-md  py-8 text-center">
        <h2 className="text-xl font-semibold mb-2">{totalFriends}</h2>
        <p className="text-[#64748B]">Total Friends</p>
      </div>
      <div className="border border-[hsl(0,2%,94%)] shadow-md rounded-md  py-8 text-center">
        <h2 className="text-xl font-semibold mb-2">4</h2>
        <p className="text-[#64748B]">On Track</p>
      </div>
      <div className="border border-[hsl(0,2%,94%)] shadow-md rounded-md  py-8 text-center">
        <h2 className="text-xl font-semibold mb-2">6</h2>
        <p className="text-[#64748B]">Need Attention</p>
      </div>
      <div className="border border-[hsl(0,2%,94%)] shadow-md rounded-md  py-8 text-center">
        <h2 className="text-xl font-semibold mb-2">{ timeline.length}</h2>
        <p className="text-[#64748B]">Interactions this month</p>
      </div>
    </div>
  );
};

export default StatsCard;
