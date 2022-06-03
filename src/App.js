import Expenses from "./components/Expenses/Expenses";

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
      <h2>Hellow react</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
