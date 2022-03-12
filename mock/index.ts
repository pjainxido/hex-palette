import { HexPaletteType } from 'components/HexPalette';

export const hexcodesMock: string[] = [
  'F7F7F7',
  'FFB72B',
  'FFE61B',
  'B5FE83',
  'F7F7F7',
  'FFB72B',
  'FFE61B',
];

export const unparsedHexCodeMock = 'F7F7F7#FFB72B#FFE61B#F7F7F7#B5FE83#FFE61B';

export const mockHexPalette: HexPaletteType = {
  id: '1',
  hexcodes: unparsedHexCodeMock,
  like: 1004,
  createdAt: new Date(2020, 3, 1),
  title: 'looooooooooooooooooooongtitle',
  tags: ['sample'],
};

export const mockPaletteList: HexPaletteType[] = [
  mockHexPalette,
  mockHexPalette,
  mockHexPalette,
  mockHexPalette,
  mockHexPalette,
  mockHexPalette,
  mockHexPalette,
  mockHexPalette,
  mockHexPalette,
  mockHexPalette,
  mockHexPalette,
];
