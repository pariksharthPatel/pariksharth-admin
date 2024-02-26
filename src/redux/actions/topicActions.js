import { topicApi } from "../../API";
import { topicTypes, REQUESTMETHOD } from "../types";

export const getTopics = ({ query, callBack }) => {
  console.log("query", query);
  return {
    type: topicTypes.GET_TOPICS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: topicApi.GET_TOPICS,
      callBack,
    },
  };
};

export const addTopic = ({ data, callBack }) => {
  return {
    type: topicTypes.ADD_TOPIC,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: topicApi.ADD_TOPIC,
      isFormData: true,
      enableMessages: true,
      successMessage: "Topic Added Successfully",
      failMessage: "Failed to add Topic",
      callBack,
    },
  };
};

export const editTopic = ({ data, callBack }) => {
  delete data.subTopics;
  return {
    type: topicTypes.UPDATE_TOPIC,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: topicApi.UPDATE_TOPIC,
      isFormData: true,

      enableMessages: true,
      successMessage: "Topic Updated Successfully",
      failMessage: "Failed to update Topic",
      callBack,
    },
  };
};

export const deleteTopic = ({ data, callBack }) => {
  return {
    type: topicTypes.DELETE_TOPIC,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: topicApi.DELETE_TOPIC,
      isFormData: false,
      enableMessages: true,
      successMessage: "Topic deleted Successfully",
      failMessage: "Failed to delete Topic",
      callBack,
    },
  };
};

export const getAllCategories = () => {
  return {
    type: topicTypes.GET_ALL_TOPICS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: topicApi.GET_ALL_TOPICS,
    },
  };
};
