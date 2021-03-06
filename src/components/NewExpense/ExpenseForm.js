import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new_expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="1" step="1" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-01-01" max="2024-12-31" />
        </div>
        <div className="new-expense__actions">
          <button type="submmit">Add Submit</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
