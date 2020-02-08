import React from 'react';
import styles from './Profile.module.scss';

const Profile = ({ user }) => {
  const stats = Object.entries(user.stats);
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={user.avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{user.name}</p>
        <p className={styles.tag}>{user.tag}</p>
        <p className={styles.location}>{user.location}</p>
      </div>

      <ul className={styles.stats}>
        {stats.map((item, index) => (
          <li key={index} className={styles.st_items}>
            <span className={styles.label}>{item[0]}</span>
            <span className={styles.quantity}>{item[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
