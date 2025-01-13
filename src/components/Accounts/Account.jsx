import React from "react";
import PropTypes from "prop-types";
import "./account.css";

function Account({ title, amount, description, onToggle, showOperations }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button" onClick={onToggle}>
          {showOperations ? "Hide transactions" : "View transactions"}
        </button>
      </div>
    </section>
  );
};
// ajout des types pour les props
Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  showOperations: PropTypes.bool.isRequired,
};

export default Account;
