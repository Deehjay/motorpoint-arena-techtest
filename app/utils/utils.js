const unorm = require("unorm");

exports.formatDates = (dates) => {
  if (!dates.length) {
    return "";
  }

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDates = dates.map((date) =>
    new Date(date.date).toLocaleDateString("en-GB", options)
  );

  if (formattedDates.length === 1) {
    return formattedDates[0];
  } else if (formattedDates.length === 2) {
    return `${formattedDates[0]} and ${formattedDates[1]}`;
  } else if (formattedDates.length >= 3) {
    const lastDate = formattedDates.pop();
    return `${formattedDates.join(", ")} & ${lastDate}`;
  }
};
