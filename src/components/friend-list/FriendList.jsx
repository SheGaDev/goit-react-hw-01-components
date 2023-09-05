import PropTypes from 'prop-types';
import FriendListItem from '../friend-list-item/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className='flex flex-col gap-3'>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
