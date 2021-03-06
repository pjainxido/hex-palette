import { Palette } from 'store/modules/paletteList';

export const hexCodesMock: string[] = [
  'F7F7F7',
  'FFB72B',
  'FFE61B',
  'B5FE83',
  'F7F7F7',
  'FFB72B',
  'FFE61B',
];

export const unparsedhexCodeMock = 'F7F7F7#FFB72B#FFE61B#F7F7F7#B5FE83#FFE61B';

export const mockHexPalette: Palette = {
  id: '1',
  hexCodes: unparsedhexCodeMock,
  like: 1004,
  createdAt: new Date(2020, 3, 1),
  title: 'looooooooooooooooooooongtitle',
  tags: ['sample', 'red', 'orange'],
};

export const mockPaletteList: Palette[] = [
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
