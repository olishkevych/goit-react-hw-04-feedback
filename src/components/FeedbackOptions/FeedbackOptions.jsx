import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <div className={styles.wrapper}>
      {options.map(option => (
        <button
          className={styles.button}
          key={option}
          value={option}
          onClick={handleClick}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'bad', 'neutral']))
    .isRequired,
  handleClick: PropTypes.func.isRequired,
};
