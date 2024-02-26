import { languageApi } from "../../API";
import { languageTypes, REQUESTMETHOD } from "../types";

export const getLanguages = ({ query, callBack }) => {
  return {
    type: languageTypes.GET_LANGUAGES,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: languageApi.GET_LANGUAGES,
      callBack,
    },
  };
};

export const addLanguage = ({ data, callBack }) => {
  return {
    type: languageTypes.ADD_LANGUAGE,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: languageApi.ADD_LANGUAGE,

      enableMessages: true,
      successMessage: "Language Added Successfully",
      failMessage: "Failed to add Language",
      callBack,
    },
  };
};

export const editLanguage = ({ data, callBack }) => {
  delete data.subLanguages;
  return {
    type: languageTypes.UPDATE_LANGUAGE,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: languageApi.UPDATE_LANGUAGE,

      enableMessages: true,
      successMessage: "Language Updated Successfully",
      failMessage: "Failed to update Language",
      callBack,
    },
  };
};

export const deleteLanguage = ({ data, callBack }) => {
  return {
    type: languageTypes.DELETE_LANGUAGE,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: languageApi.DELETE_LANGUAGE,
      isFormData: false,
      enableMessages: true,
      successMessage: "Language deleted Successfully",
      failMessage: "Failed to delete Language",
      callBack,
    },
  };
};

export const getAllLanguages = () => {
  return {
    type: languageTypes.GET_ALL_LANGUAGES,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: languageApi.GET_ALL_LANGUAGES,
    },
  };
};
