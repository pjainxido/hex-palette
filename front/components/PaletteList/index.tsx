import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/modules';

import { checkDateOnRange } from 'utils/common';
import { Palette } from 'store/modules/paletteList';
import HexPalette from 'components/HexPalette';

import styles from './PaletteList.module.scss';
import axios from 'axios';

export interface IPaletteList {
  list: Palette[];
}

const PaletteList: React.FC<IPaletteList> = ({ children, list }) => {
  const [paletteList, setPaletteList] = useState<Palette[]>([]);
  const [page, setPage] = useState<number>(0);

  const { tags, timeFrame, sort, title } = useSelector(
    (state: RootState) => state.filter
  );

  const filterPalette = (palette: Palette) => {
    const isMatchTag = tags.every((tag) => palette.tags.includes(tag));
    const isInTime = checkDateOnRange(palette.createdAt, timeFrame);
    const isTitleMatch = palette.title.match(title);
    return isMatchTag && isTitleMatch && isInTime;
  };

  const sortPalette = (prev: Palette, next: Palette) => {
    const prevDate = new Date(prev.createdAt).getTime();
    const nextDate = new Date(next.createdAt).getTime();
    switch (sort) {
      case 'hot':
        return prev.like - next.like;
      case 'old':
        return prevDate - nextDate;
      case 'random':
        return Math.random() - 0.5;
      case 'new':
        return nextDate - prevDate;
      default:
        return nextDate - prevDate;
    }
  };

  useEffect(() => {
    const filterContents = list
      .filter((palette) => filterPalette(palette))
      .sort((prev, next) => sortPalette(prev, next));
    setPaletteList([...filterContents]);
  }, []);

  const requestPaletteList = async (page: number) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/palettes?sort=${sort}&page=${page}&title=${title}`
      );
      console.log(response);
      setPaletteList((prev) => [...prev]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    requestPaletteList(page);
  }, [page]);

  return (
    <div className={styles.PaletteList}>
      {children}
      {paletteList.map((item, index) => {
        return <HexPalette key={index} palette={{ ...item }} />;
      })}
    </div>
  );
};

export default PaletteList;
