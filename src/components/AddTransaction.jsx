import { useState } from "react";

const AddTransaction = () => {
  const [text, setText] = useState(undefined);
  const [amount, setAmount] = useState(undefined);

  const handleSubmit = (e) => {
    // e.preventDefault();
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Label</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            required
          />
        </div>
        <button className="btn" onClick={handleSubmit}>
          {" "}
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
