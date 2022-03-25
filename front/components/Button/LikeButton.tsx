import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/modules';
import { toggleLikePalette } from 'store/modules/paletteList';
import Button from '.';
import LikeHeart from './heart.svg';
import styles from './Button.module.scss';

export interface ILikeButton {
  paletteId: string;
  like: number;
}

const LikeButton: React.FC<ILikeButton> = ({ paletteId, like }) => {
  const { likePalettes } = useSelector((state: RootState) => state.paletteList);
  const isLiked = likePalettes.includes(paletteId);
  const dispatch = useDispatch();

  const toggleLike = () => {
    dispatch(toggleLikePalette(paletteId));
  };

  return (
    <div
      className={isLiked ? styles.LikeButton : styles.Button}
      onClick={toggleLike}
    >
      <LikeHeart width={20} height={20} fill={isLiked ? '#f473b9' : '#000'} />
      <p className={styles.LikeLabel}>{like}</p>
    </div>
  );
};

export default LikeButton;
