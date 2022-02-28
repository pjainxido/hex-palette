import { useState } from 'react';
import HexCell from './HexCell';
import styles from './Hex.module.scss';

export interface HexCodes {
  hexCodes: string[];
}

interface IHexRow extends HexCodes {
  handleLabel: (code: string) => void;
  isLabelRow?: boolean;
  label?: string;
}

const HexRow: React.FC<IHexRow> = ({
  hexCodes,
  isLabelRow = false,
  label,
  handleLabel,
}) => {
  return hexCodes ? (
    <div className={styles.HexRow}>
      {isLabelRow ? (
        <>
          <HexCell hexCode={hexCodes[0]} key={0} handleLabel={handleLabel} />
          <HexCell
            isLabelCell
            hexCode={hexCodes[1]}
            label={label}
            handleLabel={handleLabel}
          />
          <HexCell hexCode={hexCodes[1]} key={1} handleLabel={handleLabel} />
        </>
      ) : (
        hexCodes.map((code, index) => {
          return (
            <HexCell hexCode={code} key={index} handleLabel={handleLabel} />
          );
        })
      )}
    </div>
  ) : null;
};

const HexContainer: React.FC<HexCodes> = ({ hexCodes }) => {
  const [label, setLabel] = useState<string>('');
  const handleLabel = (code: string) => {
    setLabel(code);
  };
  return (
    <div className={styles.HexContainer}>
      <HexRow
        hexCodes={hexCodes.filter((_, index) => index < 2)}
        handleLabel={handleLabel}
      />
      <HexRow
        isLabelRow
        hexCodes={hexCodes.filter((_, index) => index >= 2 && index < 4)}
        label={label}
        handleLabel={handleLabel}
      />
      <HexRow
        hexCodes={hexCodes.filter((_, index) => index >= 4)}
        handleLabel={handleLabel}
      />
    </div>
  );
};

export default HexContainer;
