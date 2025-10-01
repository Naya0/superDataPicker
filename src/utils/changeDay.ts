import { getDayFromMonth } from "./getDayFromMonth";

export const changeDay = (
  weekIndex: number,
  dayIndex: number,
  currentDate: Date
) => {

  const { arrayWeeks, countDaysLastMonth, countDaysNextMonth } =
    getDayFromMonth(currentDate.getFullYear(), currentDate.getMonth());

  const indexAfterLastDay = 7 - countDaysNextMonth;

  let newMonth = currentDate.getMonth();
  let newYear = currentDate.getFullYear();
  const dayValue = arrayWeeks[weekIndex][dayIndex];

  // предыдущий месяц
  if (weekIndex === 0 && dayIndex < countDaysLastMonth) {
    newMonth -= 1;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }
  }

  // следующий месяц
  if (weekIndex === arrayWeeks.length - 1 && dayIndex >= indexAfterLastDay) {
    newMonth += 1;
    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
  }

  const newDate = new Date(newYear, newMonth, dayValue);

  return newDate;
};
