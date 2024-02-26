import { boardApi } from "../../API";
import { boardTypes, REQUESTMETHOD } from "../types";

export const getBoards = ({ query, callBack }) => {
  return {
    type: boardTypes.GET_BOARDS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: boardApi.GET_BOARDS,
      callBack,
    },
  };
};

export const addBoard = ({ data, callBack }) => {
  return {
    type: boardTypes.ADD_BOARD,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: boardApi.ADD_BOARD,

      enableMessages: true,
      successMessage: "Board Added Successfully",
      failMessage: "Failed to add Board",
      callBack,
    },
  };
};

export const editBoard = ({ data, callBack }) => {
  return {
    type: boardTypes.UPDATE_BOARD,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: boardApi.UPDATE_BOARD,

      enableMessages: true,
      successMessage: "Board Updated Successfully",
      failMessage: "Failed to update Board",
      callBack,
    },
  };
};

export const deleteBoard = ({ data, callBack }) => {
  return {
    type: boardTypes.DELETE_BOARD,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: boardApi.DELETE_BOARD,
      isFormData: false,
      enableMessages: true,
      successMessage: "Board deleted Successfully",
      failMessage: "Failed to delete Board",
      callBack,
    },
  };
};

export const getAllBoards = () => {
  return {
    type: boardTypes.GET_ALL_BOARDS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: boardApi.GET_ALL_BOARDS,
    },
  };
};
