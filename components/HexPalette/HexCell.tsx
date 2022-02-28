import styled from 'styled-components';

interface HexCellProps {
  label?: string;
  isLabelCell?: boolean;
  handleLabel: (code: string) => void;
  hexCode: string;
}

const HexCell: React.FC<HexCellProps> = ({
  hexCode,
  isLabelCell = false,
  label = '',
  handleLabel,
}) => {
  const sharpCode = '#' + hexCode;
  const copiedText = 'copied!';

  const alertOnTextCopied = () => {
    handleLabel(copiedText);
    setTimeout(() => {
      handleLabel(sharpCode);
    }, 2000);
  };

  const codeCopyToClipBoard = (code: string) => {
    alertOnTextCopied();
    navigator.clipboard.writeText(code);
  };

  return isLabelCell ? (
    <LabelCell>
      <HexCodeText isHover={label !== ''} darken={label === copiedText}>
        {label}
      </HexCodeText>
    </LabelCell>
  ) : (
    <Cell
      hexCode={sharpCode}
      onMouseEnter={() => handleLabel(sharpCode)}
      onMouseLeave={() => handleLabel('')}
      onClick={() => codeCopyToClipBoard(sharpCode)}
    />
  );
};

interface IHexCodeText {
  isHover: boolean;
  darken: boolean;
}

const HexCodeText = styled.span<IHexCodeText>`
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  color: #fff;
  background-color: rgba(0, 0, 0, ${({ darken }) => (darken ? 1 : 0.1)});
  font-size: 0.8rem;
  opacity: ${({ isHover }) => (isHover ? 1 : 0)};
  padding: 0.5rem;
  /* &:hover {
    opacity: 1;
  } */
`;

// const Cell = styled.div<HexCellProps>`
//   width: 7rem;
//   height: 3.5rem;
//   position: relative;
//   float: left;
//   background: ${({ hexCode }) => `${hexCode}`};
//   margin-top: 2.1rem;
//   margin-bottom: 0.35rem;
//   margin-right: 0.35rem;
//   transition: all 0.3s ease;
//   &:before {
//     content: '';
//     position: absolute;
//     border-bottom: 2.1rem solid ${({ hexCode }) => `${hexCode}`};
//     border-right: 3.5rem solid transparent;
//     border-left: 3.5rem solid transparent;
//     top: -2.1rem;
//     transition: all 0.3s ease;
//   }
//   &:after {
//     content: '';
//     position: absolute;
//     border-top: 2.1rem solid ${({ hexCode }) => `${hexCode}`};
//     border-right: 3.5rem solid transparent;
//     border-left: 3.5rem solid transparent;
//     bottom: -2.1rem;
//     transition: all 0.3s ease;
//   }
// `;

const LabelCell = styled.div`
  width: 5rem;
  height: 2.5rem;
  position: relative;
  float: left;
  background: transparent;
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
  transition: all 0.3s ease;
  &:before {
    content: '';
    position: absolute;
    border-bottom: 1.5rem solid transparent;
    border-right: 2.5rem solid transparent;
    border-left: 2.5rem solid transparent;
    top: -1.5rem;
    transition: all 0.3s ease;
  }
  &:after {
    content: '';
    position: absolute;
    border-top: 1.5rem solid transparent;
    border-right: 2.5rem solid transparent;
    border-left: 2.5rem solid transparent;
    bottom: -1.5rem;
    transition: all 0.3s ease;
  }
`;

interface CellProps {
  hexCode: string;
}

const Cell = styled.div<CellProps>`
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