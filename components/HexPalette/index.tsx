import React from 'react';

export interface HexPaletteProps {
  id: string;
  unparsedHexCode: string;
  like: number;
  createdAt: Date;
  author: string;
}

const HexPalette: React.FC<HexPaletteProps> = ({ unparsedHexCode }) => {
  return <div>index</div>;
};

export default HexPalette;
