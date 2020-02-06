import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
      {stats.map(stat => {
        const backgroundColor = () => Math.round(Math.random() * 256);
        return (
          <li
            key={stat.id}S
            className={styles.item}
            style={{
              backgroundColor: `rgb( ${backgroundColor()} , ${backgroundColor()} , ${backgroundColor()} )`,
            }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
