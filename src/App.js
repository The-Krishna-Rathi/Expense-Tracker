import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Mercedes Benz",
      price: "20000",
      date: new Date(2021, 11, 20),
    },
    { id: 2, title: "Water Bottle", price: "20", date: new Date(2021, 10, 2) },
    { id: 3, title: "grocery", price: "200", date: new Date(2022, 5, 30) },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
