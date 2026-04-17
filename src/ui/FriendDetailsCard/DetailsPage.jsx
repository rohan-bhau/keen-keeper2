import friends from '../../../public/data.json';
import LeftCard from './LeftCard';
import RightCard from './RightCard';
const DetailsPage = ({ id }) => {
    
    const friend = friends.find((fr) => fr.id === parseInt(id))
    console.log(friend)

  return (
    <div>
      detail page fot {id}
      <LeftCard friend={friend} />
      <RightCard friend={friend} />
    </div>
  );
}

export default DetailsPage
