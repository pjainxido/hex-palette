import styles from './Cell.module.scss';

interface HexCellProps {
  cellIndex: number;
  selectCell?: (target: number) => void;
  handleLabel: (code: string) => void;
  hexCode: string;
}

const HexCell: React.FC<HexCellProps> = ({
  cellIndex,
  hexCode,
  selectCell,
  handleLabel,
}) => {
  const copiedText = 'copied!';

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
      style={{
        background: hexCode,
      }}
      onMouseEnter={() => handleLabel(hexCode)}
      onMouseLeave={() => handleLabel('')}
      onClick={
        selectCell
          ? () => selectCell(cellIndex)
          : () => codeCopyToClipBoard(hexCode)
      }
    >
      <div className={styles.top} style={{ borderBottomColor: hexCode }}></div>
      <div className={styles.bottom} style={{ borderTopColor: hexCode }}></div>
    </div>
  );
};

export interface CellProps {
  hexCode: string;
}

export default HexCell;
