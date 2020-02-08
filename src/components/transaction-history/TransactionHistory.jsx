import React from 'prop-types';
import PropTypes from 'prop-types';
// import styles from './TransactionHistory.module.scss';

const TransactionHistory = ({ transactions }) => {
  return transactions.map(item => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
