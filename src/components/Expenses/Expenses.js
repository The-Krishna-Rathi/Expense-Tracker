import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        price={props.expenses[0].price}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        price={props.expenses[1].price}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        price={props.expenses[2].price}
        date={props.expenses[2].date}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
