import formatDistanceStrict from "date-fns/formatDistanceStrict";
import enLocale from "date-fns/locale/en-US";
import itLocale from "date-fns/locale/it";

export const getFormattedDateTime = (time, currLang, options) => {
  const formatter = new Intl.DateTimeFormat(currLang, {
    dateStyle: "medium",
    timeStyle: "medium",
    ...options,
  });

  const formattedDateTime = formatter.format(new Date(time));

  return formattedDateTime;
};

export const getTimeDifference = (firstTime, secondTime, currLang) => {
  const formattedTime = formatDistanceStrict(
    new Date(firstTime),
    new Date(secondTime),
    {
      locale: dateTimeLocales[currLang],
    }
  );

  return formattedTime;
};

const dateTimeLocales = {
  en: enLocale,
  it: itLocale,
};
