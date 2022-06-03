import "./ExpenseItem.css";
import CalenderDate from "./CalenderDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <CalenderDate cd={props.date}></CalenderDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
          <h2>{`$ ${props.price}`}</h2>
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
