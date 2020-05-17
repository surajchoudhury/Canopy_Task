export const filterDate = (arr, numYear) => {
  let currentDate = new Date();
  let yearDate = currentDate;
  yearDate.setFullYear(yearDate.getFullYear() - numYear);
  yearDate = yearDate.toJSON().slice(0, 10);
  currentDate = new Date().toJSON().slice(0, 10);
  let response = arr
    .filter(
      (elem) =>
        Date.parse(elem.traded_on) >= Date.parse(yearDate) &&
        Date.parse(elem.traded_on) <= Date.parse(currentDate)
    )
    .sort((a, b) => Date.parse(a.traded_on) - Date.parse(b.traded_on));
  return response;
};
