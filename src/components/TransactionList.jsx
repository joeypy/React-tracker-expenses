import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
