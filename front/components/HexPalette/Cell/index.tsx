import { CSSProperties } from 'react';
import styles from './Cell.module.scss';

interface HexCellProps {
  cellIndex: number;
  selectCell?: (target: number) => void;
  handleLabel: (code: string) => void;
  hexCode: string;
  isLarge?: boolean;
}

const Cell: React.FC<HexCellProps> = ({
  cellIndex,
  hexCode,
  selectCell,
  handleLabel,
  isLarge = false,
}) => {
  const copiedText = 'copied!';
  console.log(isLarge);

  const cellStyle: CSSProperties = {
    backgroundColor: hexCode,
  };

  const cellBorderStyle: CSSProperties = {
    borderBottomColor: hexCode,
    borderTopColor: hexCode,
  };

  const alertOnTextCopied = () => {
    handleLabel(copiedText);
  };

  const codeCopyToClipBoard = (code: string) => {
    alertOnTextCopied();
    navigator.clipboard.writeText(code);
  };

  return (
    <div
      className={isLarge ? styles.LargeCell : styles.Cell}
      style={cellStyle}
      onMouseEnter={() => handleLabel(hexCode)}
      onMouseLeave={() => handleLabel('')}
      onClick={
        selectCell
          ? () => selectCell(cellIndex)
          : () => codeCopyToClipBoard(hexCode)
      }
    >
      <div className={styles.top} style={cellBorderStyle}></div>
      <div className={styles.bottom} style={cellBorderStyle}></div>
    </div>
  );
};

export default Cell;
