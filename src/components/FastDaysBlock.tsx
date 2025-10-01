import React from "react";

interface Props {
  changeData: (newDate: Date) => void;
  fastDaysName?: { yesterday: string; today: string; tomorrow: string };
}

const FastDaysBlock = ({ changeData, fastDaysName }: Props) => {
  const getAdjustedDate = (offset: number) => {
    const date = new Date();
    date.setHours(0, 0, 0, 0); 
    date.setDate(date.getDate() + offset);
    return date;
  };

  const names = fastDaysName || {
    yesterday: "Вчера",
    today: "Сегодня",
    tomorrow: "Завтра",
  };

  return (
    <div className="fast-days-block">
      <button className="btn" onClick={() => changeData(getAdjustedDate(-1))}>
        {names.yesterday}
      </button>
      <button className="btn" onClick={() => changeData(getAdjustedDate(0))}>
        {names.today}
      </button>
      <button className="btn" onClick={() => changeData(getAdjustedDate(1))}>
        {names.tomorrow}
      </button>
    </div>
  );
};

export default FastDaysBlock;
