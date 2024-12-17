import React, { useState } from "react";
import PropTypes from "prop-types";
import "./transaction.css";

const Transaction = ({ date, description, amount, balance }) => {
  const [category, setCategory] = useState("Food");
  const [note, setNote] = useState("lorem ipsum");
  const [isEditingCategory, setIsEditingCategory] = useState(false);
  const [isEditingNote, setIsEditingNote] = useState(false);

  return (
    <div className="transaction-row">
      <span>{date}</span>
      <span>{description}</span>
      <span>{amount}</span>
      <span>{balance}</span>

      <span>
        {isEditingCategory ? (
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            onBlur={() => setIsEditingCategory(false)}
          >
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        ) : (
          <>
            {category}{" "}
            <i
              className="fa fa-pencil edit-icon"
              onClick={() => setIsEditingCategory(true)}
            ></i>
          </>
        )}
      </span>

      <span>
        {isEditingNote ? (
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            onBlur={() => setIsEditingNote(false)}
          />
        ) : (
          <>
            {note}{" "}
            <i
              className="fa fa-pencil edit-icon"
              onClick={() => setIsEditingNote(true)}
            ></i>
          </>
        )}
      </span>
    </div>
  );
};

Transaction.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
};

export default Transaction;
