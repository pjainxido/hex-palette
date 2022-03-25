//ACTIONS
const REQUEST_PALETTES = 'paletteList/REQUEST_PALETTES' as const;
const ADD_LIKE_PALETTE = 'paletteList/ADD_LIKE_PALETTE' as const;
const REMOVE_LIKE_PALETTE = 'paletteList/REMOVE_LIKE_PALETTE' as const;
const TOGGLE_LIKE_PALETTE = 'paletteList/ADD_LIKE_PALETTE' as const;

export const requestPalettes = () => ({ type: REQUEST_PALETTES });
export const toggleLikePalette = (palette: string) => ({
  type: TOGGLE_LIKE_PALETTE,
  palette: palette,
});
export const addLikePalette = (palette: string) => ({
  type: ADD_LIKE_PALETTE,
  palette: palette,
});
export const removeLikePalette = (palette: string) => ({
  type: REMOVE_LIKE_PALETTE,
  palette: palette,
});

export type PaletteListAction = ReturnType<
  | typeof requestPalettes
  | typeof addLikePalette
  | typeof removeLikePalette
  | typeof toggleLikePalette
>;

//STATE
export type Palette = {
  id: string;
  hexCodes: string;
  like: number;
  createdAt: Date;
  title: string;
  tags: string[];
};

export interface IPalettesListState {
  palettes: Palette[];
  likePalettes: string[];
  page: number;
  limit: number;
}

export const initialPaletteListState: IPalettesListState = {
  palettes: [],
  likePalettes: [],
  page: 1,
  limit: 30,
};

//REDUCER
const paletteListReducer = (
  state: IPalettesListState = initialPaletteListState,
  action: PaletteListAction
): IPalettesListState => {
  switch (action.type) {
    case REQUEST_PALETTES:
      return { ...state };
    case TOGGLE_LIKE_PALETTE:
      const likeList: string[] = state.likePalettes.includes(action.palette)
        ? state.likePalettes.filter((palette) => palette !== action.palette)
        : [...state.likePalettes, action.palette];
      window.localStorage.setItem('like_palettes', likeList.toString());
      return {
        ...state,
        likePalettes: likeList,
      };
    case ADD_LIKE_PALETTE:
      return {
        ...state,
        likePalettes: [...state.likePalettes, action.palette],
      };
    case REMOVE_LIKE_PALETTE:
      return {
        ...state,
        likePalettes: [...state.likePalettes].filter(
          (palette) => palette !== action.palette
        ),
      };
    default:
      return state;
  }
};

export default paletteListReducer;
