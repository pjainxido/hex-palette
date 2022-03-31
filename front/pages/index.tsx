import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import PaletteList, { IPaletteList } from 'components/PaletteList';
import { RootState } from 'store/modules';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { checkDateOnRange } from 'utils/common';
import { Palette } from 'store/modules/paletteList';

const Home: NextPage<IPaletteList> = ({ contents }) => {
  const [paletteList, setPaletteList] = useState<Palette[]>([]);
  const [page, setPage] = useState<number>(1);
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
    const filterContents = contents
      .filter((palette) => filterPalette(palette))
      .sort((prev, next) => sortPalette(prev, next));
    setPaletteList([...filterContents]);
  }, []);

  // useEffect(() => {}, [page]);

  return (
    <div>
      <PaletteList contents={paletteList} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const response = await axios.get('http://localhost:3004/palettes');
  const response = await axios.get(
    'http://localhost:8080/palettes?startDate=2021-2-20&sort=old&page=0'
  );

  return {
    props: {
      contents: response.data,
    },
  };
};

export default Home;
