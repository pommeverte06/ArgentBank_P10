import React, { useState } from "react";
import "./operations.css";

const Operation = ( ) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingNote, setEditingNote] = useState(null);
  const [editableData, setEditableData] = useState({});

  const operations = [
    {
      id: 1,
      date: "27/02/20",
      description: "Golden Sun Bakery",
      amount: "$8.00",
      balance: "$298.00",
      transactionType: "Electronic",
      category: "Food",
      note: "lorem ipsum",
    },
    {
      id: 2,
      date: "27/02/20",
      description: "Golden Sun Bakery",
      amount: "$8.00",
      balance: "$298.00",
      transactionType: "Electronic",
      category: "Food",
      note: "lorem ipsum",
    },
  ];

  const categories = ["Food", "Transport", "Shopping"];

  const toggleRow = (id) => {
    setExpandedRow((prev) => (prev === id ? null : id));
  };

  const startEditing = (id, field) => {
    if (field === "category") setEditingCategory(id);
    if (field === "note") setEditingNote(id);
  };

  const handleChange = (id, field, value) => {
    setEditableData((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  return (
    <div className="operation-container">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Balance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {operations.map((operation) => (
            <React.Fragment key={operation.id}>
              <tr>
                <td>{operation.date}</td>
                <td>{operation.description}</td>
                <td>{operation.amount}</td>
                <td>{operation.balance}</td>
                <td>
                  <button
                    className="toggle-button"
                    onClick={() => toggleRow(operation.id)}
                  >
                    <i
                      className={`fas ${
                        expandedRow === operation.id
                          ? "fa-chevron-down"
                          : "fa-chevron-right"
                      }`}
                    ></i>
                  </button>
                </td>
              </tr>
              {expandedRow === operation.id && (
                <tr>
                  <td colSpan="5" className="transaction-details">
                    <div className="edit-field">
                      <p>
                        <strong>Transaction Type:</strong>{" "}
                        {operation.transactionType}
                      </p>
                      <p>
                        <strong>Category:</strong>{" "}
                        {editingCategory === operation.id ? (
                          <select
                            value={
                              editableData[operation.id]?.category ||
                              operation.category
                            }
                            onChange={(e) =>
                              handleChange(
                                operation.id,
                                "category",
                                e.target.value
                              )
                            }
                          >
                            {categories.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <>
                            {editableData[operation.id]?.category ||
                              operation.category}{" "}
                            <i
                              className="fas fa-pen edit-icon"
                              onClick={() =>
                                startEditing(operation.id, "category")
                              }
                            ></i>
                          </>
                        )}
                      </p>
                      <p>
                        <strong>Note:</strong>{" "}
                        {editingNote === operation.id ? (
                          <input
                            type="text"
                            value={
                              editableData[operation.id]?.note || operation.note
                            }
                            onChange={(e) =>
                              handleChange(operation.id, "note", e.target.value)
                            }
                          />
                        ) : (
                          <>
                            {editableData[operation.id]?.note || operation.note}{" "}
                            <i
                              className="fas fa-pen edit-icon"
                              onClick={() => startEditing(operation.id, "note")}
                            ></i>
                          </>
                        )}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Operation;
