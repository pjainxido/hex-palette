import { CSSProperties } from 'react';
import styles from './Cell.module.scss';

interface HexCellProps {
  cellIndex: number;
  selectCell?: (target: number) => void;
  handleLabel: (code: string) => void;
  hexCode: string;
}

const Cell: React.FC<HexCellProps> = ({
  cellIndex,
  hexCode,
  selectCell,
  handleLabel,
}) => {
  const copiedText = 'copied!';

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
      className={styles.HexCell}
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
