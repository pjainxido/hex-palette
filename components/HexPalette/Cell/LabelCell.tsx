import { CellProps } from './HexCell';

import styled from 'styled-components';

interface ILabelCell {
  label: string;
}

const LabelCell: React.FC<ILabelCell> = ({ label }) => {
  const copiedText = 'copied!';

  return (
    <LabelContainer hexCode={label === copiedText ? 'transparent' : label}>
      <HexCodeText isHover={label !== ''} darken={label === copiedText}>
        {label}
      </HexCodeText>
    </LabelContainer>
  );
};

interface IHexCodeText {
  isHover: boolean;
  darken: boolean;
}

export const HexCodeText = styled.span<IHexCodeText>`
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
`;

export const LabelContainer = styled.div<CellProps>`
  width: 5rem;
  height: 2.5rem;
  position: relative;
  float: left;
  background: ${({ hexCode }) => {
    return hexCode !== '' ? hexCode : 'trpansparent';
  }};
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
  transition: all 0.3s ease;
  &:before {
    content: '';
    position: absolute;
    border-bottom: 1.5rem solid
      ${({ hexCode }) => {
        return hexCode !== '' ? hexCode : '#fff';
      }};
    border-right: 2.5rem solid transparent;
    border-left: 2.5rem solid transparent;
    top: -1.5rem;
    transition: all 0.3s ease;
  }
  &:after {
    content: '';
    position: absolute;
    border-top: 1.5rem solid
      ${({ hexCode }) => {
        return hexCode !== '' ? hexCode : '#fff';
      }};
    border-right: 2.5rem solid transparent;
    border-left: 2.5rem solid transparent;
    bottom: -1.5rem;
    transition: all 0.3s ease;
  }
`;
export default LabelCell;
