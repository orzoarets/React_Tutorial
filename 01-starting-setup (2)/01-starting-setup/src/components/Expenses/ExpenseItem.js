import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
          <h2>{props.amount}</h2>
        </div>
      </div>
      <button onclick="">Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
