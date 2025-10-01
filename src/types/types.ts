export interface DataTitles {
  full: string[];
  short: string[];
}

export interface ParametrsDataPicker {
  isSundayFirst?: boolean;
  monthsListIsVisible?: boolean;
  yearsListIsVisible?: boolean;
  twoDates?: boolean;
  formatDate?: "dd.mm.yyyy" | "yyyy-mm-dd";
  dataListTitlesWeeksday?: DataTitles;
  dataListTitlesMonth?: DataTitles;
  theme?: "light" | "dark";
  fastDaysIsVisible?: boolean;
  fastDaysName?: { yesterday: string; today: string; tomorrow: string };

  getDate?: (dates: [Date, Date | null]) => void;
}
