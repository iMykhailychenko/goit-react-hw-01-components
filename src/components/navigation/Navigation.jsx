import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = ({ tasks }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {tasks.map((item, index) => (
          <li key={index} className={styles.item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
