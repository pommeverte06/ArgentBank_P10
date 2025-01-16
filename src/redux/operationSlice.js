import { createSlice } from "@reduxjs/toolkit";
import { mockAccounts } from "../services/mockData";

const initialState = {
  accounts: [mockAccounts],
};

const operationSlice = createSlice({
  name: "operations",
  initialState,
  reducers: {
    toggleTransactions: (state, action) => {
      const accountId = action.payload;
      state.accounts = state.accounts.map((account) => {
        if (account.id === accountId) {
          return { ...account, showTransactions: !account.showTransactions };
        } else {
          return account;
        }
      });
    },
  },
});

export const { toggleTransactions } = operationSlice.actions;
export default operationSlice.reducer;
