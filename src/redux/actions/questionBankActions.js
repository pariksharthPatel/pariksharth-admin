import { questionBankApi } from "../../API";
import { questionBankTypes, REQUESTMETHOD } from "../types";

export const getQuestionBanks = ({ query, callBack }) => {
  return {
    type: questionBankTypes.GET_QUESTION_BANKS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: questionBankApi.GET_QUESTION_BANKS,
      callBack,
    },
  };
};

export const addQuestionBank = ({ data, callBack }) => {
  return {
    type: questionBankTypes.ADD_QUESTION_BANK,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: questionBankApi.ADD_QUESTION_BANK,
      isFormData: true,
      enableMessages: true,
      successMessage: "QuestionBank Added Successfully",
      failMessage: "Failed to add QuestionBank",
      callBack,
    },
  };
};

export const importQuestionBank = ({ data, callBack }) => {
  return {
    type: questionBankTypes.IMPORT_QUESTION_BANK,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: questionBankApi.IMPORT_QUESTION_BANK,
      isFormData: false,
      enableMessages: true,
      successMessage: "QuestionBanks Imported Successfully",
      failMessage: "Failed to immport QuestionBanks",
      callBack,
    },
  };
};

export const editQuestionBank = ({ data, callBack }) => {
  delete data.topics;
  return {
    type: questionBankTypes.UPDATE_QUESTION_BANK,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: questionBankApi.UPDATE_QUESTION_BANK,
      isFormData: true,

      enableMessages: true,
      successMessage: "QuestionBank Updated Successfully",
      failMessage: "Failed to update QuestionBank",
      callBack,
    },
  };
};

export const deleteQuestionBank = ({ data, callBack }) => {
  return {
    type: questionBankTypes.DELETE_QUESTION_BANK,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: questionBankApi.DELETE_QUESTION_BANK,
      isFormData: false,
      enableMessages: true,
      successMessage: "QuestionBank deleted Successfully",
      failMessage: "Failed to delete QuestionBank",
      callBack,
    },
  };
};

export const getAllQuestionBanks = () => {
  return {
    type: questionBankTypes.GET_ALL_QUESTION_BANKS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: questionBankApi.GET_ALL_QUESTION_BANKS,
    },
  };
};
export const getAllMyQuestionBanks = () => {
  return {
    type: questionBankTypes.GET_ALL_QUESTION_BANKS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: questionBankApi.GET_ALL_MY_QUESTION_BANKS,
    },
  };
};
