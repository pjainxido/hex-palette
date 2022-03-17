import { GetServerSideProps } from 'next';
import type { NextPage } from 'next';

import PaletteList, { IPaletteList } from 'components/PaletteList';
import { RootState } from 'store/modules';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { checkDateOnRange } from 'utils/common';

const Home: NextPage<IPaletteList> = ({ contents }) => {
  const { tags, timeFrame, sort, title } = useSelector(
    (state: RootState) => state.filter
  );

  const filterContents = contents
    .filter((palette) => {
      const isMatchTag = tags.every((tag) => palette.tags.includes(tag));
      const isInTime = checkDateOnRange(palette.createdAt, timeFrame);
      const isTitleMatch = palette.title.match(title);
      return isMatchTag && isTitleMatch && isInTime;
    })
    .sort((prev, next) => {
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
    });
  return (
    <div>
      <PaletteList contents={filterContents} />
    </div>
  );
};

export const getStaticProps: GetServerSideProps = async () => {
  const response = await axios.get('http://localhost:3004/palettes');

  return {
    props: {
      contents: response.data,
    },
  };
};

export default Home;
