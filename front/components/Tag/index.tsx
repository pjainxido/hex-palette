import styles from './Tag.module.scss';

export interface ITag {
  id: string;
  label: string;
  onClick?: () => void;
  onClose?: (label: string) => void;
}

const Tag = ({ id, label, onClick, onClose }: ITag) => {
  return (
    <div className={styles.Tag} onClick={onClick}>
      <div className={styles.tagHash}>#</div>
      {label}
      {onClose && <label className={styles.closeLabel}></label>}
    </div>
  );
};

export default Tag;
