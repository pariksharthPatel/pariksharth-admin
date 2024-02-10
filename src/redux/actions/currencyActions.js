import { currencyApi } from "../../API";
import { currencyTypes, REQUESTMETHOD } from "../types";

export const getAllCurrencys = () => {
  return {
    type: currencyTypes.GET_ALL_CURRENCYS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: currencyApi.GET_ALL_CURRENCYS,
    },
  };
};

export const getCurrencys = ({ query, callBack }) => {
  return {
    type: currencyTypes.GET_CURRENCYS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: currencyApi.GET_CURRENCYS,
      callBack,
    },
  };
};




export const addCurrency = ({ data, callBack }) => {
  return {
    type: currencyTypes.ADD_CURRENCY,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: currencyApi.ADD_CURRENCY,
      isFormData: false,
      enableMessages: true,
      successMessage: "Currency Added Successfully",
      failMessage: "Failed to add Currency",
      callBack,
    },
  };
};

export const editCurrency = ({ data, callBack }) => {
  return {
    type: currencyTypes.UPDATE_CURRENCY,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: currencyApi.UPDATE_CURRENCY,
      isFormData: false,

      enableMessages: true,
      successMessage: "Currency Updated Successfully",
      failMessage: "Failed to update Currency",
      callBack,
    },
  };
};

export const deleteCurrency = ({ data, callBack }) => {
  return {
    type: currencyTypes.DELETE_CURRENCY,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: currencyApi.DELETE_CURRENCY,
      isFormData: false,
      enableMessages: true,
      successMessage: "Currency deleted Successfully",
      failMessage: "Failed to delete Currency",
      callBack,
    },
  };
};
