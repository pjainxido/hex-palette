import { useEffect, useState } from 'react';
import LabelCell from './Cell/LabelCell';
import HexCell, { Cell } from './Cell/HexCell';
import styles from './Hex.module.scss';

export interface HexCodes {
  hexCodes: string[];
}

interface IHexRow extends IHexContainer {
  handleLabel: (code: string) => void;
  hexIndex: number[];
  label?: string;
}

interface IHexContainer extends HexCodes {
  selectCell?: (targetIndex: number) => void;
}

const HexRow: React.FC<IHexRow> = ({
  hexCodes,
  hexIndex,
  label,
  selectCell,
  handleLabel,
}) => {
  useEffect(() => {
    console.log(label);
  }, [label]);
  return hexCodes ? (
    <div className={styles.HexRow}>
      {label !== undefined ? (
        <>
          <HexCell
            cellIndex={hexIndex[0]}
            hexCode={hexCodes[0]}
            key={0}
            handleLabel={handleLabel}
            selectCell={selectCell}
          />
          <LabelCell label={label} />
          <HexCell
            cellIndex={hexIndex[1]}
            hexCode={hexCodes[1]}
            key={1}
            handleLabel={handleLabel}
            selectCell={selectCell}
          />
        </>
      ) : (
        hexCodes.map((code, index) => {
          console.log(hexIndex[index]);
          return (
            <HexCell
              cellIndex={hexIndex[index]}
              hexCode={code}
              key={index}
              handleLabel={handleLabel}
              selectCell={selectCell}
            />
          );
        })
      )}
    </div>
  ) : null;
};

const HexContainer: React.FC<IHexContainer> = ({ hexCodes, selectCell }) => {
  const [label, setLabel] = useState<string>('');
  const handleLabel = (code: string) => {
    setLabel(code);
  };
  return (
    <div className={styles.HexContainer}>
      <HexRow
        hexCodes={hexCodes.filter((_, index) => index < 2)}
        hexIndex={[0, 1]}
        handleLabel={handleLabel}
        selectCell={selectCell}
      />
      <HexRow
        hexCodes={hexCodes.filter((_, index) => index >= 2 && index < 4)}
        label={label}
        hexIndex={[2, 3]}
        handleLabel={handleLabel}
        selectCell={selectCell}
      />
      <HexRow
        hexCodes={hexCodes.filter((_, index) => index >= 4)}
        hexIndex={[4, 5]}
        handleLabel={handleLabel}
        selectCell={selectCell}
      />
    </div>
  );
};

export default HexContainer;
