import styled from 'styled-components';

interface HexCellProps {
  hexCode: string;
}

const HexCell: React.FC<HexCellProps> = ({ hexCode }) => {
  const codeCopyToClipBoard = (code: string) => {
    navigator.clipboard.writeText(code);
  };
  return (
    <Cell
      hexCode={hexCode}
      onClick={() => codeCopyToClipBoard(`#${hexCode}`)}
    />
  );
};

const Cell = styled.div<HexCellProps>`
  width: 100px;
  height: 50px;
  position: relative;
  float: left;
  background: ${({ hexCode }) => `#${hexCode}`};
  margin-top: 30px;
  margin-bottom: 5px;
  margin-right: 5px;
  transition: all 0.3s ease;
  &:before {
    content: '';
    position: absolute;
    border-bottom: 30px solid ${({ hexCode }) => `#${hexCode}`};
    border-right: 50px solid transparent;
    border-left: 50px solid transparent;
    top: -30px;
    transition: all 0.3s ease;
  }
  &:after {
    content: '';
    position: absolute;
    border-top: 30px solid ${({ hexCode }) => `#${hexCode}`};
    border-right: 50px solid transparent;
    border-left: 50px solid transparent;
    bottom: -30px;
    transition: all 0.3s ease;
  }
`;

export default HexCell;
