const { formatDates, formatEventName } = require("../utils.js");

describe("formatDates", () => {
  test("Empty input should return empty string", () => {
    const dates = [];
    const actual = formatDates(dates);
    expect(actual).toBe("");
  });
  test("Single date object passed should return string in correct format", () => {
    const dates = [{ date: "2023-11-03" }];
    const actual = formatDates(dates);
    expect(actual).toBe("Friday, 3 November 2023");
  });
  test("2 date objects passed should return string in correct format", () => {
    const dates = [{ date: "2023-03-10" }, { date: "2023-03-11" }];
    const actual = formatDates(dates);
    expect(actual).toBe("Friday, 10 March 2023 and Saturday, 11 March 2023");
  });
  test("3 date objects passed should return string in correct format", () => {
    const dates = [
      { date: "2023-03-10" },
      { date: "2023-03-11" },
      { date: "2023-03-12" },
    ];
    const actual = formatDates(dates);
    expect(actual).toBe(
      "Friday, 10 March 2023, Saturday, 11 March 2023 & Sunday, 12 March 2023"
    );
  });
  test("Input should not be mutated", () => {
    const dates = [{ date: "2023-11-03" }];
    const actual = formatDates(dates);
    expect(dates).toEqual([{ date: "2023-11-03" }]);
  });
});
