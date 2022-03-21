import styles from './HexPalette.module.scss';

export interface ILikeButton {
  paletteId: string;
  like: number;
}

const LikeButton: React.FC<ILikeButton> = ({ paletteId, like }) => {
  return <div className={styles.like}>Like</div>;
};

export default LikeButton;
