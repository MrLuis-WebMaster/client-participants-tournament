import { DateTime } from "luxon";

const transformFormattedDateTime = (dateTime:string) => DateTime.fromISO(dateTime).setLocale('es');

export const formattedDate = (dateTime:string) => {
  const userTimeZone = Intl.DateTimeFormat('es').resolvedOptions().timeZone;
  const formattedDateTime = transformFormattedDateTime(dateTime).setZone(userTimeZone);
  return formattedDateTime.toLocaleString({
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
};

export const formattedTime = (dateTime:string) => {
  const userTimeZone = Intl.DateTimeFormat('es').resolvedOptions().timeZone;
  const formattedDateTime = transformFormattedDateTime(dateTime).setZone(userTimeZone);

  return formattedDateTime.toLocaleString({
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

export const fullFormattedDateTime = (dateTime:string) => {
  const date = formattedDate(dateTime);
  const time = formattedTime(dateTime);
  return `${date} - ${time}`;
};
