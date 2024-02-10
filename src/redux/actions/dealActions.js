import { dealApi } from "../../API";
import { dealTypes, REQUESTMETHOD } from "../types";

export const getDeals = ({ query, callBack }) => {
  return {
    type: dealTypes.GET_ALL_DEALS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: dealApi.GET_DEALS,
      callBack,
    },
  };
};

export const addDeal = ({ data, callBack }) => {
  return {
    type: dealTypes.ADD_DEAL,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: dealApi.ADD_DEAL,
     
      enableMessages: true,
      successMessage: "Deal Added Successfully",
      failMessage: "Failed to add Deal",
      callBack,
    },
  };
};

export const editDeal = ({ data, callBack }) => {
  return {
    type: dealTypes.UPDATE_DEAL,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: dealApi.UPDATE_DEAL,
     

      enableMessages: true,
      successMessage: "Deal Updated Successfully",
      failMessage: "Failed to update Deal",
      callBack,
    },
  };
};

export const deleteDeal = ({ data, callBack }) => {
  return {
    type: dealTypes.DELETE_DEAL,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: dealApi.DELETE_DEAL,
      isFormData: false,
      enableMessages: true,
      successMessage: "Deal deleted Successfully",
      failMessage: "Failed to delete Deal",
      callBack,
    },
  };
};

export const getAllCategories = () => {
  return {
    type: dealTypes.GET_ALL_DEALS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: dealApi.GET_ALL_DEALS,
    },
  };
};
