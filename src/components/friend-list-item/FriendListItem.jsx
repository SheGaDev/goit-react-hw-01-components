import PropTypes from 'prop-types';

const FriendListItem = ({ friend: { name, avatar, isOnline } }) => {
  const backgroundColor = isOnline ? '#02bf1e' : '#bf0202';
  return (
    <li className='flex items-center gap-3 p-[8px] shadow-md'>
      <span
        style={{
          backgroundColor,
        }}
        className='block h-[32px] w-[32px] rounded-full'
      />
      <img src={avatar} alt={name} width='64' />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
