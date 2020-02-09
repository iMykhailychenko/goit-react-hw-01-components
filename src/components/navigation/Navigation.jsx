import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = ({ props }) => {
  const { tasks, page, setPage } = props;
  const { value } = page;

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {tasks.map((item, index) => (
          <li
            className={styles.item + (value === `page_${index + 1}` ? ` ${styles.active}` : '')}
            onClick={() => setPage({ value: `page_${index + 1}` })}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
