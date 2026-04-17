
import DetailsPage from '@/ui/FriendDetailsCard/DetailsPage';
import friends from '../../../../public/data.json';
import LeftCard from '@/ui/FriendDetailsCard/LeftCard';

const FriendDetailPage = async({ params }) => {
    const {id} = await params
    console.log(id, "id")
  return (
    <div>
      this is detail page 
        <DetailsPage id={id} />
    </div>
  );
}

export default FriendDetailPage
