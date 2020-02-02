import React from 'react';
import PropTypes from 'prop-types';
import FriendsItem from './FriendsItem';
import styles from './FriendsList.module.css';

const FriendList = ({ data }) => (
  <ul className={styles.friendsList}>
    <FriendsItem friends={data} />
  </ul>
);

FriendList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
