import React, { useState } from "react";
import DateInput from "./DateInput";
import Month from "./Month";
import Calendar from "./Calendar";
import FastDaysBlock from "./FastDaysBlock";
import MonthsList from "./MonthsList";
import YearsList from "./YearsList";
import ThemeToggle from "../utils/ThemeToggle";
import type { ParametrsDataPicker } from "../types/types";
import { fastDayNameRU, months, weekDays } from "../utils/constants";

const SuperDataPicker = ({
  isSundayFirst = false,
  monthsListIsVisible = true,
  yearsListIsVisible = true,
  twoDates = false,
  formatDate = "dd.mm.yyyy",
  dataListTitlesWeeksday = weekDays.ru,
  dataListTitlesMonth = months.ru,
  theme = "dark",
  fastDaysIsVisible = true,
  fastDaysName,
  getDate,
}: ParametrsDataPicker) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentDate, setCurrentDate] = useState<Date>(today);
  const [currentDateTwo, setCurrentDateTwo] = useState<Date>(today);
  const [currentDateFirst, setCurrentDateFirst] = useState<boolean>(true);
  const [isMonthListVisible, setIsMonthListVisible] = useState<boolean>(false);

  const dataFastDayName = fastDaysName ? fastDaysName : fastDayNameRU;

  const handleChangeDate = (newDate: Date) => {
    newDate.setHours(0, 0, 0, 0); // обнуляем время
    let firstDate = currentDate;
    let secondDate = currentDateTwo;

    if (twoDates) {
      if (currentDateFirst) {
        firstDate = newDate;
        setCurrentDate(newDate);
      } else {
        secondDate = newDate;
        setCurrentDateTwo(newDate);
      }
    } else {
      firstDate = newDate;
      setCurrentDate(newDate);
    }

    if (getDate) {
      getDate([firstDate, twoDates ? secondDate : null]);
    }
  };

  const changeFieldDate = (isFirst: boolean) => {
    setCurrentDateFirst(isFirst);
  };

  const handleOpenMonthsList = () => {
    setIsMonthListVisible((prev) => !prev);
  };

  return (
    <div>
      <div className="calendar_container">
        <div className="main-calendar-block">
          <DateInput
            currentDate={currentDate}
            format={formatDate}
            changeData={handleChangeDate}
            isFirst={true}
            changeNumberDate={changeFieldDate}
          />

          {twoDates && (
            <DateInput
              format={formatDate}
              currentDate={currentDateTwo}
              changeData={handleChangeDate}
              isFirst={false}
              changeNumberDate={changeFieldDate}
            />
          )}

          <Month
            dataListTitlesMonth={dataListTitlesMonth}
            currentDate={currentDate}
            changeMonth={handleChangeDate}
            openList={handleOpenMonthsList}
          />

          <Calendar
            dataListTitlesWeeksday={dataListTitlesWeeksday}
            currentDate={currentDateFirst ? currentDate : currentDateTwo}
            firstDate={currentDate}
            secondDate={twoDates ? currentDateTwo : null}
            twoDates={twoDates}
            changeMonth={handleChangeDate}
            sundayFirst={isSundayFirst}
            isActiveFirst={currentDateFirst}
          />

          {fastDaysIsVisible && (
            <FastDaysBlock
              changeData={handleChangeDate}
              fastDaysName={dataFastDayName}
            />
          )}
        </div>

        {((!monthsListIsVisible && isMonthListVisible) ||
          monthsListIsVisible) && (
          <MonthsList
            dataListTitlesMonth={dataListTitlesMonth}
            currentDate={currentDate}
            changeMonth={handleChangeDate}
            visible={monthsListIsVisible}
            visibleList={handleOpenMonthsList}
          />
        )}

        {yearsListIsVisible && (
          <YearsList currentDate={currentDate} changeData={handleChangeDate} />
        )}
      </div>

      <ThemeToggle theme={theme} />
    </div>
  );
};

export default SuperDataPicker;
