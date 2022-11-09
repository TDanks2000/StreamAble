import moment from "moment";

const datesGroupByComponent = (dates, token) => {
  return dates.reduce((val, obj) => {
    const newDate = new Date(obj["airingAt"] * 1000);
    let comp = moment(newDate, "MM/DD/YYYY").format(token);
    (val[comp] = val[comp] || []).push(obj);
    return val;
  }, {});
};

const numberToDay = (num) => {
  return (
    [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][num] || ""
  );
};

export { datesGroupByComponent, numberToDay };
