import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  const genColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return (
    <>
      {title && <h2 className='place-content-center uppercase'>{title}</h2>}
      <ul className='flex'>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              style={{
                backgroundColor: genColor(),
              }}
              className='flex h-[100px] w-[100px] flex-col items-center justify-center text-white'
              key={id}
            >
              <span className='text-[16px]'>{label}</span>
              <span>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
