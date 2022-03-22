import LikeButton, { ILikeButton } from 'components/HexPalette/LikeButton';
import { copyOnClipBoard } from 'utils/common';
import { colorTagList } from 'components/Tag/ColorTag';

import styles from './DetailPalette.module.scss';
import ColorTag, { IColorTag } from 'components/Tag/ColorTag';

interface IDetailFooter extends ILikeButton {
  tags: string[];
}

const DetailFooter: React.FC<IDetailFooter> = ({ paletteId, like, tags }) => {
  const copyLink = () => {
    copyOnClipBoard(window.location.href);
  };

  return (
    <div className={styles.DetailFooter}>
      <div className={styles.buttonContainer}>
        <LikeButton paletteId={paletteId} like={like} />
        <button onClick={copyLink}>link</button>
      </div>
      <div className={styles.tagList}>
        {tags.map((tag, index) => {
          const matchTag: IColorTag | undefined = colorTagList.find(
            (colorTag) => tag === colorTag.label
          );
          return matchTag ? <ColorTag tag={matchTag} key={index} /> : null;
        })}
      </div>
    </div>
  );
};

export default DetailFooter;
