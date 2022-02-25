import HexRow from './HexRow';

export interface HexCodes {
  hexCodes: string[];
}

const HexContainer: React.FC<HexCodes> = ({ hexCodes }) => {
  return (
    <div>
      <HexRow hexCodes={hexCodes.filter((_, index) => index < 2)} />
      <HexRow
        hexCodes={hexCodes.filter((_, index) => index >= 2 && index < 5)}
      />
      <HexRow hexCodes={hexCodes.filter((_, index) => index >= 5)} />
    </div>
  );
};

export default HexContainer;
