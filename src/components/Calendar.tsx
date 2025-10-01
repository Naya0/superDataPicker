import { useEffect } from "react";
import { getDayFromMonth } from "../utils/getDayFromMonth";
import "../styles/calendar.css";
import { weekDays } from "../utils/constants";
import type { DataTitles } from "../types/types";

interface Props {
  currentDate: Date;
  changeMonth: (newDate: Date) => void;
  sundayFirst: boolean;
  twoDates: boolean;
  isActiveFirst: boolean;
  dataListTitlesWeeksday: DataTitles;
  firstDate: Date;
  secondDate: Date | null;
}

const Calendar = ({
  currentDate,
  changeMonth,
  sundayFirst,
  twoDates,
  isActiveFirst,
  firstDate,
  secondDate,
  dataListTitlesWeeksday,
}: Props) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const { arrayWeeks, countDaysLastMonth, countDaysNextMonth } =
    getDayFromMonth(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      sundayFirst
    );

  let titleWeekDays = dataListTitlesWeeksday.short?.length
    ? dataListTitlesWeeksday.short
    : weekDays["ru"].short;

  if (sundayFirst) {
    titleWeekDays = [
      ...titleWeekDays.slice(-1),
      ...titleWeekDays.slice(0, titleWeekDays.length - 1),
    ];
  }

  const indexAfterLastDay = 7 - countDaysNextMonth;

  const getDateFromCell = (weekIndex: number, dayIndex: number) => {
    const isPrevMonth = weekIndex === 0 && dayIndex < countDaysLastMonth;
    const isNextMonth =
      weekIndex === arrayWeeks.length - 1 && dayIndex >= indexAfterLastDay;

    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    let day = arrayWeeks[weekIndex][dayIndex];

    if (isPrevMonth) {
      month -= 1;
      if (month < 0) {
        month = 11;
        year -= 1;
      }
    } else if (isNextMonth) {
      month += 1;
      if (month > 11) {
        month = 0;
        year += 1;
      }
    }

    const date = new Date(year, month, day);
    date.setHours(0, 0, 0, 0);
    return date;
  };

  const handleChangeDay = (weekIndex: number, dayIndex: number) => {
    const newDate = getDateFromCell(weekIndex, dayIndex);

    if (newDate < today) return;

    if (twoDates) {
      if (isActiveFirst) {
        if (secondDate && newDate > secondDate) return;
      } else {
        if (newDate < firstDate) return;
      }
    }

    changeMonth(newDate);
  };

  return (
    <div className="table-container">
      <table className="calendar_table">
        <thead>
          <tr>
            {titleWeekDays.map((el, i) => (
              <th key={i}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {arrayWeeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => {
                const isPrevMonth = i === 0 && j < countDaysLastMonth;
                const isNextMonth =
                  i === arrayWeeks.length - 1 && j >= indexAfterLastDay;

                const cellDate = getDateFromCell(i, j);

                const isToday = cellDate.getTime() === today.getTime();

                const isActive =
                  cellDate.getTime() === firstDate.getTime() ||
                  (secondDate && cellDate.getTime() === secondDate.getTime());

                let activeBetween = false;

                if (twoDates && firstDate && secondDate) {
                  let startDate = firstDate;
                  let endDate = secondDate;
                  if (startDate > endDate) [startDate, endDate] = [endDate, startDate];
                  if (cellDate > startDate && cellDate < endDate)
                    activeBetween = true;
                }

                return (
                  <td
                    key={j}
                    onClick={() => handleChangeDay(i, j)}
                    className={`
                      ${isPrevMonth || isNextMonth ? "disable" : ""}
                      ${isToday ? "today" : ""}
                      ${isActive ? "active" : ""}
                      ${activeBetween ? "active-between" : ""}
                    `}
                  >
                    {day}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
