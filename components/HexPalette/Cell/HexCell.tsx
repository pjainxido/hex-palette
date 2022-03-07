import styled from 'styled-components';

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
    <Cell
      hexCode={hexCode}
      onMouseEnter={() => handleLabel(hexCode)}
      onMouseLeave={() => handleLabel('')}
      onClick={
        selectCell
          ? () => selectCell(cellIndex)
          : () => codeCopyToClipBoard(hexCode)
      }
    />
  );
};

export interface CellProps {
  hexCode: string;
}

// export const LabelCell = styled.div<CellProps>`
//   width: 5rem;
//   height: 2.5rem;
//   position: relative;
//   float: left;
//   background: ${({ hexCode }) => {
//     return hexCode !== '' ? hexCode : 'trpansparent';
//   }};
//   margin-top: 1.5rem;
//   margin-bottom: 0.25rem;
//   margin-right: 0.25rem;
//   transition: all 0.3s ease;
//   &:before {
//     content: '';
//     position: absolute;
//     border-bottom: 1.5rem solid
//       ${({ hexCode }) => {
//         return hexCode !== '' ? hexCode : '#fff';
//       }};
//     border-right: 2.5rem solid transparent;
//     border-left: 2.5rem solid transparent;
//     top: -1.5rem;
//     transition: all 0.3s ease;
//   }
//   &:after {
//     content: '';
//     position: absolute;
//     border-top: 1.5rem solid
//       ${({ hexCode }) => {
//         return hexCode !== '' ? hexCode : '#fff';
//       }};
//     border-right: 2.5rem solid transparent;
//     border-left: 2.5rem solid transparent;
//     bottom: -1.5rem;
//     transition: all 0.3s ease;
//   }
// `;

export const Cell = styled.div<CellProps>`
  width: 5rem;
  height: 2.5rem;
  position: relative;
  float: left;
  background: ${({ hexCode }) => `${hexCode}`};
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
  transition: all 0.3s ease;
  &:before {
    content: '';
    position: absolute;
    border-bottom: 1.5rem solid ${({ hexCode }) => `${hexCode}`};
    border-right: 2.5rem solid transparent;
    border-left: 2.5rem solid transparent;
    top: -1.5rem;
    transition: all 0.3s ease;
  }
  &:after {
    content: '';
    position: absolute;
    border-top: 1.5rem solid ${({ hexCode }) => `${hexCode}`};
    border-right: 2.5rem solid transparent;
    border-left: 2.5rem solid transparent;
    bottom: -1.5rem;
    transition: all 0.3s ease;
  }
`;

interface CustomCellProps extends CellProps {
  size: number;
}

const CustomCell = styled.div<CustomCellProps>`
  width: 100px;
  height: 50px;
  position: relative;
  float: left;
  background: ${({ hexCode }) => `${hexCode}`};
  margin-top: 30px;
  margin-bottom: 5px;
  margin-right: 5px;
  transition: all 0.3s ease;
  &:before {
    content: '';
    position: absolute;
    border-bottom: 30px solid ${({ hexCode }) => `${hexCode}`};
    border-right: 50px solid transparent;
    border-left: 50px solid transparent;
    top: -30px;
    transition: all 0.3s ease;
  }
  &:after {
    content: '';
    position: absolute;
    border-top: 30px solid ${({ hexCode }) => `${hexCode}`};
    border-right: 50px solid transparent;
    border-left: 50px solid transparent;
    bottom: -30px;
    transition: all 0.3s ease;
  }
`;

// const Cell = styled.div<HexCellProps>`
//   width: 100px;
//   height: 50px;
//   position: relative;
//   float: left;
//   background: ${({ hexCode }) => `${hexCode}`};
//   margin-top: 30px;
//   margin-bottom: 5px;
//   margin-right: 5px;
//   transition: all 0.3s ease;
//   &:before {
//     content: '';
//     position: absolute;
//     border-bottom: 30px solid ${({ hexCode }) => `${hexCode}`};
//     border-right: 50px solid transparent;
//     border-left: 50px solid transparent;
//     top: -30px;
//     transition: all 0.3s ease;
//   }
//   &:after {
//     content: '';
//     position: absolute;
//     border-top: 30px solid ${({ hexCode }) => `${hexCode}`};
//     border-right: 50px solid transparent;
//     border-left: 50px solid transparent;
//     bottom: -30px;
//     transition: all 0.3s ease;
//   }
// `;

export default HexCell;
