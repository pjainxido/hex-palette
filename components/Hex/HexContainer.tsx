import HexRow from './HexRow';

export interface HexCodes {
  hexCodes: string[];
}

const HexContainer: React.FC<HexCodes> = ({ hexCodes }) => {
  return (
    <div>
      <HexRow hexCodes={hexCodes} />
      <HexRow hexCodes={hexCodes} />
      <HexRow hexCodes={hexCodes} />
    </div>
  );
};

export default HexContainer;
