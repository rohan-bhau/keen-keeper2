'use client'
import { useEffect, useState } from 'react';
import friends from '../../../public/data.json';
import LeftCard from './LeftCard';
import RightCard from './RightCard';
const DetailsPage = ({ id }) => {
    
    const friend = friends.find((fr) => fr.id === parseInt(id))
    // console.log(friend)
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
          const timer = setTimeout(() => setLoading(false), 200);
          return () => clearTimeout(timer);
        }, []);

  return (
    <div className="container mx-auto py-15">
      {/* detail page fot {id} */}
      {/* <LeftCard friend={friend} />
      <RightCard friend={friend} /> */}

      {loading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner text-error"></span>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 px-20 ">
          <LeftCard friend={friend} />
          <RightCard friend={friend} />
        </div>
      )}
    </div>
  );
}

export default DetailsPage
