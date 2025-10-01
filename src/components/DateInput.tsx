import React, { useEffect, useRef, useState } from "react";

interface Props {
  currentDate: Date;
  changeData: (data: Date) => void;
  isFirst?: boolean;
  changeNumberDate: (isFirst: boolean) => void;
  format: "dd.mm.yyyy" | "yyyy-mm-dd";
}

const DateInput = ({
  currentDate,
  changeData,
  isFirst = true,
  changeNumberDate,
  format,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>(formatDate(currentDate, format));
  const inputRef = useRef<HTMLInputElement>(null);
  const formatLower = format.toLowerCase();

  function formatDate(date: Date, fmt: string) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return fmt === "dd.mm.yyyy" ? `${day}.${month}.${year}` : `${year}-${month}-${day}`;
  }

  const changeFocus = () => {
    changeNumberDate(isFirst);
  };

  useEffect(() => {
    setInputValue(formatDate(currentDate, formatLower));
  }, [currentDate, formatLower]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let regex: RegExp;

    if (formatLower === "dd.mm.yyyy") {
      value = value.replace(/[^\d.]/g, "");
      regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    } else {
      value = value.replace(/[^\d-]/g, "");
      regex = /^(\d{4})-(\d{2})-(\d{2})$/;
    }

    setInputValue(value);

    const match = value.match(regex);
    if (match) {
      const [_, part1, part2, part3] = match;
      const [day, month, year] =
        formatLower === "dd.mm.yyyy"
          ? [Number(part1), Number(part2), Number(part3)]
          : [Number(part3), Number(part2), Number(part1)];

      const newDate = new Date(year, month - 1, day);
      if (!isNaN(newDate.getTime())) {
        changeData(newDate);
      }
    }
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onFocus={changeFocus}
        className="input-date"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default DateInput;
