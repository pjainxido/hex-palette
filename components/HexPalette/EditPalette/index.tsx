import { useEffect, useReducer } from 'react';
import HexContainer from '../HexContainer';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import {
  initialPaletteState,
  editPaletteReducer,
} from 'reducers/editPaletteReducer';

const EditPalette = () => {
  const [state, dispatch] = useReducer(editPaletteReducer, initialPaletteState);
  const { hexCodes, onPicker, pickerColor } = state;

  const localStoargeKey = 'savedCodes';
  useEffect(() => {
    const localCodes = window.localStorage.getItem(localStoargeKey);

    console.log(localCodes);
  }, []);

  const handlePicker = (color: string) => {
    dispatch({ type: 'HANDLE_PICKER', hexCode: color });
  };

  const selectCell = (targetIndex: number) => {
    dispatch({ type: 'SELECT_PALETTE', target: targetIndex });
  };

  useEffect(() => {
    window.localStorage.setItem(localStoargeKey, hexCodes.toString());
  }, [hexCodes]);

  return (
    <div>
      <HexContainer hexCodes={hexCodes} selectCell={selectCell} />
      {onPicker && (
        <>
          <HexColorPicker color={pickerColor} onChange={handlePicker} />
          <HexColorInput color={pickerColor} onChange={handlePicker} />
        </>
      )}
    </div>
  );
};

export default EditPalette;
