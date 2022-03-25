import DateLabel from 'components/DateLabel';

import styles from './DetailPalette.module.scss';

interface IDetailHeader {
  title: string;
  createdAt: Date;
}

const DetailHeader = ({ title, createdAt }: IDetailHeader) => {
  return (
    <div className={styles.DetailHeader}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.date}>
        <DateLabel date={createdAt} />
      </div>
    </div>
  );
};

export default DetailHeader;
