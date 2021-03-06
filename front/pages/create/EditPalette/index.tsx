import { useEffect, useReducer, useRef } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import PaletteHexagon from 'components/HexPalette/PaletteHexagon';
import {
  initialPaletteState,
  editPaletteReducer,
} from 'reducers/editPaletteReducer';
import useDetectClickOutside from 'hooks/useDetectClickOutside';

import styles from './EditPalette.module.scss';

const EditPalette = () => {
  const [state, dispatch] = useReducer(editPaletteReducer, initialPaletteState);
  const { hexCodes, onPicker, pickerColor } = state;
  const picker = useRef<HTMLDivElement>(null);
  useDetectClickOutside(picker, () => {
    dispatch({ type: 'CLOSE_PICKER' });
  });

  const localStoargeKey = 'savedCodes';
  useEffect(() => {
    const localCodes = window.localStorage.getItem(localStoargeKey);
    if (localCodes) {
      dispatch({ type: 'LOAD_PALETTE', hexCodes: localCodes.split(',') });
    }
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
    <div className={styles.EditPalette}>
      <PaletteHexagon
        hexCodes={hexCodes}
        selectCell={selectCell}
        isLarge={true}
      />
      {onPicker && (
        <div className={styles.Picker} ref={picker}>
          <HexColorPicker color={pickerColor} onChange={handlePicker} />
          <HexColorInput
            className={styles.colorInput}
            color={pickerColor}
            onChange={handlePicker}
          />
        </div>
      )}
    </div>
  );
};

export default EditPalette;
