export const filterDate = (arr, numYear) => {
  let currentDate = new Date();
  let lastYearDate = currentDate;
  lastYearDate.setFullYear(lastYearDate.getFullYear() - numYear);
  lastYearDate = lastYearDate.toJSON().slice(0, 10).replace(/-/g, "-");
  currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
  let response = arr
    .filter(
      (elem) =>
        Date.parse(elem.traded_on) >= Date.parse(lastYearDate) &&
        Date.parse(elem.traded_on) <= Date.parse(currentDate)
    )
    .sort((a, b) => Date.parse(a.traded_on) - Date.parse(b.traded_on));
  return response;
};
