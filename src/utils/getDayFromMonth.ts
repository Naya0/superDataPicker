export const getDayFromMonth = (
  year: number,
  month: number,
  sundayFirst?: boolean
) => {
  // Количество дней в текущем месяце
  const lastDayMonth = new Date(year, month + 1, 0).getDate();

  // Количество дней в предыдущем месяце
  const lastDayPrevMonth = new Date(year, month, 0).getDate();

  let weekDay = new Date(year, month, sundayFirst ? 2 : 1).getDay();

  if (!sundayFirst && weekDay === 0) weekDay = 7; // воскресенье в конец

  const emptyCellsBefore = weekDay - 1; // сколько ячеек до 1-го числа
  const contWeeks = Math.ceil((emptyCellsBefore + lastDayMonth) / 7); // всего недель в календаре

  const arrWeeks: number[][] = [];
  let currentDay = 1;

  for (let week = 0; week < contWeeks; week++) {
    const days: number[] = [];

    // предыдущий месяц (если первая неделя не полная)
    if (week === 0 && emptyCellsBefore > 0) {
      for (
        let d = lastDayPrevMonth - emptyCellsBefore + 1;
        d <= lastDayPrevMonth;
        d++
      ) {
        days.push(d);
      }
    }

    // Текущий месяц
    while (days.length < 7 && currentDay <= lastDayMonth) {
      days.push(currentDay);
      currentDay++;
    }

    // Следующий месяц (если последняя неделя не полная)
    if (week === contWeeks - 1 && days.length < 7) {
      let nextDay = 1;
      while (days.length < 7) {
        days.push(nextDay);
        nextDay++;
      }
    }

    arrWeeks.push(days);
  }

  // вычисляем сколько дней из след. месяца ушло в календарь
  const totalCells = contWeeks * 7;
  const countDaysNextMonth = totalCells - emptyCellsBefore - lastDayMonth;

  return {
    arrayWeeks: arrWeeks,
    countDaysLastMonth: emptyCellsBefore,
    countDaysNextMonth: countDaysNextMonth,
  };
};
