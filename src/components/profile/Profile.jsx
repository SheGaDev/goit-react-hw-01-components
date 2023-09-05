import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <img
          className='mb-2 rounded-full'
          src={avatar}
          alt='User avatar'
          width='150'
          height='150'
        />
        <h2>
          <b>{username}</b>
        </h2>
        <h3 className='text-sm'>@{tag}</h3>
        <h3 className='text-sm'>{location}</h3>
      </div>
      <ul className='flex items-center gap-3'>
        {[
          ['Followers', followers],
          ['Views', views],
          ['Likes', likes],
        ].map(([title, count]) => (
          <li key={title} className='flex flex-col items-center'>
            <span>{title}</span>
            <span>
              <b className='text-xs'>{count}</b>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
export default Profile;
