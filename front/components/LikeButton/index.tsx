import { useSelector } from 'react-redux';
import { RootState } from 'store/modules';
import LikeHeart from './heart.svg';
import styles from './LikeButton.module.scss';

export interface ILikeButton {
  paletteId: string;
  like: number;
}

const LikeButton: React.FC<ILikeButton> = ({ paletteId, like }) => {
  const { likePalettes } = useSelector((state: RootState) => state.paletteList);
  const isLiked = likePalettes.includes(paletteId);
  return (
    <div className={styles.LikeButton}>
      <LikeHeart width={20} height={20} fill={isLiked ? '' : '#ececec'} />
      <p>{like}</p>
    </div>
  );
};

export default LikeButton;
