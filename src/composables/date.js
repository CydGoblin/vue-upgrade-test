export function useDate() {
  const day = todoDay()
  const date = new Date().getDate()
  const ord = nth(new Date().getDate())
  const year = new Date().getFullYear()

  function todoDay() {
    const d = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return days[d.getDay()];
  }

  function nth(d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  return {
    day, date, ord, year
  }
}
