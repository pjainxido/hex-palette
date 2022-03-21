import { getTimeDiff } from 'utils/common';
import styles from './DetailPalette.module.scss';
interface IDetailHeader {
  title: string;
  createdAt: Date;
}

const DetailHeader = ({ title, createdAt }: IDetailHeader) => {
  return (
    <div className={styles.DetailHeader}>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>{getTimeDiff(createdAt)}</div>
    </div>
  );
};

export default DetailHeader;
