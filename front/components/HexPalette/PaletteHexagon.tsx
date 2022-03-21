import { useState } from 'react';
import LabelCell from './Cell/LabelCell';
import Cell from './Cell';
import styles from './HexPalette.module.scss';

export interface HexCodes {
  hexCodes: string[];
}

interface IPaletteRow extends IPaletteHexagon {
  handleLabel: (code: string) => void;
  hexIndex: number[];
  label?: string;
}

interface IPaletteHexagon extends HexCodes {
  isLarge?: boolean;
  selectCell?: (targetIndex: number) => void;
}

const PaletteRow: React.FC<IPaletteRow> = ({
  hexCodes,
  hexIndex,
  label,
  selectCell,
  handleLabel,
  isLarge = false,
}) => {
  return hexCodes ? (
    <div className={isLarge ? styles.LargeRow : styles.Row}>
      {label !== undefined ? (
        <>
          <Cell
            cellIndex={hexIndex[0]}
            hexCode={hexCodes[0]}
            key={0}
            handleLabel={handleLabel}
            selectCell={selectCell}
            isLarge={isLarge}
          />
          <LabelCell label={label} isLarge={isLarge} />
          <Cell
            cellIndex={hexIndex[1]}
            hexCode={hexCodes[1]}
            key={1}
            handleLabel={handleLabel}
            selectCell={selectCell}
            isLarge={isLarge}
          />
        </>
      ) : (
        hexCodes.map((code, index) => {
          return (
            <Cell
              isLarge={isLarge}
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

const PaletteHexagon: React.FC<IPaletteHexagon> = ({
  hexCodes,
  selectCell,
  isLarge = false,
}) => {
  const [label, setLabel] = useState<string>('');
  const handleLabel = (code: string) => {
    setLabel(code);
  };
  return (
    <div className={styles.PaletteHexagon}>
      <PaletteRow
        hexCodes={hexCodes.filter((_, index) => index < 2)}
        hexIndex={[0, 1]}
        handleLabel={handleLabel}
        selectCell={selectCell}
        isLarge={isLarge}
      />
      <PaletteRow
        hexCodes={hexCodes.filter((_, index) => index >= 2 && index < 4)}
        label={label}
        hexIndex={[2, 3]}
        handleLabel={handleLabel}
        selectCell={selectCell}
        isLarge={isLarge}
      />
      <PaletteRow
        hexCodes={hexCodes.filter((_, index) => index >= 4)}
        hexIndex={[4, 5]}
        handleLabel={handleLabel}
        selectCell={selectCell}
        isLarge={isLarge}
      />
    </div>
  );
};

export default PaletteHexagon;
