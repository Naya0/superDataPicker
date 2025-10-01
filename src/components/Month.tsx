import type { DataTitles } from "../types/types";
import { months } from "../utils/constants";
import { getNextMonth } from "../utils/getNextMonth";
import { getPrevMonth } from "../utils/getPrevMonth";
import Icon from "./Icon/Icon";

interface Props {
  currentDate: Date;
  changeMonth: (newDate: Date) => void;
  openList: () => void;
  language?: string;
  dataListTitlesMonth?: null | DataTitles;
}

const Month = ({
  currentDate,
  changeMonth,
  openList,
  dataListTitlesMonth,
}: Props) => {
  const handleChangeMonth = (operation: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + operation);
    changeMonth(newDate);
  };

  let currentMonth = currentDate.getMonth();
  let prevMonth = getPrevMonth(currentDate).getMonth();
  let newtMonth = getNextMonth(currentDate).getMonth();

  let dataListMonth = dataListTitlesMonth ? dataListTitlesMonth : months.ru;

  const handleOpenList = () => {
    openList();
  };

  return (
    <div className="calendar-month">
      <button className="btn-arrow btn" onClick={() => handleChangeMonth(-3)}>
        <Icon name="arrow" width={20} height={20} />
      </button>

      <div className="months">
        <button className="btn extra" onClick={() => handleChangeMonth(-1)}>
          {dataListMonth.short[prevMonth]}
        </button>
        <button className="btn" onClick={handleOpenList}>
          {dataListMonth.full[currentMonth]}
        </button>
        <button className="btn extra" onClick={() => handleChangeMonth(1)}>
          {dataListMonth.short[newtMonth]}
        </button>
      </div>

      <button
        className="btn-arrow btn"
        onClick={() => handleChangeMonth(3)}
        style={{ transform: `rotate(180deg)` }}
      >
        <Icon name="arrow" width={20} height={20} />
      </button>
    </div>
  );
};

export default Month;
