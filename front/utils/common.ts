import { TimeFrame } from 'store/modules/filter';

const dateToLabelString = (value: Date | string, todayValue?: Date): string => {
  const today = todayValue || new Date();
  const timeValue = new Date(value);

  const timeDiff = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (timeDiff < 1) return '방금전';
  if (timeDiff < 60) {
    return `${timeDiff}분전`;
  }

  const hour = Math.floor(timeDiff / 60);
  if (hour < 24) {
    return `${hour}시간전`;
  }

  const days = Math.floor(hour / 24);
  if (days < 7) {
    return `${days}일전`;
  }
  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}주 전`;
  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}개월 전`;
  const years = days / 365;
  return `${Math.floor(years)}년 전`;
};

const checkDateOnRange = (value: Date | string, option: TimeFrame) => {
  const inputDate = new Date(value);
  const today = new Date();

  switch (option) {
    case 'day':
      today.setDate(today.getDate() - 1);
      return inputDate > today;
    case 'week':
      today.setDate(today.getDate() - 7);
      return inputDate > today;
    case 'month':
      today.setMonth(today.getMonth() - 1);
      return inputDate > today;
    case 'year':
      today.setFullYear(today.getFullYear() - 1);
      return inputDate > today;
    default:
      return true;
  }
};

const copyOnClipBoard = (text: string) => {
  navigator.clipboard.writeText(text);
};

export { dateToLabelString, checkDateOnRange, copyOnClipBoard };
