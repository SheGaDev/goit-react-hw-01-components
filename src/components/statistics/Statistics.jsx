import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <div>
      {title && <h2 className='title'>{title}</h2>}
      <ul className='stat-list'>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className='item' key={id}>
              <span className='label'>{label}</span>
              <span className='percentage'>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </div>
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
