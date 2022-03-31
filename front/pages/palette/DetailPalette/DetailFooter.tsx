import Button from 'components/Button';
import LikeButton, { ILikeButton } from 'components/Button/LikeButton';
import { copyOnClipBoard } from 'utils/common';
import Tag from 'components/Tag';
import ColorTag, { IColorTag, colorTagList } from 'components/Tag/ColorTag';

import styles from './DetailPalette.module.scss';

interface IDetailFooter extends ILikeButton {
  tags: string[];
}

const DetailFooter: React.FC<IDetailFooter> = ({ paletteId, like, tags }) => {
  const copyLink = () => {
    copyOnClipBoard(window.location.href);
  };

  return (
    <div className={styles.DetailFooter}>
      <div className={styles.buttons}>
        <LikeButton paletteId={paletteId} like={like} />
        <Button onClick={copyLink}>copy</Button>
      </div>
      <div className={styles.tagList}>
        {tags.map((tag, index) => {
          const matchTag: IColorTag | undefined = colorTagList.find(
            (colorTag) => tag === colorTag.id
          );
          return matchTag ? (
            <ColorTag tag={matchTag} key={index} />
          ) : (
            <Tag id={tag} label={tag} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default DetailFooter;
