import { themeApi } from "../../API";
import { themeTypes, REQUESTMETHOD } from "../types";


export const getAllThemes = () => {
  return {
    type: themeTypes.GET_ALL_THEMES,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: themeApi.GET_ALL_THEMES,
    },
  };
};
export const getThemes = ({ query, callBack }) => {
  return {
    type: themeTypes.GET_THEMES,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: themeApi.GET_THEMES,
      callBack,
    },
  };
};



export const addTheme = ({ data, callBack }) => {
  return {
    type: themeTypes.ADD_THEME,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: themeApi.ADD_THEME,
      isFormData: false,
      enableMessages: true,
      successMessage: "Theme Added Successfully",
      failMessage: "Failed to add Theme",
      callBack,
    },
  };
};

export const editTheme = ({ data, callBack }) => {
  return {
    type: themeTypes.UPDATE_THEME,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: themeApi.UPDATE_THEME,
      isFormData: false,
      enableMessages: true,
      successMessage: "Theme Updated Successfully",
      failMessage: "Failed to update Theme",
      callBack,
    },
  };
};

export const deleteTheme = ({ data, callBack }) => {
  return {
    type: themeTypes.DELETE_THEME,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: themeApi.DELETE_THEME,
      isFormData: false,
      enableMessages: true,
      successMessage: "Theme deleted Successfully",
      failMessage: "Failed to delete Theme",
      callBack,
    },
  };
};
