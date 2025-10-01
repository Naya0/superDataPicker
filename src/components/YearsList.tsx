import Icon from "./Icon/Icon";

interface Props {
  currentDate: Date;
  changeData: (data: Date) => void;
}

const YearsList = ({ currentDate, changeData }: Props) => {
  let curretnYear = currentDate.getFullYear();

  let arrYear = [];

  for (let i = curretnYear - 5; arrYear.length < 10; i++) {
    arrYear.push(i);
  }

  const handleChacgeDate = (year: number) => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(year);
    changeData(newDate);
  };

  return (
    <div className="years-list">
      <button
        className="years-list_extra-btn"
        style={{ transform: "rotate(90deg)" }}
        onClick={() => handleChacgeDate(curretnYear - 5)}
      >
        <Icon name="arrow" fill="#9d9d9d" />
      </button>
      {arrYear.map((year, i) => (
        <button
          onClick={() => handleChacgeDate(year)}
          className={`btn ${curretnYear === year ? "active" : ""}`}
          key={i}
        >
          {year}
        </button>
      ))}
      <button
        className="years-list_extra-btn"
        style={{ transform: "rotate(-90deg)" }}
        onClick={() => handleChacgeDate(curretnYear + 5)}
      >
        <Icon name="arrow"/>
      </button>
    </div>
  );
};

export default YearsList;
