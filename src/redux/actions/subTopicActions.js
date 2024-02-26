import { subTopicApi } from "../../API";
import { subTopicTypes, REQUESTMETHOD } from "../types";

export const getSubTopics = ({ query, callBack }) => {
  return {
    type: subTopicTypes.GET_SUB_TOPICS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: subTopicApi.GET_SUB_TOPICS,
      callBack,
    },
  };
};

export const addSubTopic = ({ data, callBack }) => {
  return {
    type: subTopicTypes.ADD_SUB_TOPIC,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: subTopicApi.ADD_SUB_TOPIC,
      isFormData: true,
      enableMessages: true,
      successMessage: "SubTopic Added Successfully",
      failMessage: "Failed to add SubTopic",
      callBack,
    },
  };
};

export const editSubTopic = ({ data, callBack }) => {
  return {
    type: subTopicTypes.UPDATE_SUB_TOPIC,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: subTopicApi.UPDATE_SUB_TOPIC,
      isFormData: true,

      enableMessages: true,
      successMessage: "SubTopic Updated Successfully",
      failMessage: "Failed to update SubTopic",
      callBack,
    },
  };
};

export const deleteSubTopic = ({ data, callBack }) => {
  return {
    type: subTopicTypes.DELETE_SUB_TOPIC,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: subTopicApi.DELETE_SUB_TOPIC,
      isFormData: false,
      enableMessages: true,
      successMessage: "SubTopic deleted Successfully",
      failMessage: "Failed to delete SubTopic",
      callBack,
    },
  };
};

export const getAllCategories = () => {
  return {
    type: subTopicTypes.GET_ALL_SUB_TOPICS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: subTopicApi.GET_ALL_SUB_TOPICS,
    },
  };
};
