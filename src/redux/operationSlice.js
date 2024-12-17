// src/redux/operationSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { mockAccounts } from "../services/mockData"; 

const initialState = {
  accounts: mockAccounts,
};

const operationSlice = createSlice({
  name: "operations",
  initialState,
  reducers: {
    toggleTransactions: (state, action) => {
      const accountId = action.payload;
      state.accounts = state.accounts.map((account) =>
        account.id === accountId
          ? { ...account, showTransactions: !account.showTransactions }
          : account
      );
    },
    updateOperation: (state, action) => {
      const { accountId, operationId, updatedData } = action.payload;
      const account = state.accounts.find((acc) => acc.id === accountId);
      if (account) {
        account.operations = account.operations.map((op) =>
          op.id === operationId ? { ...op, ...updatedData } : op
        );
      }
    },
  },
});

export const { toggleTransactions, updateOperation } = operationSlice.actions;
export default operationSlice.reducer;
