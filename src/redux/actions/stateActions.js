import { stateApi } from "../../API";
import { stateTypes, REQUESTMETHOD } from "../types";

export const getStates = ({ query, callBack }) => {
  console.log("query", query);
  return {
    type: stateTypes.GET_STATES,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: stateApi.GET_STATES,
      callBack,
    },
  };
};

export const addState = ({ data, callBack }) => {
  return {
    type: stateTypes.ADD_STATE,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: stateApi.ADD_STATE,

      enableMessages: true,
      successMessage: "State Added Successfully",
      failMessage: "Failed to add State",
      callBack,
    },
  };
};

export const editState = ({ data, callBack }) => {
  delete data.subStates;
  return {
    type: stateTypes.UPDATE_STATE,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: stateApi.UPDATE_STATE,

      enableMessages: true,
      successMessage: "State Updated Successfully",
      failMessage: "Failed to update State",
      callBack,
    },
  };
};

export const deleteState = ({ data, callBack }) => {
  return {
    type: stateTypes.DELETE_STATE,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: stateApi.DELETE_STATE,
      isFormData: false,
      enableMessages: true,
      successMessage: "State deleted Successfully",
      failMessage: "Failed to delete State",
      callBack,
    },
  };
};

export const getAllStates = () => {
  return {
    type: stateTypes.GET_ALL_STATES,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: stateApi.GET_ALL_STATES,
    },
  };
};
