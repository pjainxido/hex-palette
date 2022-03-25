import { dateToLabelString } from 'utils/common';
import styles from './DateLabel.module.scss';

interface IDateLabel {
  date: Date;
}

const DateLabel = ({ date }: IDateLabel) => {
  return <div className={styles.date}>{dateToLabelString(date)}</div>;
};

export default DateLabel;
