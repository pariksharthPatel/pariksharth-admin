import { aoiApi } from "../../API";
import { aoiTypes, REQUESTMETHOD } from "../types";

export const getAois = ({ query, callBack }) => {
  console.log("query", query);
  return {
    type: aoiTypes.GET_AOIS,
    request: {
      method: REQUESTMETHOD.GET,
      params: query,

      enableMessages: false,
      url: aoiApi.GET_AOIS,
      callBack,
    },
  };
};

export const addAoi = ({ data, callBack }) => {
  return {
    type: aoiTypes.ADD_AOI,
    request: {
      method: REQUESTMETHOD.POST,
      data: data,
      url: aoiApi.ADD_AOI,

      enableMessages: true,
      successMessage: "Aoi Added Successfully",
      failMessage: "Failed to add Aoi",
      callBack,
    },
  };
};

export const editAoi = ({ data, callBack }) => {
  delete data.subAois;
  return {
    type: aoiTypes.UPDATE_AOI,
    request: {
      method: REQUESTMETHOD.PATCH,
      data: data,
      url: aoiApi.UPDATE_AOI,

      enableMessages: true,
      successMessage: "Aoi Updated Successfully",
      failMessage: "Failed to update Aoi",
      callBack,
    },
  };
};

export const deleteAoi = ({ data, callBack }) => {
  return {
    type: aoiTypes.DELETE_AOI,
    request: {
      method: REQUESTMETHOD.DELETE,
      data: data,
      url: aoiApi.DELETE_AOI,
      isFormData: false,
      enableMessages: true,
      successMessage: "Aoi deleted Successfully",
      failMessage: "Failed to delete Aoi",
      callBack,
    },
  };
};

export const getAllAois = () => {
  return {
    type: aoiTypes.GET_ALL_AOIS,
    request: {
      method: REQUESTMETHOD.GET,

      enableMessages: false,
      url: aoiApi.GET_ALL_AOIS,
    },
  };
};
