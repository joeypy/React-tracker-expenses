import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <div className="container">
          <Header />
          <Balance />
          <IncomeExpenses />
          <AddTransaction />
        </div>
        <div className="container">
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
