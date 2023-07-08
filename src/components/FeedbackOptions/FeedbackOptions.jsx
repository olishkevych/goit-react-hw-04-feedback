import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.wrapper}>
      {options.map(option => (
        <button
          className={styles.button}
          key={option}
          value={option}
          onClick={onLeaveFeedback}
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
  onLeaveFeedback: PropTypes.func.isRequired,
};
