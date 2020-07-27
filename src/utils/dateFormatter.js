import dayjs from "dayjs";
import Calendar from "dayjs/plugin/calendar";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs().format();
dayjs.extend(Calendar);
dayjs.extend(updateLocale);

dayjs().calendar();

const formateDate = (date = "", locale = "en", mode = "date") => {
  const dateStyle = {
    lastDay: "[Yesterday]",
    sameDay: "[Today]",
    nextDay: "[Tomorrow]",
    lastWeek: "D/M/YYYY",
    nextWeek: "D/M/YYYY",
    sameElse: "D/M/YYYY"
  };
  const timeStyle = {
    lastDay: "h:mm A",
    sameDay: "h:mm A",
    nextDay: "h:mm A",
    lastWeek: "h:mm A",
    nextWeek: "h:mm A",
    sameElse: "h:mm A"
  };
  //   let defaultDate;
  dayjs.updateLocale(locale, {
    calendar: mode === "date" ? dateStyle : timeStyle
  });

  if (!!date === false || date.length === 0) {
    return dayjs().calendar();
  }

  return dayjs(date).calendar();
};

const isDateEqual = (dates = [], defaultDate = new Date().getTime()) => {
  const isEqual = dates.includes(defaultDate);

  return isEqual;
};
export { formateDate, isDateEqual };
