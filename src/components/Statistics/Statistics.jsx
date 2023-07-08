import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.option}>Good: {good}</li>
        <li className={styles.option}>Neutral: {neutral}</li>
        <li className={styles.option}>Bad: {bad}</li>
        <li className={styles.total}>Total: {total}</li>
        <li className={styles.total}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
