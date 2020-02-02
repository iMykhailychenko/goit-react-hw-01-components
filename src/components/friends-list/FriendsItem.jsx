import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './FriendsItem.module.css';

const FriendsItem = ({ data }) => (
  <Fragment>
    {data.map(item => (
      <li key={item.id} className={styles.item}>
        <span className={item.isOnline ? styles.online : styles.offline}></span>
        <img
          className={styles.avatar}
          src={item.avatar}
          alt="avatar"
          width="48"
          height="48"
          />
        <p className={styles.name}>{item.name}</p>
      </li>
    ))}
  </Fragment>
);

FriendsItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendsItem;
