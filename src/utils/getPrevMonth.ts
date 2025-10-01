  export function getPrevMonth(date: Date): Date {
    const prevMonth = new Date(date);
    prevMonth.setMonth(date.getMonth() - 1); 
    return prevMonth;
  }
