import { expenseApi } from "../../API";
import { expenseTypes, REQUESTMETHOD } from "../types";

export const getExpenses = ({ query, callBack }) => {
  return {
    type: expenseTypes.GET_ALL_EXPENSES,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: expenseApi.GET_EXPENSES,
      callBack,
    },
  };
};

export const addExpense = ({ data, callBack }) => {
  return {
    type: expenseTypes.ADD_EXPENSE,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: expenseApi.ADD_EXPENSE,
      isFormData:true,
      enableMessages: true,
      successMessage: "Expense Added Successfully",
      failMessage: "Failed to add Expense",
      callBack,
    },
  };
};

export const editExpense = ({ data, callBack }) => {
  return {
    type: expenseTypes.UPDATE_EXPENSE,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: expenseApi.UPDATE_EXPENSE,
     
      isFormData:true,

      enableMessages: true,
      successMessage: "Expense Updated Successfully",
      failMessage: "Failed to update Expense",
      callBack,
    },
  };
};

export const deleteExpense = ({ data, callBack }) => {
  return {
    type: expenseTypes.DELETE_EXPENSE,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: expenseApi.DELETE_EXPENSE,
      isFormData: false,
      enableMessages: true,
      successMessage: "Expense deleted Successfully",
      failMessage: "Failed to delete Expense",
      callBack,
    },
  };
};

export const getAllExpenses = () => {
  return {
    type: expenseTypes.GET_ALL_EXPENSES,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: expenseApi.GET_ALL_EXPENSES,
    },
  };
};
