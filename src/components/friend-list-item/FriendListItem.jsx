import PropTypes from 'prop-types';

// const Online = styled.span`
//     display: block;
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     background-color: red;

//     ${(props) =>
//         props.$online &&
//         css`
//             background-color: green;
//         `}
// `;
// const Li = styled.li`
//     background-color: blue;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

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
