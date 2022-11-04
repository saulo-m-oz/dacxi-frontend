export function useFormatDate() {
  function dateFormat(dateToFormat) {
    const [year, month, day] = dateToFormat.split("-");
    const formattedDate = [day, month, year].join("-");
    return formattedDate;
  }

  return { dateFormat };
}
