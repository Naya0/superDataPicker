import SuperDataPicker from "./components/SuperDataPicker";

function App() {
  const getDateSuperDataPicker = (data: [Date, Date | null]) => {
    console.log("Выбранные даты:", data);
  };

  let weekdays = {
    full: [
      "понедельникус",
      "вторникус",
      "средус",
      "четвергус",
      "пятникус",
      "субботус",
      "воскресеньюс",
    ],
    short: ["пнс", "втс", "срс", "чтс", "птс", "сбс", "всс"],
  };

  let months = {
    full: [
      "январус",
      "февральус",
      "мартус",
      "апрельус",
      "майус",
      "июньус",
      "июльус",
      "авгсутус",
      "сентябрьус",
      "октяюурьус",
      "ноябурьус",
      "декабурьус",
    ],
    short: [
      "янвс",
      "феврс",
      "мртс",
      "апрлс",
      "майс",
      "июнь",
      "июль",
      "авгс",
      "сентс",
      "октс",
      "ноябрс",
      "декабрс",
    ],
  };

  let fastDayName = {
    yesterday: "yesterday",
    today: "today",
    tomorrow: "tomorrow",
  };

  return (
    <>
      <div>
        <h1>Параметры</h1>
        <div className="instruction-list">
          <p>
            <span>isSundayFirst</span> (boolean) - Воскресенье первый день
            недели (true), default false.
          </p>
          <p>
            <span>monthsListIsVisible</span> (boolean) - Закреплен ли список
            месяцев, default true.
          </p>
          <p>
            <span>yearsListIsVisible</span>(boolean) - Закреплен ли список
            годов, default true.
          </p>
          <p>
            <span>twoDates</span>(boolean) - нужно ли использовать 2 поля дат,
            default false.
          </p>
          <p>
            <span>dataListTitlesMonth</span> список месяцов (при необходимости)
            в формате
            <code>{JSON.stringify(months)};</code>
          </p>
          <p>
            <span>dataListTitlesMonth</span> список дней недели (при
            необходимости) в формате
            <code>{JSON.stringify(weekdays)};</code>
          </p>
          <p>
            <span>theme</span>(string) принимает dark или light, default dark
          </p>
          <p>
            <span>fastDayName</span>список ближайщих дней в формате{" "}
            <code>{JSON.stringify(fastDayName)};</code>
          </p>
          <p>
            <span>getDate</span> — callback-функция для возврата выбранных дат.
          </p>
        </div>
      </div>
      <SuperDataPicker
        monthsListIsVisible={true}
        yearsListIsVisible={true}
        theme="dark"

        // isSundayFirst={true}
        // twoDates={true}
        // formatDate="yyyy-mm-dd"
        // dataListTitlesMonth={months}
        // dataListTitlesWeeksday={weekdays}
        // fastDaysIsVisible={false}
        // fastDaysName={fastDayName}

        getDate={getDateSuperDataPicker}
      />
    </>
  );
}

export default App;
