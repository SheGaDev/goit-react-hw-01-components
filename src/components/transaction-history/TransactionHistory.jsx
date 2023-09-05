import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className='table-auto' width={800}>
      <thead className='bg-[#0256de] text-white'>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className='py-[8px]'>
              {type.split('').map((v, i) => (i === 0 ? v.toUpperCase() : v))}
            </td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
