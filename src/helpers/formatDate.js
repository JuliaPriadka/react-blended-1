import { formatDistanceToNow } from 'date-fns';

export const formatDateToNow = date => {
  return formatDistanceToNow(date, { addSuffix: true });
};
