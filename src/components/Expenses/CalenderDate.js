import "./CalenderDate.css";

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const calenderDate = (props) => {
  return (
    <div className="expense-item__calender">
      <div className="calender-month">{month[props.cd.getMonth()]}</div>
      <div className="calender-year">{props.cd.getFullYear()}</div>
      <div className="calender-date">{props.cd.getDate()}</div>
    </div>
  );
};

export default calenderDate;
