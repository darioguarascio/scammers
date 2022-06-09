import it from "date-fns/locale/it";
import formatDistanceStrict from "date-fns/formatDistanceStrict";

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
  const locale = currLang === "it" ? it : undefined;

  const formattedTime = formatDistanceStrict(
    new Date(firstTime),
    new Date(secondTime),
    {
      locale,
    }
  );

  return formattedTime;
};
