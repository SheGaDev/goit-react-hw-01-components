import PropTypes from 'prop-types';

const FriendListItem = ({ friend: { name, avatar, isOnline } }) => {
  return (
    <li>
      {isOnline ? <span /> : <span />}
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
