import { months } from "../utils/constants";
import type { DataTitles } from "../types/types";
import { useRef } from "react";
import { useOutsideAlerter } from "../hooks/useOutsideAlerter";

interface Props {
  currentDate: Date;
  changeMonth: (newDate: Date) => void;
  visible: boolean;
  visibleList: () => void;
  dataListTitlesMonth?: DataTitles | null;
}

const MonthsList = ({
  currentDate,
  changeMonth,
  visible,
  visibleList,
  dataListTitlesMonth,
}: Props) => {
  const currentMonth = currentDate.getMonth();

  const titleMonths = dataListTitlesMonth?.full ?? months["ru"].full;

  const handleChangeMonth = (i: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(i);
    changeMonth(newDate);
    visibleList();
  };

  return (
    <div className={`month-list ${!visible ? "modal" : ""}`}>
      {titleMonths.map((title, index) => (
        <button
          key={index}
          onClick={() => handleChangeMonth(index)}
          className={`month-list_item btn ${
            currentMonth === index ? "active" : ""
          }`}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default MonthsList;
