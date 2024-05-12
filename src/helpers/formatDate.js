import { formatDistanceToNow, format } from 'date-fns';

export const formatDateToNow = date => {
  return formatDistanceToNow(date, { addSuffix: true });
};

export const formatDate = (date, formatString = 'MM/dd/yyyy') => {
  return format(new Date(date), formatString);
};
