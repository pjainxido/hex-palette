type EditPaletteState = {
  hexCodes: string[];
  onPicker: boolean;
  targetIndex: number;
  pickerColor: string;
};

const defaultHexCodes: string[] = [
  '#999999',
  '#aaaaaa',
  '#bbbbbb',
  '#cccccc',
  '#dddddd',
  '#eeeeee',
];

const initialPaletteState: EditPaletteState = {
  hexCodes: defaultHexCodes,
  onPicker: false,
  targetIndex: 0,
  pickerColor: 'ffffff',
};

type EditPaletteAction =
  | { type: 'SELECT_PALETTE'; target: number }
  | { type: 'CLOSE_PICKER' }
  | { type: 'HANDLE_PICKER'; hexCode: string };

const editPaletteReducer = (
  state: EditPaletteState,
  action: EditPaletteAction
): EditPaletteState => {
  switch (action.type) {
    case 'SELECT_PALETTE':
      return {
        ...state,
        pickerColor: state.hexCodes[action.target],
        onPicker: true,
        targetIndex: action.target,
      };
    case 'CLOSE_PICKER':
      return {
        ...state,
        onPicker: false,
      };
    case 'HANDLE_PICKER':
      const { hexCode } = action;
      state.hexCodes.splice(state.targetIndex, 1, hexCode);

      return {
        ...state,
      };
  }
};

export { editPaletteReducer, initialPaletteState };
